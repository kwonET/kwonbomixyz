import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/common/Container";
const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(
  //   null
  // );
  // const handleHover = (post: (typeof posts)[0]) => {
  //   setSelectedPost(post);
  // };

  return (
    <Container checkedMenu="Blog" selectedPost={posts[5]}>
      <div
        className={`w-full mt-20 md:mt-72 flex flex-col gap-2 pt-2 md:pt-[200px] `}
      >
        {posts.map((post) => (
          <BlogPost
            // onPostFocus={() => handleHover(post)}
            // onPostFocusOut={() => handleHover(post)}
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

export default Blog;
