import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../components/common/Container";
import SandBox from "../components/SandBox";
import SandBoxOverlay from "../components/SandBoxOverlay";
import { colorPair } from "../data/colors";
import source from "../data/sourcecode";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [colors, setColors] = useState(["00FFC2", "FFF"]);
  const [key, setKey] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [mainHeight, setMainHeight] = useState(1000); // main 요소 높이

  const setRandomColors = () => {
    const i = Math.floor(Math.random() * 4);
    setColors(colorPair[i]);
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    setRandomColors();
    // 클라이언트 사이드에서 main 요소 높이 설정
    if (typeof window !== "undefined") {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        setMainHeight(mainElement.clientHeight);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleScroll = (event) => {
      // 스크롤 이벤트 throttling으로 부드러운 성능
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        // main 요소의 스크롤 위치를 가져옵니다
        const mainElement = event.target;
        const currentScrollY = mainElement.scrollTop;

        console.log("main element scrollTop:", currentScrollY);
        setScrollY(currentScrollY);

        // 오버레이가 거의 완성될 때 자기소개 표시 (스크롤 진행도 90% 이상)
        const currentScrollProgress =
          mainHeight > 0 ? Math.min(1, currentScrollY / mainHeight) : 0;
        if (currentScrollProgress > 0.9) {
          setShowIntro(true);
        } else {
          setShowIntro(false);
        }

        throttleTimeout = null;
      }, 33); // 30fps로 줄여서 성능 향상 (33ms throttling)
    };

    const handleResize = () => {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        setMainHeight(mainElement.clientHeight);
      }
    };

    // main 요소를 찾아서 스크롤 이벤트 등록
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [mainHeight]);

  const changeColors = () => {
    setRandomColors();
  };

  useEffect(() => {
    const handleRouteComplete = (url: string) => {
      if (url === "/" || url.startsWith("/?")) {
        setRandomColors();
      }
    };
    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  });

  // 스크롤 기반 opacity 계산 (0에서 시작해서 점진적으로 사라짐)
  const sandboxOpacity = Math.max(0, 1 - scrollY / mainHeight);
  // 스크롤 진행도 계산 (0-1) - mainHeight가 0이 아닐 때만 계산
  const scrollProgress = mainHeight > 0 ? Math.min(1, scrollY / mainHeight) : 0;

  useEffect(() => {
    console.log(
      "scrollY:",
      scrollY,
      "mainHeight:",
      mainHeight,
      "scrollProgress:",
      scrollProgress
    );
  }, [scrollProgress, scrollY, mainHeight]);

  return (
    <div className="relative">
      <Container checkedMenu={"Home"}>
        {/* P5.js SandBox - 기존 Game of Life */}
        <div
          className="fixed top-0 left-0 w-full h-screen"
          style={{
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <SandBox
            key={key}
            running={true}
            result={source}
            cellSize={6}
            colorPair={colors}
          />
        </div>

        {/* P5.js SandBox Overlay - 스크롤 기반 오버레이 */}
        <div
          className="fixed top-0 left-0 w-full h-screen"
          style={{
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <SandBoxOverlay
            cellSize={6}
            scrollProgress={Math.min(scrollProgress * 2.5, 1)} // 원형 패턴에 맞춰 조정
            overlayColor={colors}
          />
        </div>

        {/* 스크롤 유도 아이콘 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white opacity-70"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* 자기소개 섹션 */}
        <div className="min-h-screen">
          {/* 첫 번째 섹션 - 빈 공간 (SandBox가 보이는 구간) */}
          <div className="h-screen"></div>

          {/* 두 번째 섹션 - 자기소개 */}
          <div
            className={`min-h-screen bg-gradient-to-b from-transparent to-black/90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-700`}
            style={{ zIndex: 10 }} // 오버레이 위로 표시
          >
            <div className="max-w-4xl mx-auto px-6 text-center text-white">
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                안녕하세요
              </h1>
              <h2 className="text-3xl mb-6 font-light">개발자 권보미입니다</h2>
              <p className="text-xl leading-relaxed mb-8 text-gray-300">
                창의적인 아이디어를 코드로 구현하는 것을 좋아하는 풀스택
                개발자입니다.
                <br />
                사용자 경험을 중시하며, 아름답고 직관적인 인터페이스를 만들기
                위해 노력합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                  <p className="text-gray-300">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Backend</h3>
                  <p className="text-gray-300">
                    Node.js, Python, Database Design
                  </p>
                </div>
                <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Creative</h3>
                  <p className="text-gray-300">
                    P5.js, Interactive Design, Animation
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <button
                  onClick={changeColors}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  색상 변경하기
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </Container>
    </div>
  );
};
export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};
export default Home;
