import { FC } from "react";
import { Footer, Header } from "../components";

interface Props {
  children: JSX.Element;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
