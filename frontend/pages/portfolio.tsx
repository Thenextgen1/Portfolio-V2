import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import { sanityClient } from "../sanity";
import { Projects } from "../src/components";
import BaseLayout from "../src/layout";
import { Project } from "../typings";

const query = groq`
*[_type == "project"]
`;

type Props = {
  project: Project[];
};

const childVariants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0.2 },
};

const Portfolio = ({ project }: Props) => {
  const title = "Projects - Elijah Ohiwerei";
  const description =
    "Explore a collection of my best work and projects in the field of web development. From Vidom to Mainstack, you'll find a variety of my work and my approach to web development with the MERN stack. Browse through the projects page to learn more about my skills and experience in the industry.";
  const keywords =
    "web development, web design, MERN stack developer, REACT, NodeJs, MongoDB, HTML, CSS, JavaScript, responsive design, front-end development, back-end development, fullstack developer, mobile development, flutter developer";

  return (
    <BaseLayout
      title={title}
      description={description}
      keywords={keywords}
    >
      <main className="lg:ml-[17%] lg:mr-[20%] px-8 lg:px-0">
        <h2 className="text-xs font-bold lg:ml-5">FEATURED</h2>
        <section className="lg:mt-16 lg:ml-5 mt-8">
          {project.map((project) => (
            <Projects
              key={project._id}
              project={project}
            />
          ))}
        </section>

        {/* <section className="mt-16">
          <h3 className="text-xs font-bold lg:ml-5">ARTICLES</h3>
        </section> */}

        <ul className="mt-20 flex justify-center pb-6 text-xs lg:text-sm tracking-widest">
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
            viewport={{ once: true }}
            className="bg-cardColor mr-2 px-4 py-2 w-[40%] text-center hover:bg-LightGray cursor-pointer"
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={childVariants}
            className="bg-cardColor px-4 py-2 w-[40%] text-center hover:bg-LightGray cursor-pointer"
          >
            <a
              href="/files/Elijah_Ohiwerei_Resume.pdf"
              download
            >
              Résumé
            </a>
          </motion.li>
        </ul>

        <h4 className="hidden lg:block uppercase text-center text-sm tracking-widest py-10 lg:mt-8 lg:py-16 opacity-80">
          &#169; 2022 - Elijah Ohiwerei
        </h4>
      </main>
    </BaseLayout>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await sanityClient.fetch(query);
  const project: Project[] = res;

  return {
    props: {
      project,
    },
    // Re-generate the page at most once every 10 second

    revalidate: 10,
  };
};
