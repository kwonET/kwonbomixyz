import metadata from "@/data/metadata";
import Head from "next/head";
import Nav from "./Nav";
const Container = (props) => {
  return (
    <div className={`w-full flex flex-col items-center p-1`}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-col justify-between items-left my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <span className={`ml-6 mt-6 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <div className={`max-w-screen h-px bg-black`}></div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
};

export default Container;
