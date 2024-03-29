import type { NextPage } from "next";
import Link from "next/link";
import BaseLayout from "../src/layout";
import { motion } from "framer-motion";
import { BsPlayFill } from "react-icons/bs";

const Home: NextPage = () => {
  const title = "Elijah Ohiwerei - Software Developer";
  const description =
    "Welcome to my portfolio website! Here, you will find a collection of my work and projects in Software Development. From fullstack web development to mobile development with flutter, I am dedicated to showcasing my skills and experience in the industry. Browse through my portfolio to learn more about me and my work.";
  const keywords =
    "web development, web design, MERN stack developer, REACT, NodeJs, MongoDB, HTML, CSS, JavaScript, responsive design, front-end development, back-end development, fullstack developer, mobile development, flutter developer";

  return (
    <BaseLayout
      title={title}
      description={description}
      keywords={keywords}
    >
      <main className="lg:ml-[17%] px-8 lg:px-0">
        <section>
          <motion.div
            exit={{
              opacity: 0,
              y: -100,
              x: -10,
              transition: { duration: 0.5 },
            }}
          >
            <p className="text-xs tracking-wide font-light py-2 hidden lg:block">
              LAGOS
            </p>
            <p className="text-xs tracking-wide font-light hidden lg:block">
              21&apos;
            </p>
          </motion.div>
          <div className="lg:mt-12 mt-12">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1, ease: "linear" },
              }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
              className="lg:text-[90px] sm:text-5xl tracking-wide lg:font-bold font-semibold font-Synocopate leading-normal lg:leading-none text-3xl text-center lg:text-left"
            >
              SOFTWARE
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6, ease: "linear" },
              }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
              className="text_stroke"
            >
              DEVELOPER
            </motion.h2>
          </div>
          <p className="text-xs lg:absolute lg:bottom-0 lg:mb-[5%] lg:ml-[1px] tracking-widest hidden lg:block">
            MERN STACK DEVELOPER & DATA ANALYST
          </p>

          <p className="lg:hidden text-center mt-12 text-[13px] sm:text-lg tracking-widest leading-relaxed text-LightGray">
            I am a{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              Software Developer
            </motion.span>{" "}
            . My skills and{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              expertise
            </motion.span>{" "}
            lies in creating{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              web
            </motion.span>{" "}
            and{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              mobile
            </motion.span>{" "}
            applications in the{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              React{" "}
            </motion.span>
            ecosystem using{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              modern
            </motion.span>{" "}
            and best-react practices.{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              I
            </motion.span>{" "}
            am currently <span className="text-Gray">exploring</span> the{" "}
            <motion.span
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
              className="text-Gray"
            >
              AR / VR
            </motion.span>{" "}
            Scene as well
          </p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
            }}
            className="flex justify-center mt-[12%] sm:mt-[8%] lg:hidden"
          >
            <button className="flex animate-bounce opacity-90 hover:opacity-100 hover:text-[#dad7d7] hover:bg-[#272727] bg-[#dad7d7] px-4 rounded-lg text-[#272727] py-2 items-center text-xs sm:text-sm md:text-base font-semibold tracking-wide">
              <Link href="/portfolio">EXPLORE</Link>
              <BsPlayFill
                size="1.5em"
                style={{ marginLeft: "0.3em" }}
              />
            </button>
          </motion.div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Home;
