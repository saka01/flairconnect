import DashboardPrimaryNav from "../../components/Nav/DashboardPrimaryNav";
import styles from "../../styles/dashboardmenu.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardlayout}>
      <DashboardPrimaryNav />
      <main>{children}</main>
    </div>
  );
}
