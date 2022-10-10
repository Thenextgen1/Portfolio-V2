import { TechStack } from "../../typings";

type Props = {
  techStack: TechStack;
};

const Stack = ({ techStack }: Props) => {
  return (
    <p className="opacity-80 text-[15px] tracking-wide leading-loose py-1">
      {techStack.techStack}
    </p>
  );
};

export default Stack;
