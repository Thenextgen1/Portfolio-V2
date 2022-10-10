import { Experience } from "../../typings";

type Props = {
  experience: Experience[];
};

const Experiences = ({ experience }: Props) => {
  console.log(experience);

  const th = experience.map((e) => <span key={e._id}>{e.company}</span>);

  return (
    <div>
      experience
      <p>{th}</p>
    </div>
  );
};

export default Experiences;
