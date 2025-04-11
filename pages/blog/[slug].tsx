import React from "react";
import Container from "../../components/common/Container";
import { allPosts } from ".contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from 'next/image';
import { MDXComponents } from 'mdx/types';

// MDX 컴포넌트 매핑
const components: MDXComponents = {
  // 이미지
  img: (props) => (
    <span className="block">
      <img
        {...props}
        className="w-full"
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
        className="text-body md:text-body-md lg:text-body-lg text-font"
        {...props}
      >
        {children}
      </p>
    );
  },

  // 코드 블록
  blockquote: (props) => (
    <blockquote className="my-6 rounded-lg p-4 text-small md:text-small-md lg:text-small-lg text-bg-light overflow-x-auto  non-italic" {...props} />
  ),



  // 제목들
  h1: (props) => (
    <h1
      className="text-h4 md:text-h4-md lg:text-h4-lg text-font-dark tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-h4 md:text-h4-md lg:text-h4-lg text-font-dark tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-h4 md:text-h4-md lg:text-h4-lg text-font-dark inline-block bg-primary tracking-tight"
      {...props}
    />
  ),

  // 코드 블록
  pre: (props) => (
    <pre className="my-6 rounded-lg p-4 text-small md:text-small-md lg:text-small-lg text-bg-light overflow-x-auto" {...props} />
  ),

  // 인라인 코드
  code: (props) => (
    <code
      className="px-1.5 py-0.5 mx-0.5 rounded-md text-bg-light
        bg-font text-small md:text-small-md lg:text-small-lg "
      {...props}
    />
  ),

  // 리스트
  ul: (props) => (
    <ul className="list-disc text-body md:text-body-md lg:text-body-lg text-font space-y-2 tracking-tight w-full" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal text-body md:text-body-md lg:text-body-lg text-font space-y-2  tracking-tight w-full" {...props} />
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
      <article className="mx-auto lg:px-0 my-16 max-w-[700px] font-pretendard">
        <div className="mdx-content prose prose-slate lg:prose-lg
          prose-headings:font-bold prose-headings:tracking-tight
          prose-pre:bg-slate-900 prose-pre:shadow-lg
          max-w-none mt-10">
          <div className="flex flex-col md:hidden mb-8 px-4">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight my-3 leading-snug font-gothic2">{post.title}</h1>
            <div className="flex items-center space-x-2 text-sm text-slate-600  font-gothic1">
              <time dateTime={post.date}>{customMeta.date}</time>
              {post.tag && (
                <>
                  <span className="text-slate-400">•</span>
                  <span>{post.tag}</span>
                </>
              )}
            </div>
          </div>
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