import React from 'react';
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
    <div className="flex flex-col h-screen overflow-hidden">
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex flex-col p-1">
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
                  <h1 className="text-right text-sm">{meta.date}</h1>
                </>
              )}
            </div>
            <FullHeightLineMargin />
          </div>
          <div className="max-w-screen h-px bg-black -mt-2"></div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-[calc(118px+1rem)] px-[124px]">
        {props.children}
      </main>
    </div>
  );
};

export default Container;