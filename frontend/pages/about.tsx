import BaseLayout from "../src/layout";
import styles from "../src/styles/About.module.css";
import { Experience, TechStack } from "../typings";
import { groq } from "next-sanity";
import { GetStaticProps } from "next";
import { sanityClient } from "../sanity";
import { Experiences, Stack } from "../src/components";
import { motion } from "framer-motion";

type Props = {
  experience: Experience[];
  techStack: TechStack[];
};

const query = groq`
*[_type == "experience"]
`;

const stackQuery = groq`
*[_type == "techStack"]
`;

const childVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const About = ({ experience, techStack }: Props) => {
  return (
    <BaseLayout>
      <main className="lg:ml-[16.5%] lg:mr-[20%] px-8 lg:px-0 snap-y snap-mandatory">
        <section className="-mt-20">
          <p className="text-xs tracking-wide font-light py-2 hidden lg:block">
            LAGOS
          </p>
          <p className="text-xs tracking-wide font-light hidden lg:block">
            21&apos;
          </p>
        </section>
        <section className="lg:mt-20 mt-32">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
              className="lg:text-[53px] sm:text-3xl tracking-wide lg:font-bold font-semibold font-Synocopate leading-normal lg:leading-none text-xl"
            >
              NIGERIAN - BASED <br /> FRONTEND
              <br /> <span className={`${styles.about_stroke}`}>
                DEVELOPER
              </span>{" "}
              & <br /> DATA{" "}
              <span className={`${styles.about_stroke}`}>ANALYST</span>{" "}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
            className="lg:mt-24 lg:flex lg:justify-end lg:mr-7 mt-10"
          >
            <p className="tracking-wider opacity-80 text-sm sm:text-base leading-loose ">
              Web design, User Interface develeopment{" "}
              <br className="hidden lg:block" /> and data analysis are all areas
              of interest for me.
              <br className="hidden lg:block" /> Currently exploring the
              decentralised web.
            </p>
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={childVariants}
          viewport={{ once: true }}
          className="lg:mt-36 mt-16"
        >
          <h2 className="font-Synocopate lg:text-[23px] font-semibold opacity-90 sm:mb-12">
            EXPERIENCE
          </h2>
          <div className="mt-6 pb-10">
            {experience?.map((experience) => (
              <Experiences
                key={experience._id}
                experience={experience}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={childVariants}
          viewport={{ once: true }}
          className="lg:mt-28 mt-14"
        >
          <h2 className="font-Synocopate lg:text-[23px] font-semibold opacity-90 mb-8">
            TECH STACK
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
            {techStack?.map((techStack) => (
              <Stack
                key={techStack._id}
                techStack={techStack}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="lg:mt-56 mt-12"
        >
          <h4 className="text-xl lg:text-5xl tracking-wide font-Synocopate font-semibold">
            SAY <br /> <span className={`${styles.about_stroke}`}> HELLO</span>
          </h4>

          <p className={styles.mail_link}>
            <a
              href="mailto:elijahohimairei@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              hello@elijahO.com
            </a>
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="uppercase hidden lg:pb-8 lg:mt-40 mt-12 opacity-75 text-sm tracking-widest sm:flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center"
        >
          <div className="py-16">
            <h5>&#169; 2022 - Elijah Ohiwerei</h5>
          </div>
          <ul className={styles.about_links}>
            <li>
              <a
                href="https://www.linkedin.com/in/elijah-ohiwerei-b7425b1b4/"
                rel="noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className="sm:px-10 py-6 sm:py-0">
              <a
                href="https://github.com/thenextgen1"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/ohimai"
                rel="noreferrer"
                target="_blank"
              >
                Dribble
              </a>
            </li>
          </ul>
        </motion.section>
      </main>
    </BaseLayout>
  );
};

export default About;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await sanityClient.fetch(query);
  const stackRes = await sanityClient.fetch(stackQuery);
  const experience: Experience[] = res;
  const techStack: TechStack[] = stackRes;

  return {
    props: {
      experience,
      techStack,
    },
    // Re-generate the page at most once every 10 second

    revalidate: 10,
  };
};
