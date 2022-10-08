import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import styles from "../../../styles/MobileNav.module.css";

const MobileNav = () => {
  const [style, setStyle] = useState({
    transform: "rotate(0deg) translateY(0px)",
    transition: "none",
    width: "35px",
  });

  const [dropdown, setDropdown] = useState(false);

  const [otherStyle, setOtherStyle] = useState({
    transform: "rotate(0deg) translateY(0px)",
    transition: "none",
    width: "20px",
  });

  const handleClick = () => {
    setDropdown(!dropdown);

    if (!dropdown) {
      setStyle((prevStyle) => {
        return {
          ...prevStyle,
          transform: "rotate(45deg) translateY(7px)",
          transition: "transform .2s linear",
          width: "30px",
        };
      });
      setOtherStyle((prevStyle) => {
        return {
          ...prevStyle,
          transform: "rotate(-45deg) translateY(-7px)",
          transition: "transform .2s linear",
          width: "30px",
        };
      });
    } else {
      setStyle((prevStyle) => {
        return {
          ...prevStyle,
          transform: "rotate(0deg) translateY(0px)",
          transition: "transform .2s linear",
          width: "35px",
        };
      });
      setOtherStyle((prevStyle) => {
        return {
          ...prevStyle,
          transform: "rotate(0deg) translateY(0px)",
          transition: "transform .2s linear",
          width: "20px",
        };
      });
    }
  };

  return (
    <nav className="flex justify-between items-center lg:hidden">
      <h1 className=" font-semibold tracking-wider sm:text-lg z-20">
        <Link href="/">ELIJAH OHIWEREI</Link>
      </h1>
      <div
        className={styles.line_container}
        onClick={handleClick}
      >
        <div
          className="mb-1"
          style={style}
        ></div>
        <div
          className="mt-1"
          style={otherStyle}
        ></div>
      </div>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, y: -300 }}
            className={styles.mobile_menu_list}
          >
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li className="uppercase">
                <a
                  href="/files/Elijah_Ohiwerei_Resume.pdf"
                  download
                >
                  Résumé
                </a>
              </li>
            </ul>
            <ul className="flex">
              <li className="px-7">
                <a
                  href="https://www.github.com/Thenextgen1"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillGithub size="1.2em" />
                </a>
              </li>
              <li className="px-5">
                <a
                  href="https://www.linkedin.com/in/elijah-ohiwerei-b7425b1b4/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GrLinkedinOption size="1.2em" />
                </a>
              </li>
              <li className="px-5">
                <a
                  href="mailto:elijahohimairei@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MdMail size="1.2em" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
