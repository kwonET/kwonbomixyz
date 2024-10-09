import Container from "../components/Container";
import BlogPost from "../components/BlogPost";
import { allPosts } from "@/contentlayer/generated/Post/_index 5.mjs";
import { InferGetStaticPropsType } from "next";
import React, { useState, useEffect } from "react";
const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const handleHover = (post: typeof posts[0]) => {
    setSelectedPost(post);
  }

  useEffect(() => {
  }, [selectedPost]);

  return (
    <Container checkedMenu='Blog' selectedPost={selectedPost}>
      <div className={`w-full mt-72 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
            onPostFocus={() => handleHover(post)}
            onPostFocusOut={() => handleHover(null)}
            date={post.date}
            title={post.title}
            tag={post.tag}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: { posts },
  };
};

export default blog;
