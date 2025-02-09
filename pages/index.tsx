import Container from "../components/Container";
import metadata from "../data/metadata";
import RecentPosts from "../components/RecentPosts";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import P5jsContainer from "@/components/P5js/P5jsContainer";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container checkedMenu={'Home'}><P5jsContainer />
      {/* <div className={`relative h-[500px]`}>      </div> */}
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
