import Link from "next/link";
import React from "react";

interface BlogPostProps {
  // onPostFocus: () => void;
  // onPostFocusOut: () => void;
  date: string;
  title: string;
  tag: string;
  slug: string;
}
const BlogPost: React.FC<BlogPostProps> = ({
  // onPostFocus,
  date,
  title,
  tag,
  slug,
}) => {
  // const handleFocus = () => {
  //   onPostFocus();
  // };
  // const handleFocusOut = () => {
  //   onPostFocusOut();
  // };
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div
        className="w-full grid grid-rows-[auto_auto_auto] md:grid-rows-1 md:grid-cols-3 overflow-hidden gap-2 md:gap-4
      py-4 md:py-6 px-3 md:px-4
      hover:bg-[#F7F7F7] hover:animate-pulse cursor-pointer 
      border-solid border-b-[1px] border-neutral-200"
        // onMouseOut={handleFocusOut}
        // onMouseEnter={handleFocus}
        tabIndex={0}
      >
        <div className={`text-base font-medium flex justify-start order-1`}>
          {title}
        </div>
        <div className="text-sm md:text-base font-medium text-gray-400 flex justify-start md:justify-center order-3 md:order-2">
          {date}
        </div>
        <div
          className={`text-sm md:text-base font-medium flex justify-start md:justify-end order-2 md:order-3 text-gray-600`}
        >
          {tag}
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
