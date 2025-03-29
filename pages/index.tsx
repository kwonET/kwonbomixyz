import * as React from 'react'
import Container from "../components/Container";
import metadata from "../data/metadata";
import RecentPosts from "../components/RecentPosts";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import P5jsContainerCSR from '@/components/P5js/P5jsContainerCSR';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container checkedMenu={'Home'}>
      <P5jsContainerCSR />
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
