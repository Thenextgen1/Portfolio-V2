import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Project } from "../../typings";
import styles from "../styles/Project.module.css";

type Props = {
  project: Project;
};

const Projects = ({ project }: Props) => {
  console.log(project.techStack);

  return (
    <div className={styles.card}>
      <div>
        <h2 className="text-xl uppercase font-bold">
          {project.titleOfProject}
        </h2>
        {project.techStack.map((tech, i) => (
          <p
            className="uppercase text-[10px] mr-4 inline-block opacity-90"
            key={i}
          >
            {tech}
          </p>
        ))}
        <p className="text-xs tracking-widest mt-4 opacity-75 leading-loose">
          {project.description}
        </p>
      </div>
      <div>
        <p className="text-xs cursor-pointer">
          <a href={project.url}>
            <AiFillEye
              size="1.3em"
              style={{ display: "inline-block", marginRight: "0.5em" }}
            />
            Live
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
