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

const Portfolio = ({ project }: Props) => {
  return (
    <BaseLayout>
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

        <ul className="mt-20 flex justify-center pb-6 text-xs lg:text-sm tracking-widest">
          <li className="bg-cardColor mr-2 px-4 py-2 w-[40%] text-center hover:bg-LightGray cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="bg-cardColor px-4 py-2 w-[40%] text-center hover:bg-LightGray cursor-pointer">
            <a
              href="/files/Elijah_Ohiwerei_Resume.pdf"
              download
            >
              Résumé
            </a>
          </li>
        </ul>

        <h5 className="hidden lg:block uppercase text-center text-sm tracking-widest py-10 lg:mt-8 lg:py-14 opacity-80">
          &#169; 2022 - Elijah Ohiwerei
        </h5>
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
