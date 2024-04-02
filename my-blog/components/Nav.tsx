import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = (props) => {
  const { isMenu } = props;
  return isMenu ? (
    <nav className={`h-full w-124px flex flex-row`}>
      <div className={`flex flex-col ml-6`}>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title} legacyBehavior>
            <a className={`text-base font-medium`}  >{nav.title}</a>
          </Link>
        ))}
      </div>
    </nav>
  ) : (
    <nav className={`h-full w-124px flex flex-row`}>
      <div className={`flex flex-col m-10`}></div>
    </nav>
  );
};

export default Nav;
