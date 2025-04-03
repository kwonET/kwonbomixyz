import * as React from 'react'
import Container from "../components/Container";
import metadata from "../data/metadata";
import RecentPosts from "../components/RecentPosts";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import P5jsContainerCSR from '@/components/P5js/P5jsContainerCSR';
import SandBox from '@/components/P5js/SandBox';
import source from '../components/HomeContents/sourcecode'
const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container checkedMenu={'Home'}>
      <SandBox running={true} result={source} cellSize={3} />
      {/* <div className={`relative h-[500px]`}>      </div> */}
    </Container >
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
