import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Events from "../../components/Dashboard/Events";
import styles from "../../styles/dashboardmenu.module.css";
import { IoMdAddCircle } from "react-icons/io";

export default function Dashboard() {
  return (
    <DashboardLayout>
        <Events />
        <IoMdAddCircle />
    </DashboardLayout>
  );
}

