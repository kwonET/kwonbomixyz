import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const postDate = new Date(post.date);
  let day = postDate.getDate();
  let month = postDate.getMonth()+1;
  let year = postDate.getFullYear();

  const customMeta = {
    title: post.title,
    tag: post.tag,
    date: `${year}.${month}.${day}`,
  };
  return (
    <Container customMeta={customMeta} checkedMenu='BlogDetail'>
      <div className="mt-10 prose">
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
