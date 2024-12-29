import React from "react";
import Container from "components/Container";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from 'next/image';
import { MDXComponents } from 'mdx/types';

// MDX 컴포넌트 매핑
const components: MDXComponents = {
  // 이미지
  img: (props) => (
    <span className="block my-6">
      <img
        {...props}
        className="w-full "
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </span>
  ),

  // 단락
  p: ({ children, ...props }) => {
    if (React.Children.toArray(children).some(child =>
      React.isValidElement(child) && child.type === 'img'
    )) {
      return children;
    }

    return (
      <p
        className="mt-6 mb-4 text-base md:text-lg leading-7 text-slate-700"
        {...props}
      >
        {children}
      </p>
    );
  },

  // 제목들
  h1: (props) => (
    <h1
      className="mt-16 mb-4 text-4xl font-extrabold text-slate-900 tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-2xl font-bold text-slate-900 tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-4 text-xl font-semibold text-slate-900 tracking-tight"
      {...props}
    />
  ),

  // 코드 블록
  pre: (props) => (
    <pre className="my-6 rounded-lg bg-slate-900 p-4 text-sm leading-6 text-slate-50 overflow-x-auto" {...props} />
  ),

  // 인라인 코드
  code: (props) => (
    <code
      className="px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-100 
        text-slate-900 font-mono text-[0.875em]"
      {...props}
    />
  ),

  // 리스트
  ul: (props) => (
    <ul className="my-6 ml-2 list-disc  text-base md:text-lg  text-slate-700 space-y-2" {...props} />
  ),
  ol: (props) => (
    <ol className="my-6 ml-2 list-decimal  text-base md:text-lg  text-slate-700 space-y-2" {...props} />
  ),

  // 블록쿼트
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-slate-300
        text-lg italic text-slate-700"
      {...props}
    />
  ),

  // 링크
  a: (props) => (
    <a
      className="font-medium text-sky-500 hover:text-sky-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
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
      <article className="mx-auto lg:px-0 my-16 max-w-3xl font-notosans">
        <div className="mdx-content prose prose-slate lg:prose-lg
          prose-headings:font-bold prose-headings:tracking-tight
          prose-pre:bg-slate-900 prose-pre:shadow-lg
          max-w-none">
          <MDXComponent components={components} />
        </div>
      </article>
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