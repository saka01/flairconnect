import React from "react";
import SideBanner from "./SideBanner";
import styles from "../../styles/sideBanner.module.css";


const SideBannerLayout = ({ children }) => {
  return (
    <div>
      <div className={styles.sidebannerlayout}>
        <SideBanner />
        <main className={styles.sidebannercontent}>{children}</main>
      </div>
    </div>
  );
};

export default SideBannerLayout;
