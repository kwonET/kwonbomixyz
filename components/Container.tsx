import { useEffect } from 'react';
import metadata from "../data/metadata";
import Head from "next/head";
import Nav from "./Nav";
import FullHeightLine from "./FullHeightLine";
import FullHeightLineMargin from "./FullHeightLineMargin";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden font-gothic1">
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex flex-col p-1 -mt-1">
          <div className="flex flex-row items-center">
            <span className="ml-6 mt-6 text-xl font-medium">{metadata.title}</span>
          </div>
          <div className="max-w-screen h-px bg-black -mt-2"></div>
          <div className={`flex relative ${props.checkedMenu === 'Blog' ? 'h-[418px]' : 'h-[theme(containerHeight.home-height)]'} w-full`}>
            <Nav checkedMenu={props.checkedMenu} isMenu={true} />
            <FullHeightLine />
            <div className="flex flex-col w-full justify-center">
              {props.checkedMenu === "BlogDetail" && (
                <>
                  <h1 className="text-center font-semibold text-2xl mt-5">{meta.title}</h1>
                  <h1 className="text-right text-sm mr-6">{meta.date}</h1>
                </>
              )}
              {(props.checkedMenu === "Blog" && (props.selectedPost)) && (
                <div className='flex h-[418px]'>
                  <div className="w-1/2 bg-[#D9D9D9]"></div>
                  <div className='bg-black w-[1px] h-[100%]'></div>
                  <div className="w-1/2 p-4 flex flex-col-reverse">
                    <h2 className="text-base pt-1 whitespace-pre-wrap">{props.selectedPost?.description}</h2>
                    <p className="text-sm pt-1">{props.selectedPost?.date}</p>
                    <h1 className="font-semibold text-3xl ">{props.selectedPost?.title}</h1>
                  </div>
                </div>
              )}
            </div>
            <FullHeightLineMargin />
          </div>
          <div className="max-w-screen h-px bg-black"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-[200px] pl-[120px] pr-[130px]">
        {props.children}
      </main>
    </div>
  );
};

export default Container;