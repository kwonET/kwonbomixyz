import { useEffect, useMemo, useRef } from "react";

interface SandBoxOverlayProps {
  cellSize?: number;
  scrollProgress?: number; // 스크롤 진행도 (0-1)
  overlayColor?: string; // 오버레이 색상
}

const SandBoxOverlay = ({
  cellSize = 6,
  scrollProgress = 0,
  overlayColor = "#FF0000",
}: SandBoxOverlayProps) => {
  const srcdoc = useMemo(() => {
    return `
    <!doctype html>
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>
        <style>
          body { padding:0; margin:0; min-height: 1000px; overflow: hidden; }
          main { display: flex; justify-content: center; align-items: center; min-height: 1000px; }
        </style>
      </head>
      <body>
        <main id="sketch-container"></main>
        <script>
          // 보안을 위한 네트워크 요청 차단
          delete window.fetch;
          delete window.XMLHttpRequest;
          
          let cellSize = ${cellSize};
          let columnCount = 0;
          let rowCount = 0;
          let scrollProgress = ${scrollProgress};
          let overlayColor = "${overlayColor}";
          let overlayGrid = []; // 오버레이 셀들의 상태 (true/false)
          
          function setup() {
            const container = document.getElementById("sketch-container");
            const canvasWidth = container.offsetWidth;
            const canvasHeight = container.offsetHeight;

            const canvas = createCanvas(canvasWidth, canvasHeight);
            canvas.parent("sketch-container");

            initOverlayGrid();
            updateOverlayGrid();
          }

          function draw() {
            // 배경을 투명하게
            clear();
            
            // 오버레이 셀들만 그리기
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                if (overlayGrid[column][row]) {
                  fill(overlayColor);
                  noStroke();
                  rect(column * cellSize, row * cellSize, cellSize);
                }
              }
            }
          }

          function initOverlayGrid() {
            columnCount = floor(width / cellSize);
            rowCount = floor(height / cellSize);

            overlayGrid = [];
            for (let column = 0; column < columnCount; column++) {
              overlayGrid[column] = [];
              for (let row = 0; row < rowCount; row++) {
                overlayGrid[column][row] = false;
              }
            }
          }

          function updateOverlayGrid() {
            // 스크롤 진행도에 따라 채워질 셀의 개수 결정
            const totalCells = columnCount * rowCount;
            const cellsToFill = Math.floor(totalCells * scrollProgress);
            
            // 모든 셀을 false로 초기화
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                overlayGrid[column][row] = false;
              }
            }
            
            // 랜덤하게 셀들을 선택하여 채우기
            let filledCells = 0;
            while (filledCells < cellsToFill && filledCells < totalCells) {
              const randomCol = Math.floor(Math.random() * columnCount);
              const randomRow = Math.floor(Math.random() * rowCount);
              
              if (!overlayGrid[randomCol][randomRow]) {
                overlayGrid[randomCol][randomRow] = true;
                filledCells++;
              }
            }
          }

          // 스크롤 진행도 업데이트 받기
          window.addEventListener('message', function(event) {
            try {
              const data = JSON.parse(event.data);
              if (data.type === 'scrollUpdate') {
                scrollProgress = data.progress;
                updateOverlayGrid();
                redraw(); // 한 번만 다시 그리기
              }
            } catch (e) {
              // JSON 파싱 에러 무시
            }
          });

          function windowResized() {
            const container = document.getElementById("sketch-container");
            resizeCanvas(container.offsetWidth, container.offsetHeight);
            initOverlayGrid();
            updateOverlayGrid();
            redraw();
          }

          // 애니메이션 루프 비활성화 (정적 오버레이)
          noLoop();
        </script>
      </body>
    </html>
  `;
  }, [cellSize, overlayColor]);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // scrollProgress가 변경될 때마다 iframe에 메시지 전송
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          type: "scrollUpdate",
          progress: scrollProgress,
        }),
        "*"
      );
    }
  }, [scrollProgress]);

  return (
    <div className="w-full h-screen pointer-events-none">
      <iframe
        ref={iframeRef}
        title="p5-overlay"
        width="100%"
        height="100%"
        srcDoc={srcdoc}
        sandbox="allow-scripts"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default SandBoxOverlay;
