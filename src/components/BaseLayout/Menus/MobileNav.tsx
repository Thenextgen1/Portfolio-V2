import Link from "next/link";
import styles from "../../../styles/MobileNav.module.css";

const MobileNav = () => {
  return (
    <nav className="flex justify-between items-center lg:hidden">
      <h1 className=" font-semibold tracking-wider">
        <Link href="/">ELIJAH OHIWEREI</Link>
      </h1>
      <div className={styles.line_container}>
        <div className="mb-1"></div>
        <div className="mt-1"></div>
      </div>
    </nav>
  );
};

export default MobileNav;
