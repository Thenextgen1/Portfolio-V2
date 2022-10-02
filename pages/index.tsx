import type { NextPage } from "next";
import BaseLayout from "../src/layout";
import styles from "../src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className="ml-[17%]">
        <p className="text-xs tracking-wide font-light py-2">LAGOS</p>
        <p className="text-xs tracking-wide font-light">21</p>
        <div className="mt-12">
          <h2 className="text-8xl tracking-wider font-extrabold">
            SOFTWARE <br />{" "}
            <span className={`${styles.text_stroke}`}> DEVELOPER</span>
          </h2>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Home;
