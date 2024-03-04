import navlinks from "@/data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={`flex flex-row`}>
      <div className={`flex flex-col ml-6 `}>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title} legacyBehavior>
            <a className={`mr-5`}>{nav.title}</a>
          </Link>
        ))}
      </div>
      <div className={`w-px max-h-screen bg-black`}></div>
    </nav>
  );
};

export default Nav;
