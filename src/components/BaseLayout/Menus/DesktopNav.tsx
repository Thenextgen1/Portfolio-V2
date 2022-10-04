import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/DesktopNav.module.css";

const DesktopNav = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <nav className="flex justify-between items-center ml-[17%] pr-20">
      <h1 className="text-sm font-semibold tracking-wider">
        <Link href="/">ELIJAH OHIWEREI</Link>
      </h1>
      <ul className={styles.quick_links}>
        <li className="text-xs tracking-wide font-light">
          {pathname === "/portfolio" && <Link href="/">BACK TO HOME</Link>}
          {pathname === "/" && <Link href="/portfolio">PORTFOLIO</Link>}
        </li>
        <li className="px-7 text-xs">/</li>
        <li className="text-xs tracking-wide font-light">
          <Link href="/about">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
