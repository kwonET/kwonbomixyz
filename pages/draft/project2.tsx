import Container from "@components/common/Container";
import Link from "next/link";

const Project2 = () => {
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
            Mesh Gradient with css radial gradient
          </h1>

          <div className="flex gap-6 mb-8">
            <div className="relative aspect-square flex-1 rounded-lg overflow-hidden shadow-lg">
              <video
                src="/draft/draft2m.mov"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="relative aspect-square flex-1 rounded-lg overflow-hidden shadow-lg">
              <video
                src="/draft/draft2-1.mov"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 font-gothic2">
              프로젝트 개요
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-gothic1">
              radial gradient를 조합해 새로운 형태의 mesh gradient 구현하고
              사용자의 인터랙션에 따라 다양한 결과물을 보여줍니다.
            </p>

            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4 font-gothic2">
              Link
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="https://github.com/zepum/ui_craft/tree/main/packages/crafts/mesh-gradient"
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
              <li>Tweakpane을 이용한 5가지 color 컨트롤 기능</li>
              <li>사용자 마우스의 위치에 따른 2가지의 포인터 인터랙션</li>
            </ul>

            <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 font-gothic2">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs md:text-sm font-gothic1">
                CSS
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs md:text-sm font-gothic1">
                Typescript
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs md:text-sm font-gothic1">
                Ladle
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project2;
