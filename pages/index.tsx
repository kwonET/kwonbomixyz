import * as React from 'react'
import { useState, useEffect } from 'react';
import Container from "../components/common/Container";
import metadata from "../data/metadata";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import SandBox from '@/components/p5js/SandBox';
import source from '../data/sourcecode'
import { colorPair } from '../data/colors'

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [colors, setColors] = useState(["00FFC2", "FFF"]);
  useEffect(() => {
    const i = (Math.floor(Math.random() * 4));
    setColors(colorPair[i]);
  }, [])

  return (
    <Container checkedMenu={'Home'}>
      <SandBox running={true} result={source} cellSize={7} colorPair={colors} />
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
