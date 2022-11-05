import { motion } from "framer-motion";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Project } from "../../typings";
import styles from "../styles/Project.module.css";

type Props = {
  project: Project;
};

const childVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const Projects = ({ project }: Props) => {
  return (
    <motion.a
      initial="hidden"
      whileInView="visible"
      variants={childVariants}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      className={styles.card}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
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
        <p className="text-xs cursor-pointer hover:text-white">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillEye
              size="1.3em"
              style={{ display: "inline-block", marginRight: "0.5em" }}
            />
            Live
          </a>
        </p>
      </div>
    </motion.a>
  );
};

export default Projects;
