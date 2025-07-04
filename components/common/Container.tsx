import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import metadata from "../../data/metadata";
import FullHeightLine from "./FullHeightLine";
import FullHeightLineMargin from "./FullHeightLineMargin";
import Nav from "./Nav";

const Container = (props) => {
  const router = useRouter();
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };
  const handleClick = () => {
    router.replace("/");
  };
  const handleClickPost = () => {
    router.push("blog/blog3");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden font-gothic1">
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex flex-col p-1 -mt-1">
          <div className="flex flex-row items-center">
            <span
              className="ml-2 md:ml-6 mt-6 text-lg md:text-xl font-medium cursor-pointer"
              onClick={handleClick}
            >
              {metadata.title}
            </span>
          </div>
          <div className="max-w-screen h-px bg-black -mt-2"></div>
          <div
            className={`hidden md:flex relative ${
              props.checkedMenu === "Blog"
                ? "h-[418px]"
                : "h-[theme(containerHeight.home-height)]"
            } w-full`}
          >
            <Nav checkedMenu={props.checkedMenu} isMenu={true} />
            <div className="hidden md:block">
              <FullHeightLine />
            </div>
            <div className="flex flex-col w-full justify-center">
              {props.checkedMenu === "BlogDetail" && (
                <>
                  <h1 className="text-center font-semibold text-lg md:text-2xl mt-3 md:mt-5">
                    {meta.title}
                  </h1>
                  <h1 className="text-right text-sm mr-2 md:mr-6">
                    {meta.date}
                  </h1>
                </>
              )}
              {props.checkedMenu === "Blog" && props.selectedPost && (
                <div
                  onClick={handleClickPost}
                  className="hidden md:flex w-full h-[418px] cursor-pointer"
                >
                  <div className="w-1/2  relative">
                    <Image
                      src="/ganpan.png"
                      alt="ganpan"
                      fill
                      className="object-fill"
                    />
                  </div>
                  <div className="bg-black w-[1px] h-[100%]"></div>
                  <div className="w-1/2 p-4 flex flex-col-reverse">
                    <h2 className="text-base pt-1 whitespace-pre-wrap">
                      {props.selectedPost?.description}
                    </h2>
                    <p className="text-sm pt-1">{props.selectedPost?.date}</p>
                    <h1 className="font-semibold text-3xl ">
                      {props.selectedPost?.title}
                    </h1>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <FullHeightLineMargin />
            </div>
          </div>
          <div className="max-w-screen h-px bg-black"></div>
        </div>
      </header>

      <main
        className={`flex-1 ${
          props.checkedMenu === "Artwork" ? "w-full" : "justify-center "
        } overflow-y-auto px-9 md:px-[120px] md:pl-[124px] md:pr-[120px]`}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Container;
