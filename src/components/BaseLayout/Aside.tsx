import Image from "next/image";
import styles from "../../styles/Aside.module.css";

const Aside = () => {
  return (
    <aside className="fixed top-0 py-16 h-screen mx-auto left-[5%]">
      <div className="flex justify-between flex-col items-center h-full">
        <div>
          <Image
            src="/images/box.svg"
            alt="box"
            width="85"
            height="85"
          />
        </div>
        <div>
          <p className="rotate-[270deg] text-xs tracking-widest">
            PORTFOLIO 22
          </p>
        </div>
        <div className="mb-3">
          <div className={styles.loader}></div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
