import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/dashboardmenu.module.css";
import NameInitialIcon from "../Dashboard/NameInitialIcon";

const DashboardPrimaryNav = () => {
  return (
    <div className={styles.dashboardprimarynav}>
      <Logo />
      <div className={styles.profilesettings}>
        <span>Tom Watts</span>
        <NameInitialIcon />
      </div>
    </div>
  );
};

export default DashboardPrimaryNav;
