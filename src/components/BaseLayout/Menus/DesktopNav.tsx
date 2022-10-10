import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import styles from "../../../styles/DesktopNav.module.css";

const DesktopNav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="lg:flex justify-between ml-[17%] pr-20 hidden">
      <h1 className="text-sm font-semibold tracking-wider">
        <Link href="/">ELIJAH OHIWEREI</Link>
      </h1>

      {pathname !== "/about" && (
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
      )}

      {pathname === "/about" && (
        <div
          className=" flex items-center flex-col cursor-pointer"
          onClick={() => Router.push("/")}
        >
          <p>
            <svg
              stroke="#999"
              fill="#999"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#999"
                stroke="#999"
                strokeWidth="1"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          </p>
          <p className="text-xs tracking-wide font-light pt-6">
            <Link href="/">GO BACK</Link>
          </p>
        </div>
      )}
    </nav>
  );
};

export default DesktopNav;
