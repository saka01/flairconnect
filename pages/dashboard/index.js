import React, { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Events from "../../components/Dashboard/Events";
import styles from "../../styles/dashboardmenu.module.css";
import { MdOutlineAddCircle } from "react-icons/md";
import FullPageModal from "../../components/FullPageModal";
import NewEventForm from "../../components/Forms/NewEventForm";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DashboardLayout>
      <Events />
{/* 
      <div className={styles.addevent}>
        <MdOutlineAddCircle
          style={{
            width: "100%",
            height: "100%",
            color: "#323C46",
            filter: "drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.61))",
          }}
          onClick={openModal}
        />
        <FullPageModal isOpen={isModalOpen} onClose={closeModal}>
          <NewEventForm />
        </FullPageModal>
      </div> */}
    </DashboardLayout>
  );
}