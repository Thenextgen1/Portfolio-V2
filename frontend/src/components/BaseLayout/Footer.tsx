import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const { pathname } = useRouter();

  const arrowStyle = {
    filter:
      "invert(62%) sepia(0%) saturate(12%) hue-rotate(259deg) brightness(97%) contrast(94%)",
    lineHeight: 0,
    transition: "opacity .3s linear",
  };

  return (
    <footer className="text-xs lg:fixed lg:bottom-0 lg:mb-[5%] lg:mr-[5%] lg:right-0">
      <div className={styles.scroll_div}>
        <div className="flex lg:flex-col  ">
          <div className={styles.arrow_cont}>
            <Image
              src="/images/arrow_down.svg"
              alt="arrow_down"
              width="20px"
              height="20px"
              style={arrowStyle}
            />
          </div>
          <div className={styles.arrow_cont}>
            <Image
              src="/images/arrow_down.svg"
              alt="arrow_down.svg"
              width="20px"
              height="20px"
              style={arrowStyle}
            />
          </div>
          <div className={styles.arrow_cont}>
            <Image
              src="/images/arrow_down.svg"
              alt="arrow_down.svg"
              width="20px"
              height="20px"
              style={arrowStyle}
            />
          </div>
        </div>
        <p className="text-[7.5px] tracking-wider font-Synocopate hidden lg:block">
          SCROLL
        </p>
      </div>

      {pathname === "/" && (
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
          className="lg:hidden flex items-center justify-center absolute w-screen top-[80%] bottom-0 flex-col"
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
    </footer>
  );
};

export default Footer;
