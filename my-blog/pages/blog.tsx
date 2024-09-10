import Container from "../components/Container";
import BlogPost from "../components/BlogPost";
import { allPosts } from "@/contentlayer/generated/Post/_index 5.mjs";
import { InferGetStaticPropsType } from "next";
const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container checkedMenu='Blog'>
      <div className={`w-full mt-72 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
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
