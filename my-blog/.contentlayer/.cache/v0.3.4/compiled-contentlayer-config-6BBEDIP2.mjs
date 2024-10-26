// contentlayer.config.ts
import { makeSource, defineDocumentType } from "contentlayer/source-files";
import rehypePrismPlus from "rehype-prism-plus";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: false
    },
    date: { type: "string", required: true },
    tag: { type: "string", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrismPlus,
        {
          // 추가 기능 활성화
          showLineNumbers: true,
          // 줄 번호 표시
          ignoreMissing: true,
          // 지원하지 않는 언어 무시
          aliases: {
            // 언어 별칭 설정
            js: "javascript",
            ts: "typescript"
          }
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-6BBEDIP2.mjs.map
