import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Events from "../../components/Dashboard/Events";
import styles from "../../styles/dashboardmenu.module.css";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdOutlineAddCircle } from "react-icons/md";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Events />

      <div className={styles.addevent}>
          <MdOutlineAddCircle
            style={{
              width: "100%",
              height: "100%",
              color: "#323C46",
              filter: "drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.61))",
            }}
          />
      </div>
    </DashboardLayout>
  );
}