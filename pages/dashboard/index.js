import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Events from "../../components/Dashboard/Events";
import styles from "../../styles/dashboardmenu.module.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className={styles.dashboardmain}>
        <Events />
      </div>
    </DashboardLayout>
  );
}

