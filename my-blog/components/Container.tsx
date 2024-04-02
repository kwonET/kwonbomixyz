import metadata from "../data/metadata";
import Head from "next/head";
import Nav from "./Nav";
const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };
  return (
    <div className={`w-full flex flex-col p-1`}>
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>

      <header
        className={`w-full flex flex-col justify-between items-left my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <span className={`ml-6 mt-6 text-2xl`}>{metadata.title}</span>
        </div>
        <div className={`max-w-screen h-px bg-black -mt-2`}></div>
        

        <div className={`flex h-[theme(containerHeight.home-height)] w-full`}>
          <Nav isMenu={true} />
          <div className={`static h-lvh w-px bg-black`}></div>
          <div className={`static ml-auto mr-[118px] h-lvh w-px bg-black`}></div>
        </div>

      </header>
      <div className={`max-w-screen h-px bg-black -mt-2`}></div>
      <main className="flex-1 flex justify-left ml-[124px]">{props.children}</main>
    </div>
  );
};

export default Container;
