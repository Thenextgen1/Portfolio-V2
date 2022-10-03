import type { NextPage } from "next";
import BaseLayout from "../src/layout";
import styles from "../src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className="lg:ml-[17%]">
        <p className="text-xs tracking-wide font-light py-2">LAGOS</p>
        <p className="text-xs tracking-wide font-light">21&apos;</p>
        <div className="mt-12">
          <h2 className="lg:text-[90px] tracking-wide font-bold font-Synocopate leading-none">
            SOFTWARE <br />{" "}
            <span className={`${styles.text_stroke}`}> DEVELOPER</span>
          </h2>
        </div>
        <p className="text-xs lg:absolute lg:bottom-0 lg:mb-[5%] lg:ml-[1px]">
          MERN STACK DEVELOPER & DATA ANALYST
        </p>
      </main>
    </BaseLayout>
  );
};

export default Home;
