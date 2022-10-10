import BaseLayout from "../src/layout";
import { Experiences } from "../src/components";
import styles from "../src/styles/About.module.css";
import { GetStaticProps } from "next";
import { Experience } from "../typings";
// import { fetchExperience } from "../src/utils/fetchExperience";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

type Props = {
  experience: Experience[];
};

const About = ({ experience }: Props) => {
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
            <h2 className="lg:text-[53px] sm:text-3xl tracking-wide lg:font-bold font-semibold font-Synocopate leading-normal lg:leading-none text-xl">
              NIGERIAN - BASED <br /> FRONTEND
              <br /> <span className={`${styles.text_stroke}`}>
                DEVELOPER
              </span>{" "}
              & <br /> DATA{" "}
              <span className={`${styles.text_stroke}`}>ANALYST</span>{" "}
            </h2>
          </div>
          <div className="lg:mt-24 lg:flex lg:justify-end lg:mr-7 mt-10">
            <p className="tracking-wider opacity-80 text-sm sm:text-base leading-loose ">
              Web design, User Interface develeopment{" "}
              <br className="hidden lg:block" /> and data analysis are all areas
              of interest for me.
              <br className="hidden lg:block" /> Currently exploring the
              decentralised web.
            </p>
          </div>
        </section>

        <section className="lg:mt-32 mt-16">
          <h2 className="font-Synocopate lg:text-[23px] font-semibold opacity-90">
            EXPERIENCE
          </h2>
          <Experiences experience={experience} />
        </section>
      </main>
    </BaseLayout>
  );
};

export default About;

export const getServerSideProps: GetStaticProps<Props> = async () => {
  const query = groq`*[_type == "experience"]`;
  const res = await sanityClient.fetch(query);

  const experience: Experience[] = res;

  return {
    props: {
      experience,
    },
    // Re-generate the page at most once every 10 second
  };
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const experience: Experience[] = await fetchExperience();

//   return {
//     props: {
//       experience,
//     },
//     // Re-generate the page at most once every 10 second

//     // revalidate: 10,
//   };
// };
