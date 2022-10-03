import Link from "next/link";
import styles from "../../../styles/DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <nav className="flex justify-between items-center ml-[17%] pr-20">
      <h1 className="text-sm font-semibold tracking-wider">ELIJAH OHIWEREI</h1>
      <ul className={styles.quick_links}>
        <li className="text-xs tracking-wide font-light">
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="px-7">/</li>
        <li className="text-xs tracking-wide font-light">
          <Link href="/about">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
