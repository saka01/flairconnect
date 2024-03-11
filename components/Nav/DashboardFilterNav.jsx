import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/dashboardmenu.module.css";
import { MdViewModule, MdViewAgenda } from "react-icons/md";

const DashboardFilterNav = () => {
  return (
    <div className={styles.dashboardfilernav}>
      <div>
        <span>ALL EVENTS</span>
        <span>FUTURE EVENTS</span>
        <span>PAST EVENTS</span>
      </div>
      <div className={styles.viewswitcher}>
        <MdViewModule />
        <MdViewAgenda />
      </div>
    </div>
  );
};

export default DashboardFilterNav;
