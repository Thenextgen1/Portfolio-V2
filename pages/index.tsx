import type { NextPage } from "next";
import BaseLayout from "../src/layout";
import styles from "../src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <main className="lg:ml-[17%] px-8 lg:px-0">
        <section>
          <p className="text-xs tracking-wide font-light py-2 hidden lg:block">
            LAGOS
          </p>
          <p className="text-xs tracking-wide font-light hidden lg:block">
            21&apos;
          </p>
          <div className="lg:mt-12 mt-16">
            <h2 className="lg:text-[90px] sm:text-5xl tracking-wide lg:font-bold font-semibold font-Synocopate leading-normal lg:leading-none text-3xl text-center lg:text-left">
              SOFTWARE <br />{" "}
              <span className={`${styles.text_stroke}`}> DEVELOPER</span>
            </h2>
          </div>
          <p className="text-xs lg:absolute lg:bottom-0 lg:mb-[5%] lg:ml-[1px] tracking-widest hidden lg:block">
            MERN STACK DEVELOPER & DATA ANALYST
          </p>

          <p className="lg:hidden text-center mt-12 text-[13px] sm:text-lg tracking-widest leading-relaxed text-LightGray">
            I am a <span className="text-Gray">frontend developer</span> . My
            skills and <span className="text-Gray">expertise</span> lie in
            creating <span className="text-Gray">web</span> and{" "}
            <span className="text-Gray">mobile</span> applications in the{" "}
            <span className="text-Gray">React </span>
            ecosystem using <span className="text-Gray">modern</span> and
            best-react practices. <span className="text-Gray">I</span> am
            currently <span className="text-Gray">mastering</span> the{" "}
            <span className="text-Gray">MERN</span> STACK as well.
          </p>
        </section>
      </main>
    </BaseLayout>
  );
};

export default Home;
