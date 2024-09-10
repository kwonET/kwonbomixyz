import metadata from "../data/metadata";
import Head from "next/head";
import Nav from "./Nav";
import Preview from "./Preview";
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
    <div className={`w-full flex flex-col p-1`}>
      <Head>
        <title>{metadata.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full flex flex-col justify-between items-left my-1`}
      >
        {/* 메뉴바 */}
        <div className={`flex flex-row items-center`}>
          <span className={`ml-6 mt-6 text-2xl font-medium`}>{metadata.title}</span>
        </div>
        <div className={`max-w-screen h-px bg-black -mt-2`}></div>
        {/* 중간 콘텐츠 */}
        <div className={`flex relative ${props.checkedMenu === 'Blog' ? 'h-[418px]' : 'h-[theme(containerHeight.home-height)]'} w-full `}>
          <Nav checkedMenu={props.checkedMenu} isMenu={true} />
          {/* 세로선 */}
          <FullHeightLine />
          {/* 내용 */}
          <div className={`flex flex-col w-full justify-center`}>
            <div>{props.checkedMenu === "Artwork" ? <Preview /> : <></>}</div>

            <div>{props.checkedMenu === "BlogDetail" ? <h1 className="text-center font-semibold text-2xl ">{meta.title}</h1> : <></>}</div>
            <div>{props.checkedMenu === "BlogDetail" ? <h1 className="text-right text-sm">{meta.date}</h1> : <></>}</div>

          </div>

          {/* 세로선 */}
          <FullHeightLineMargin />
        </div>
      </header>

      <div className={`max-w-screen h-px bg-black -mt-2`}></div>
      <main className="flex-1 flex justify-between ml-[124px] mr-[124px]">{props.children}</main>
    </div>
  );
};

export default Container;
