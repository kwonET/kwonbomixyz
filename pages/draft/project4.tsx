import Container from "components/common/Container";
import Link from "next/link";

const Project4 = () => {
  return (
    <Container checkedMenu="Draft">
      <div className="p-20 bg-white min-h-screen mt-6 pt-2 md:pt-[200px]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/draft"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              ← Draft로 돌아가기
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Mouse interaction with p5js
          </h1>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <video
              src="/draft/draft4m.mov"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              프로젝트 개요
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              p5.js 내장함수 curve를 이용해 마우스 인터랙션을 구현했습니다.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Link</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="https://github.com/kwonET/Creative-Coding-2024/tree/main?tab=readme-ov-file#2-bezier"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/kwonET/Creative-Coding-2024/blob/main/P2_lump/sketch.js"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
              >
                Source Code
              </a>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 특징
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>p5.js의 curve 함수를 조합</li>
              <li>마우스의 위치에 따른 반응형 인터랙션</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">
                p5.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project4;
