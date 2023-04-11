import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";

const childVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 100 },
};

const Footer = () => {
  const router = useRouter();

  const arrowStyle = {
    filter:
      "invert(62%) sepia(0%) saturate(12%) hue-rotate(259deg) brightness(97%) contrast(94%)",
    lineHeight: 0,
    transition: "opacity .3s linear",
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeRoute = () => {
    router.push("/portfolio", "portfolio");
  };

  return (
    <footer className="text-xs lg:fixed lg:bottom-0 lg:mb-[5%] lg:mr-[5%] lg:right-0">
      <div
        className={`${styles.scroll_div} cursor-pointer`}
        onClick={router.pathname === "/" ? changeRoute : handleScroll}
      >
        <div className="flex lg:flex-col z-50">
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.arrow_cont}
          >
            <Image
              src="/images/arrow_down.svg"
              alt="arrow_down"
              width="20px"
              height="20px"
              style={arrowStyle}
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.arrow_cont}
          >
            <Image
              src="/images/arrow_down.svg"
              alt="arrow_down"
              width="20px"
              height="20px"
              style={arrowStyle}
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.arrow_cont}
          >
            <Image
              src="/images/arrow_down.svg"
              alt="arrow_down"
              width="20px"
              height="20px"
              style={arrowStyle}
            />
          </motion.div>
        </div>
        {router.pathname === "/" ? (
          <a className="text-[7.5px] tracking-wider font-Synocopate hidden lg:block text-white">
            Explore
          </a>
        ) : (
          <p className="text-[7.5px] tracking-wider font-Synocopate hidden lg:block text-white">
            Top
          </p>
        )}
      </div>

      {router.pathname === "/" && (
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="lg:hidden flex items-center justify-center mt-16 pb-8  w-screen flex-col"
        >
          <ul className="flex">
            <li className="px-7">
              <a
                href="https://www.github.com/Thenextgen1"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub size="2.1em" />
              </a>
            </li>
            <li className="px-5">
              <a
                href="https://www.linkedin.com/in/elijah-ohiwerei-b7425b1b4/"
                rel="noreferrer"
                target="_blank"
              >
                <GrLinkedinOption size="2.1em" />
              </a>
            </li>
            <li className="px-5">
              <a
                href="mailto:elijahohimairei@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <MdMail size="2.1em" />
              </a>
            </li>
          </ul>
          <p className="pt-6 tracking-widest text-[11px]">
            <span className="opacity-50">INSPIRED BY </span>
            <a
              href="https://www.behance.net/rdbok"
              rel="noreferrer"
              target="_blank"
              className="font-bold"
            >
              ROGER
            </a>
          </p>
        </motion.div>
      )}

      {router.pathname !== "/" && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={childVariants}
          viewport={{ once: true }}
          className="lg:hidden flex items-center justify-center py-12 flex-col mt-8"
        >
          <ul className="flex">
            <li className="px-7">
              <a
                href="https://www.github.com/Thenextgen1"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub size="1.5em" />
              </a>
            </li>
            <li className="px-5">
              <a
                href="https://www.linkedin.com/in/elijah-ohiwerei-b7425b1b4/"
                rel="noreferrer"
                target="_blank"
              >
                <GrLinkedinOption size="1.5em" />
              </a>
            </li>
            <li className="px-5">
              <a
                href="mailto:elijahohimairei@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <MdMail size="1.5em" />
              </a>
            </li>
          </ul>
          <p className="pt-6 tracking-widest text-[11px]">
            <span className="opacity-50">INSPIRED BY </span>
            <a
              href="https://www.behance.net/rdbok"
              rel="noreferrer"
              target="_blank"
              className="font-bold"
            >
              ROGER
            </a>
          </p>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
