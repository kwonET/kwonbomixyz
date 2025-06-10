import { allPosts } from ".contentlayer/generated";
import Container from "@components/common/Container";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SandBox from "../components/SandBox";
import { colorPair } from "../data/colors";
import source from "../data/sourcecode";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [colors, setColors] = useState(["00FFC2", "FFF"]);
  const [key, setKey] = useState(0);

  const setRandomColors = () => {
    const i = Math.floor(Math.random() * 4);
    setColors(colorPair[i]);
    setKey((prevKey) => prevKey + 1);
  };
  useEffect(() => {
    setRandomColors();
  }, []);
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
  return (
    <Container checkedMenu={"Home"}>
      <SandBox
        key={key}
        running={true}
        result={source}
        cellSize={7}
        colorPair={colors}
      />
      {/* <div className="text-center">
        <button
          onClick={changeColors}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Change Colors
        </button>
      </div> */}
    </Container>
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
