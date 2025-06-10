import Container from "components/common/Container";
import Image from "next/image";
import Link from "next/link";

const Project1 = () => {
  return (
    <Container checkedMenu="Draft">
      <div className="p-4 md:p-20 bg-white min-h-screen mt-6 pt-5 md:pt-[200px]">
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
            Game of Life with p5js
          </h1>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/draft/draft1.png"
              alt="Draft Project 1"
              fill
              className="object-fill"
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 font-gothic2">
              프로젝트 개요
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-gothic1">
              John Conway의 Game of Life를 p5.js + Next.js로 구현했습니다.
            </p>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 font-gothic2">
              Link
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="https://kwonbomi.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs md:text-sm hover:bg-green-200 transition-colors duration-300 font-gothic1"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/kwonET/kwonbomixyz/blob/main/components/SandBox.tsx"
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
              <li>랜덤한 색 조합 및 클릭 시 초기화 기능 구현</li>
              <li>
                Next.js 환경에서의 P5js 인스턴스 렌더링 및{" "}
                <a
                  href="https://kwonbomi.xyz/blog/blog7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-gothic1"
                >
                  블로그 포스팅
                </a>
              </li>
            </ul>

            <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 font-gothic2">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-gothic1">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs md:text-sm font-gothic1">
                p5.js
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs md:text-sm font-gothic1">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project1;
