import Image from "next/image";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const arrowStyle = {
    filter:
      "invert(62%) sepia(0%) saturate(12%) hue-rotate(259deg) brightness(97%) contrast(94%)",
    opacity: 0.3,
    lineHeight: 0,
  };

  return (
    <footer className="text-xs lg:fixed lg:bottom-0 lg:mb-[5%] lg:mr-[5%] lg:right-0">
      <div className={styles.scroll_div}>
        <div className="flex flex-col ">
          <Image
            src="/images/arrow_down.svg"
            alt="arrow_down.svg"
            width="20px"
            height="20px"
            style={arrowStyle}
          />
          <Image
            src="/images/arrow_down.svg"
            alt="arrow_down.svg"
            width="20px"
            height="20px"
            style={arrowStyle}
          />
          <Image
            src="/images/arrow_down.svg"
            alt="arrow_down.svg"
            width="20px"
            height="20px"
            style={arrowStyle}
          />
        </div>
        <p className="text-[7.5px] tracking-wider font-Synocopate">SCROLL</p>
      </div>
    </footer>
  );
};

export default Footer;
