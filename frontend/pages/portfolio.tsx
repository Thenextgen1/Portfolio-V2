import { GetStaticProps } from "next";
import { groq } from "next-sanity";
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
        <section className="mt-16 lg:ml-5">
          {project.map((project) => (
            <Projects
              key={project._id}
              project={project}
            />
          ))}
        </section>
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
