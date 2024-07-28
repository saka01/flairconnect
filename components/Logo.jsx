import React from "react";
// import styles from "../../styles/sideBanner.module.css";



const Logo = ({ color = "black" }) => {
  return (
    //add classname to adjust for mobile view

    <h1
      style={{
        fontSize: "35px",
      }}
      // className={styles.logostuff}
    >
      <strong>FLAIR.</strong>
    </h1>
  );
};

export default Logo;
