import React, { useState, useEffect } from 'react';

interface SandBoxProps {
  running: boolean;
  result: string;
  cellSize?: number;
}
const SandBox = ({ running, result, cellSize }: SandBoxProps) => {
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
          let cellSize = ${cellSize}; ${src}
        </script>
      </body>
    </html>
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