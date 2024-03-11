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
        <title className={`text-3xl`}>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full flex flex-col justify-between items-left my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <span className={`ml-6 mt-6 text-lg`}>{metadata.title}</span>
        </div>
        <div className={`max-w-screen h-px bg-black`}></div>
      </header>
      <div className={`h-full flex flex-row`}>
        <Nav isMenu={true} />
        <div className={`w-px h-full bg-black`}></div>
        <main className="flex-1 flex justify-center">{props.children}</main>
        <div className={`w-px h-full bg-black`}></div>
        <Nav isMenu={false} />
      </div>
    </div>
  );
};

export default Container;
