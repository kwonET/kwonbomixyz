const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 font-pretendard">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">권보미</h1>
        <div className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <p className="mb-3">
            아이디어와 호기심을 <strong>시각적 결과물</strong>로 구현하고자 하는
            도전정신을 가지고 있어요. <br />더 많은 사람들에게{" "}
            <strong>웹의 아름다움</strong>을 보여주고 싶습니다.
          </p>
          <p>
            겸손과 존중을 가지고, 경청하며 대화하며 적극적으로 소통하고자
            노력해요.
          </p>
        </div>
      </div>

      {/* Career Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">경력</h2>
        <div className="border-l-4 border-gray-300 pl-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">삼성SDS</h3>
              <p className="text-gray-600 mb-2">
                정규직 | 플랫폼그룹 (ERP기술팀)
              </p>
            </div>
            <span className="text-sm text-gray-500 font-medium">
              2024.07 - 재직 중
            </span>
          </div>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                삼성전자 DS의 ERP 시스템 (SAP Netweaver) 웹 서버 운영 관리
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span>
                SAP Netweaver 웹 서버 성능 최적화 및 인프라 관리를 통한 안정적
                운영 구축
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">프로젝트</h2>

        {/* Project 1: ganpan */}
        <div className="mb-12 border-l-4 border-gray-300 pl-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">ganpan</h3>
            <div className="text-sm text-gray-500 mt-2 md:mt-0">
              <span className="block font-medium">팀원 2명</span>
              <span>2024.07 - 2024.11</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> 사용자 입력에 따라 실시간으로 간판
            이미지를 조합하여 콜라주를 생성하는 웹 서비스
          </p>

          <div className="mb-4">
            <strong className="text-gray-800">Website:</strong>
            <div className="mt-2 space-x-4">
              <a
                href="https://ganpan.vercel.app/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://kwonbomi.xyz/blog/blog3"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
              <a
                href="https://github.com/YewonCALLI/ganpan"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>

          <div className="mb-6">
            <strong className="text-gray-800 block mb-3">Skills:</strong>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "three.js",
                "tailwindcss",
                "Typescript",
                "supabase",
                "Vercel",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-800 font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <strong className="text-gray-800 block mb-3">My roles:</strong>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-gray-800 mb-2">
                  • 실시간 이미지 렌더링 시스템 구축
                </div>
                <ul className="ml-4 space-y-1.5 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    사용자 입력에 따른 이미지 API 통신 및 2차원 배열 기반 이미지
                    레이아웃 자동 계산
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    직사각형 비율 유지를 위한 동적 크기 조정 알고리즘 구현
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    띄어쓰기 기반 자동 줄바꿈과 들여쓰기 기능으로 직관적인
                    사용자 경험 구현
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    총 188개의 콜라주 이미지 생성
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-2">
                  • 풀스택 API 및 데이터베이스 설계
                </div>
                <ul className="ml-4 space-y-1.5 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    1,730개 이미지 데이터를 효율적으로 관리하는 PostgreSQL 기반
                    관계형 DB 설계
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    TypeScript 기반 RESTful API 구현으로 클라이언트-서버 통신
                    최적화
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Supabase Storage와 Table을 활용한 대용량 이미지 관리 시스템
                    구축
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: kwonbomi.xyz */}
        <div className="border-l-4 border-gray-300 pl-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              kwonbomi.xyz
            </h3>
            <div className="text-sm text-gray-500 mt-2 md:mt-0">
              <span className="block font-medium">개인</span>
              <span>2024.12 - 현재</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> 기술 아티클과 인터랙션 작업을 정리한
            개인 블로그
          </p>

          <div className="mb-4">
            <strong className="text-gray-800">Website:</strong>
            <div className="mt-2 space-x-4">
              <a
                href="https://kwonbomi.xyz/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href="https://kwonbomi.xyz/blog/blog7"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </a>
              <a
                href="https://github.com/kwonET/kwonbomixyz"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>

          <div className="mb-6">
            <strong className="text-gray-800 block mb-3">Skills:</strong>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "tailwindcss",
                "Typescript",
                "Contentlayer",
                "MDX",
                "p5js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-800 font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <strong className="text-gray-800 block mb-3">My roles:</strong>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-gray-800 mb-2">
                  • 반응형 디자인 및 인터랙션 개발
                </div>
                <ul className="ml-4 space-y-1.5 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    모바일, 데스크탑 환경에 따른 적응형 레이아웃
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Tailwind CSS를 활용한 일관성 있는 디자인 시스템 구축
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    p5.js를 활용한 Conways Game of Life 셀룰러 오토마타
                    시뮬레이션을 활용한 인터랙션 제작
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-800 mb-2">
                  • 동적 콘텐츠 관리 시스템 개발
                </div>
                <ul className="ml-4 space-y-1.5 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    Contentlayer와 MDX를 결합한 인터랙티브 블로그 포스팅 시스템
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    코드 하이라이팅, 임베드 컴포넌트 지원으로 기술 아티클 작성
                    환경 구축
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Links Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Website</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://kwonbomi.xyz/blog"
            className="group p-6 border-l-4 border-gray-300 hover:bg-gray-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-blue-600 group-hover:text-blue-800 text-lg">
              개인 블로그
            </h3>
            <p className="text-gray-600 mt-2">
              기술 아티클과 프로젝트 경험 공유
            </p>
          </a>
          <a
            href="https://kwonbomi.xyz/draft"
            className="group p-6 border-l-4 border-gray-300 hover:bg-gray-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-blue-600 group-hover:text-blue-800 text-lg">
              Interaction draft
            </h3>
            <p className="text-gray-600 mt-2">인터랙티브 작업 모음</p>
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">교육</h2>
        <div className="border-l-4 border-gray-300 pl-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                서강대학교
              </h3>
              <p className="text-gray-600">
                아트앤테크놀로지학과, 컴퓨터공학 졸업
              </p>
            </div>
            <span className="text-sm text-gray-500 font-medium mt-2 md:mt-0">
              2020.03 ~ 2024.08
            </span>
          </div>
          <p className="text-gray-700">
            예술과 기술의 융합에 대해 공부하고 고민하며, 시각적 즐거움을
            제공하는 Creative Coding에 흥미를 갖게 되었습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
