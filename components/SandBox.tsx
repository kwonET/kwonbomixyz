import React, { useState, useEffect } from 'react';
interface SandBoxProps {
  running: boolean;
  result: string;
  cellSize?: number;
  colorPair?: string[];
}
const SandBox = ({ running, result, cellSize, colorPair }: SandBoxProps) => {
  const srcdoc = (src: string): string => `
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
          
          // P5.js 코드 실행
          let cellSize = ${cellSize}; 
          let columnCount = 0;
          let rowCount = 0;
          let currentCells = [];
          let nextCells = [];
          function setup() {
            // Get container dimensions
            const container = document.getElementById("sketch-container");
            const canvasWidth = container.offsetWidth;
            const canvasHeight = container.offsetHeight;

            // Create canvas
            const canvas = createCanvas(canvasWidth, canvasHeight);
            canvas.parent("sketch-container");

            // Set simulation framerate to avoid flickering
            frameRate(5);

            initCellSize();
          }

          function draw() {
            generate();
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
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
                rect(column * cellSize, row * cellSize, cellSize, cellSize);
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
                        </script >
                      </body >
                    </html >
                  `;

  // 이벤트 리스너 추가 (로그와 에러 수신)
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'log') {
          setLogs(prevLogs => [...prevLogs, ...data.data]);
        } else if (data.type === 'error') {
          console.error('Sketch error:', data.data);
          // 에러 UI 표시 로직 추가
        }
      } catch (e) {
        // JSON 파싱 에러 처리
      }
    };
    console.log(colorPair);

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
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
        title="p5-sandbox"
        width="100%"
        height="100%"
        srcDoc={srcdoc(result)}
        sandbox="allow-scripts"
        allow="accelerometer; camera; microphone; gamepad"
      />
    </div>
  );
};

export default SandBox;