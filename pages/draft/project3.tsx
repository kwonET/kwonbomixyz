import Container from "components/common/Container";
import Link from "next/link";

const Project3 = () => {
  return (
    <Container checkedMenu="Draft">
      <div className="p-4 md:p-20 bg-white min-h-screen mt-6 pt-2 md:pt-[200px]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/draft"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-gothic1"
            >
              ← Draft로 돌아가기
            </Link>
          </div>

          <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-6 font-gothic2">
            Dragon Representation with p5js
          </h1>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <video
              src="/draft/draft3m.mov"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 font-gothic2">
              프로젝트 개요
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-gothic1">
              bezier 함수를 통해 p5.js로 용의 움직임을 표현했습니다.
            </p>

            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 font-gothic2">Link</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="https://github.com/kwonET/Creative-Coding-2024?tab=readme-ov-file#1-dragon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs md:text-sm hover:bg-green-200 transition-colors duration-300 font-gothic1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/kwonET/Creative-Coding-2024/tree/main/P1_dragon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs md:text-sm hover:bg-gray-200 transition-colors duration-300 font-gothic1"
              >
                Source Code
              </a>
            </div>

            <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 font-gothic2">
              주요 특징
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 text-sm md:text-base font-gothic1">
              <li>p5.js를 이용한 4개의 제어점을 통한 3차 베지어 곡선 구현</li>
            </ul>

            <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 font-gothic2">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs md:text-sm font-gothic1">
                p5.js
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs md:text-sm font-gothic1">
                bezier
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project3;
