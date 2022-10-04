import type { NextPage } from "next";
import BaseLayout from "../src/layout";
import styles from "../src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className="lg:ml-[17%] px-8 lg:px-0">
        <p className="text-xs tracking-wide font-light py-2 hidden lg:block">
          LAGOS
        </p>
        <p className="text-xs tracking-wide font-light hidden lg:block">
          21&apos;
        </p>
        <div className="lg:mt-12 mt-16">
          <h2 className="lg:text-[90px] tracking-wide lg:font-bold font-semibold font-Synocopate leading-none text-3xl">
            SOFTWARE <br />{" "}
            <span className={`${styles.text_stroke}`}> DEVELOPER</span>
          </h2>
        </div>
        <p className="text-xs lg:absolute lg:bottom-0 lg:mb-[5%] lg:ml-[1px] tracking-widest">
          MERN STACK DEVELOPER & DATA ANALYST
        </p>
      </main>
    </BaseLayout>
  );
};

export default Home;
