import Link from "next/link";
import React from "react";

interface BlogPostProps {
  onPostFocus: () => void;
  onPostFocusOut: () => void;
  date: string;
  title: string;
  tag: string;
  slug: string;
}
const BlogPost: React.FC<BlogPostProps> = ({ onPostFocus, onPostFocusOut, date, title, tag, slug }) => {
  const handleFocus = () => {
    onPostFocus();
  }
  const handleFocusOut = () => {
    onPostFocusOut();
  }
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="w-full grid grid-cols-3 overflow-hidden  hover:bg-[#F7F7F7] hover:animate-pulse cursor-pointer"
        onMouseOut={handleFocusOut}
        onMouseEnter={handleFocus} tabIndex={0}>
        <div className={`text-base font-medium flex justify-start`}>{title}</div>
        <div className="text-base font-medium text-gray-400 flex justify-center">{date}</div>
        <div className={`text-base font-medium flex justify-end`}>{tag}</div>
      </div>
    </Link >
  );
};

export default BlogPost;
