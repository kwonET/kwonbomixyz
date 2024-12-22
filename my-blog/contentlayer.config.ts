import { makeSource, defineDocumentType } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
import rehypePrismPlus from "rehype-prism-plus"; // 수정된 import 구문

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false,
    },
    date: { type: "string", required: true },
    tag: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrismPlus,
        {
          // 추가 기능 활성화
          showLineNumbers: true, // 줄 번호 표시
          ignoreMissing: true, // 지원하지 않는 언어 무시
          aliases: {
            // 언어 별칭 설정
            js: "javascript",
            ts: "typescript",
          },
        },
      ],
    ],
  },
});
