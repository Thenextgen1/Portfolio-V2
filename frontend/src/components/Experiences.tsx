import { Experience } from "../../typings";
import styles from "../styles/Experience.module.css";

type Props = {
  experience: Experience;
};

const Experiences = ({ experience }: Props) => {
  return (
    <div className={styles.container}>
      <div className="flex sm:flex-row flex-col sm:items-center">
        <p className="text-xs sm:w-[150px]">{experience.durationOfJob}</p>
        <h4 className="text-xs sm:ml-8 py-1">{experience.titleOfJob}</h4>
      </div>
      <p className="text-xs">
        {experience.company}, {experience.location}
      </p>
    </div>
  );
};

export default Experiences;
