import React from "react";
import SideNav from "../nav/SideNav";
import TopNav from "../nav/TopNav";
import styles from "../../styles/dashboard.module.css";

const SideBannerLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div className="flex space-x-2">
        <SideNav />
        <div className={styles.dashboardContentArea}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
