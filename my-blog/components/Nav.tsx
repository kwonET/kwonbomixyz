import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = (props) => {
  const { isMenu } = props;
  return isMenu ? (
    <nav className={`w-124px flex flex-row`}>
      <div className={`flex flex-col ml-6`}>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title} legacyBehavior>
            <a className={`mr-5 text-2xl`}>{nav.title}</a>
          </Link>
        ))}
      </div>
    </nav>
  ) : (
    <nav className={`w-124px`}></nav>
  );
};

export default Nav;
