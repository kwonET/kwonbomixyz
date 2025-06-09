import { useEffect, useMemo, useRef } from "react";

interface SandBoxOverlayProps {
  cellSize?: number;
  scrollProgress?: number; // 스크롤 진행도 (0-1)
  overlayColor?: string[]; // 오버레이 색상
}

const SandBoxOverlay = ({
  cellSize = 6,
  scrollProgress = 0,
  overlayColor,
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
          let overlayColor = "#FFF";
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
            
            // 부드러운 전환을 위한 easing 함수 적용
            const easedProgress = easeInOutQuad(scrollProgress);
            const cellsToFill = Math.floor(totalCells * easedProgress);
            
            // 모든 셀을 false로 초기화
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                overlayGrid[column][row] = false;
              }
            }
            
            // 각 셀의 우선순위를 계산하여 부드러운 패턴 생성
            let cellPriorities = [];
            for (let column = 0; column < columnCount; column++) {
              for (let row = 0; row < rowCount; row++) {
                // 중앙에서의 거리 + 약간의 랜덤성으로 우선순위 결정
                const centerX = columnCount / 2;
                const centerY = rowCount / 2;
                const distanceFromCenter = Math.sqrt(
                  Math.pow(column - centerX, 2) + Math.pow(row - centerY, 2)
                );
                
                // 거리 기반 + 노이즈로 부드러운 패턴 생성
                const noise = (Math.sin(column * 0.1) + Math.cos(row * 0.1)) * 0.5;
                const priority = distanceFromCenter + noise + Math.random() * 2;
                
                cellPriorities.push({
                  column: column,
                  row: row,
                  priority: priority
                });
              }
            }
            
            // 우선순위 순으로 정렬
            cellPriorities.sort((a, b) => a.priority - b.priority);
            
            // 우선순위 순으로 셀 채우기
            for (let i = 0; i < Math.min(cellsToFill, cellPriorities.length); i++) {
              const cell = cellPriorities[i];
              overlayGrid[cell.column][cell.row] = true;
            }
          }
          
          // easing 함수 - 부드러운 가속/감속
          function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
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
