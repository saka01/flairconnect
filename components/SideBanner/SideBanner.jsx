import React, { useState } from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/sideBanner.module.css";

const SideBanner = () => {
  return (
    <div className={styles.sidebanner}>
      <div className={styles.logostuff}>
        <Logo color="white" />
      </div>

      <div className={styles.lowerbanner}>
        <span>Events.</span>
        <br/>
      </div>
    </div>
  );
};

export default SideBanner;
