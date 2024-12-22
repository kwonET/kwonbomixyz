import Container from "components/Container";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from 'next/image';
import { MDXComponents } from 'mdx/types';

// MDX 컴포넌트 매핑
const components: MDXComponents = {
  img: (props) => (
    <span className="block my-6">
      <img
        {...props}
        className="rounded-lg w-full"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </span>
  ),
  // p 태그가 img를 감싸지 않도록 조정
  p: ({ children, ...props }) => {
    // img 태그가 있는지 확인
    const hasImg = (children as any)?.type === 'img';

    // img가 있으면 fragment로 반환, 없으면 p 태그로 반환
    return hasImg ? (
      <>{children}</>
    ) : (
      <p className="mb-4" {...props}>
        {children}
      </p>
    );
  },
  h1: (props) => <h1 className="mt-8 mb-4 text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="mt-8 mb-4 text-2xl font-bold" {...props} />,
  h3: (props) => <h3 className="mt-6 mb-4 text-xl font-bold" {...props} />,
};

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
      <div className="m-auto my-24 prose prose-lg leading-6 w-full max-w-[786px]">
        <MDXComponent components={components} />
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