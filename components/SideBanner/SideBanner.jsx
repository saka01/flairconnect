import React, { useState } from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/sideBanner.module.css";

const SideBanner = () => {
  return (
    <div>
      <Logo show />
      <div className={styles.sidebanner}>
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
    </div>
  );
};

export default SideBanner;
