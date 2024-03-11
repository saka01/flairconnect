import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/sideBanner.module.css";

const SideBanner = () => {
  return (
    <div className={styles.sidebanner}>
      <Logo />
      <div className={styles.lowerbanner}>
        <span>GIVE YOURSELF SOME CREDIT</span>
        <Image
          src="/images/hutsylogo.png"
          alt="Hutsy Side banner"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default SideBanner;
