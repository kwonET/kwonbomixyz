import Container from "../components/Container";
import metadata from "../data/metadata";
import RecentPosts from "../components/RecentPosts";
import { allPosts } from "@/contentlayer/generated/Post/_index 4.mjs";
import { InferGetStaticPropsType } from "next";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container checkedMenu={'Home'}>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>

        </div>
        {/* <RecentPosts posts={posts} /> */}
      </div>
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
