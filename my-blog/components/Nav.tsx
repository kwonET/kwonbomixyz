import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = (props) => {
  const { isMenu, checkedMenu } = props;
  let tmpCheckedMenu; // BlogDetail 구분을 위한 임의의 변수
  checkedMenu === 'BlogDetail' ? (tmpCheckedMenu = 'Blog') : (tmpCheckedMenu = checkedMenu)

  return isMenu ? (
    <nav className={`h-full w-[124px] flex flex-col items-end`}>

      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title} legacyBehavior>
          <a className={`${tmpCheckedMenu == nav.title ? 'bg-my-highlight' : 'bg-my-gray'} text-base font-medium`}>{nav.title}</a>
        </Link>
      ))}

    </nav >
  ) : (
    <nav className={`h-full w-[124px] flex flex-row`}>
      <div className={`flex flex-col`}></div>
    </nav>
  );
};

export default Nav;
