import Container from "components/Container";
import { allPosts } from "@/contentlayer/generated/Post/_index 6.mjs";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const postDate = new Date(post.date);
  let day = postDate.getDate();
  let month = postDate.getMonth() + 1;
  let year = postDate.getFullYear();

  const customMeta = {
    title: post.title,
    description: post.description,
    tag: post.tag,
    date: `${year}.${month}.${day}`,
  };
  return (
    <Container customMeta={customMeta} checkedMenu='BlogDetail'>
      <div className="m-auto mt-24 prose leading-6">
        <MDXComponent />
      </div>

    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    // slug: 마크다운의 파일명을 기반으로 지정하는 id
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // 동적 파라미터를 통해 파일명과 동일한 글을 찾아서 렌더링
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
