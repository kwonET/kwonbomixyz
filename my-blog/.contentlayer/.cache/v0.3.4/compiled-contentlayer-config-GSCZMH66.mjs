// contentlayer.config.ts
import { makeSource, defineDocumentType } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
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
        rehypeHighlight,
        {
          theme: "github-dark"
          // 코드작성시 적용할 테마
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GSCZMH66.mjs.map
