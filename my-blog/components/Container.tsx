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
        <div className={`max-w-screen h-px bg-black`}></div>
      </header>
      <div className={`h-full flex flex-row`}>
        <Nav isMenu={true} />
        <div className={`max-h-screen w-px bg-black`}></div>
        <main className="flex-1 flex justify-left">{props.children}</main>
        <div className={`max-h-screen w-px bg-black`}></div>
        <Nav isMenu={false} />
      </div>
    </div>
  );
};

export default Container;
