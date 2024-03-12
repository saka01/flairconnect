import React from "react";
import styles from "../../styles/NameInitialIcon.module.css";

const NameInitialIcon = () => {
  const name = "Tom Watts";
const initials = name.split(" ").map(n => n[0]).join("");
const initials2 = name
  .split(" ")
  .map((word) => word[0].toUpperCase())
  .join("");

  return (
    <div className={styles.initialiconcontainer}>
        {initials}
    </div>
  );
};

export default NameInitialIcon;
