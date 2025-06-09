import Container from "components/common/Container";
import Image from "next/image";
import Link from "next/link";

const Project2 = () => {
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
            Mesh Gradient with css radial gradient
          </h1>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/draft_2.png"
              alt="Draft Project 2"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              프로젝트 개요
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              radial gradient를 조합해 새로운 형태의 mesh gradient 구현하고
              사용자의 인터랙션에 따라 다양한 결과물을 보여줍니다.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Link</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href="#"
                target="https://github.com/zepum/ui_craft/pull/15"
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
              <li>Tweakpane을 이용한 5가지 color 컨트롤 기능</li>
              <li>사용자 마우스의 위치에 따른 2가지의 포인터 인터랙션</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                Typescript
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
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
