import React, { useState } from "react";
import Logo from "../Logo";
import Image from "next/image";
import styles from "../../styles/dashboardmenu.module.css";
import { MdViewModule, MdViewAgenda } from "react-icons/md";

const events = [
  { id: 1, name: "Event 1", date: new Date("2023-01-01") },
  { id: 2, name: "Event 2", date: new Date("2023-12-01") },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("box"); // 'list' or 'box'

  return (
    <div className={styles.dashboardfilternav}>
      <div>
        <button
          onClick={() => setActiveTab("all")}
          className={activeTab === "all" ? "active" : ""}
        >
          ALL EVENTS
        </button>
        <button
          onClick={() => setActiveTab("future")}
          className={activeTab === "future" ? "active" : ""}
        >
          FUTURE EVENTS
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={activeTab === "past" ? "active" : ""}
        >
          PAST EVENTS
        </button>
      </div>
      <div className={styles.dashboardviewswitcher}>
        <button onClick={() => setViewMode("list")}><MdViewModule /></button>
        <button onClick={() => setViewMode("box")}><MdViewAgenda /></button>
      </div>
    </div>
  );
};

export default Events;
