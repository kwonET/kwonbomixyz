import Link from "next/link";

const BlogPost = ({ date, title, tag, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref legacyBehavior>
      <a className="flex flex-row w-full justify-between my-1 hover:-translate-x-1.5">
        <div className={`text-base font-medium`}>{title}</div>
        <div className="text-base font-medium text-gray-400">{date}</div>
        <div className={`text-base font-medium`}>{tag}</div>
      </a>
    </Link>
  );
};

export default BlogPost;
