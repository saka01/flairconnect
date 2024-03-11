import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/dashboardmenu.module.css";

const DashboardPrimaryNav = () => {
  return (
    <div className={styles.sidebanner}>
      <Logo />
      <div className={styles.lowerbanner}>
        <span>GIVE YOURSELF SOME CREDIT</span>
        <Image
          src="/images/hutsylogo.png"
          alt="Hutsy Side banner"
          width={40}
          height={1024}
        />
      </div>
    </div>
  );
};

export default DashboardPrimaryNav;
