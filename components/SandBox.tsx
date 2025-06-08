import { useEffect, useMemo, useState } from "react";
interface SandBoxProps {
  running: boolean;
  result?: string;
  cellSize?: number;
  colorPair?: string[];
  key?: number;
  scrollProgress?: number; // 스크롤 진행도 (0-1)
}
const SandBox = ({ running, result, cellSize, colorPair, scrollProgress = 0 }: SandBoxProps) => {
  const srcdoc = useMemo(() => {
    return `
    <!doctype html>
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>
        <style>
          body {  padding:0; margin:0; min-height: 1000px; overflow: hidden; }
          main { display: flex; justify-content: center; align-items: center; min-height: 1000px; }
        </style>
      </head>
      <body>
        <main id="sketch-container"></main>
        <script>
          // 보안을 위한 네트워크 요청 차단 (선택적)
          delete window.fetch;
          delete window.XMLHttpRequest;
          
          // 스크롤 진행도를 받기 위한 변수
          let scrollProgress = ${scrollProgress};
          let fadeOutCells = []; // 사라질 셀들의 인덱스
          
          // 로그 메시지를 부모 창으로 전달
          console.log = function(...args) {
            window.parent.postMessage(
              JSON.stringify({ type: 'log', data: args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
              )}), 
              '*'
            );
          };
          
          // 에러 처리
          window.addEventListener('error', function(e) {
            window.parent.postMessage(
              JSON.stringify({ type: 'error', data: e.message }), 
              '*'
            );
            return false;
          });

          // 부모 창으로부터 스크롤 진행도 업데이트 받기
          window.addEventListener('message', function(event) {
            try {
              const data = JSON.parse(event.data);
              if (data.type === 'scrollUpdate') {
                scrollProgress = data.progress;
                updateFadeOutCells();
                // 스크롤 진행도가 낮으면 애니메이션 재시작
                if (scrollProgress <= 0.8) {
                  loop();
                }
              }
            } catch (e) {
              // JSON 파싱 에러 무시
            }
          });
          
          // P5.js 코드 실행
          let cellSize = ${cellSize}; 
          let columnCount = 0;
          let rowCount = 0;
          let currentCells = [];
          let nextCells = [];

          function updateFadeOutCells() {
            // 스크롤 진행도에 따라 사라질 셀들을 결정
            const totalCells = columnCount * rowCount;
            const cellsToHide = Math.floor(totalCells * scrollProgress);
            
            // 기존 fadeOutCells 배열을 초기화
            fadeOutCells = [];
            
            // 성능 최적화: 셀 수가 많을 때는 더 적게 처리
            const maxCellsToProcess = Math.min(cellsToHide, totalCells * 0.7);
            
            // 랜덤하게 셀들을 선택하여 사라지게 함
            for (let i = 0; i < maxCellsToProcess; i++) {
              let randomCol, randomRow;
              let attempts = 0;
              do {
                randomCol = Math.floor(Math.random() * columnCount);
                randomRow = Math.floor(Math.random() * rowCount);
                attempts++;
              } while (fadeOutCells.some(cell => cell.col === randomCol && cell.row === randomRow) && attempts < 20);
              
              if (attempts < 20) {
                fadeOutCells.push({ col: randomCol, row: randomRow });
              }
            }
          }

          function setup() {
            // Get container dimensions
            const container = document.getElementById("sketch-container");
            const canvasWidth = container.offsetWidth;
            const canvasHeight = container.offsetHeight;

            // Create canvas
            const canvas = createCanvas(canvasWidth, canvasHeight);
            canvas.parent("sketch-container");

            // Set simulation framerate to avoid flickering
            frameRate(2);

            initCellSize();
            updateFadeOutCells();
          }

          function draw() {
            // 스크롤 진행도가 높을 때는 애니메이션 중지
            if (scrollProgress > 0.8) {
              noLoop();
              return;
            }
            
            generate();
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                // 현재 셀이 사라져야 하는지 확인
                const shouldFade = fadeOutCells.some(cell => cell.col === column && cell.row === row);
                
                if (shouldFade) {
                  // 사라지는 셀은 그리지 않음 (또는 투명하게)
                  continue;
                }

                // Get cell value (0 or 1)
                let cell = currentCells[column][row];

                // Set fill color based on cell state
                if (cell) {
                  fill("#${colorPair[0]}"); // Light blue for alive cells
                } else {
                  fill("#${colorPair[1]}"); // White for dead cells
                }
                strokeWeight(1);
                stroke('white');
                rect(column * cellSize, row * cellSize, cellSize);
              }
            }
          }

          // Reset board when mouse is pressed
          function mousePressed() {
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                // Randomly select value of either 0 (dead) or 1 (alive)
                currentCells[column][row] = random([0, 1]);
              }
            }
            updateFadeOutCells();
            loop();
          }

          // Keep canvas and its content responsive across window resizes
          function windowResized() {
            const container = document.getElementById("sketch-container");
            resizeCanvas(container.offsetWidth, container.offsetHeight);

            // Recalculate columns and rows
            columnCount = floor(width / cellSize);
            rowCount = floor(height / cellSize);

            // Resize the grid
            let tempCurrent = [];
            let tempNext = [];

            for (let column = 0; column < columnCount; column++) {
              tempCurrent[column] = [];
              tempNext[column] = [];
              for (let row = 0; row < rowCount; row++) {
                // If within old grid boundaries, keep values, otherwise initialize new
                if (column < currentCells.length && row < currentCells[0].length) {
                  tempCurrent[column][row] = currentCells[column][row];
                } else {
                  tempCurrent[column][row] = random([0, 1]);
                }
                tempNext[column][row] = 0;
              }
            }

            currentCells = tempCurrent;
            nextCells = tempNext;
            updateFadeOutCells();
          }

          // Create a new generation
          function generate() {
            // Loop through every spot in our 2D array and count living neighbors
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                // Column left of current cell
                // if column is at left edge, use modulus to wrap to right edge
                let left = (column - 1 + columnCount) % columnCount;

                // Column right of current cell
                // if column is at right edge, use modulus to wrap to left edge
                let right = (column + 1) % columnCount;

                // Row above current cell
                // if row is at top edge, use modulus to wrap to bottom edge
                let above = (row - 1 + rowCount) % rowCount;

                // Row below current cell
                // if row is at bottom edge, use modulus to wrap to top edge
                let below = (row + 1) % rowCount;

                // Count living neighbors surrounding current cell
                let neighbours =
                  currentCells[left][above] +
                  currentCells[column][above] +
                  currentCells[right][above] +
                  currentCells[left][row] +
                  currentCells[right][row] +
                  currentCells[left][below] +
                  currentCells[column][below] +
                  currentCells[right][below];

                // Rules of Life
                // 1. Any live cell with fewer than two live neighbours dies
                // 2. Any live cell with more than three live neighbours dies
                if (neighbours < 2 || neighbours > 3) {
                  nextCells[column][row] = 0;
                  // 3. Any dead cell with exactly three live neighbours will come to life
                } else if (neighbours === 3) {
                  nextCells[column][row] = 1;
                  // 4. Any live cell with two or three live neighbours lives unchanged
                } else {
                  nextCells[column][row] = currentCells[column][row];
                }
              }
            }

            // Swap the current and next arrays for next generation
            let temp = currentCells;
            currentCells = nextCells;
            nextCells = temp;
          }

          function initCellSize() {
            // Calculate columns and rows
            columnCount = floor(width / cellSize);
            rowCount = floor(height / cellSize);

            // Initialize the grid
            for (let column = 0; column < columnCount; column++) {
              currentCells[column] = [];
              nextCells[column] = [];
              // Initialize each cell with random state (0 or 1)
              for (let row = 0; row < rowCount; row++) {
                currentCells[column][row] = random([0, 1]);
                nextCells[column][row] = 0;
              }
            }
          }
        </script>
      </body>
    </html>
  `;
  }, [cellSize, colorPair, scrollProgress]); // scrollProgress 추가

  // 이벤트 리스너 추가 (로그와 에러 수신)
  const [logs, setLogs] = useState<string[]>([]);
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);

  // 스크롤 진행도가 변경될 때 iframe에 메시지 전송
  useEffect(() => {
    if (iframeRef && iframeRef.contentWindow) {
      iframeRef.contentWindow.postMessage(
        JSON.stringify({
          type: 'scrollUpdate',
          progress: scrollProgress
        }),
        '*'
      );
    }
  }, [scrollProgress, iframeRef]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "log") {
          setLogs((prevLogs) => [...prevLogs, ...data.data]);
        } else if (data.type === "error") {
          console.error("Sketch error:", data.data);
          // 에러 UI 표시 로직 추가
        }
      } catch (e) {
        // JSON 파싱 에러 처리
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!running) {
    return (
      <div className="w-full min-h-[500px] bg-gray-100 rounded text-sm text-gray-400 flex justify-center items-center">
        No sketches running
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <iframe
        ref={setIframeRef}
        title="p5-sandbox"
        width="100%"
        height="100%"
        srcDoc={srcdoc}
        sandbox="allow-scripts"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default SandBox;
