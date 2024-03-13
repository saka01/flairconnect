// CustomButton.js
import React from "react";
import styles from "../../styles/events.module.css";

// You can extend this component to accept more props as needed
const CustomButton = ({
  children,
  onClick,
  style,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={{borderRadius: "5px", ...style }} // Default styles merged with custom styles passed as prop
      className={`${styles.custombutton} ${className}`} // Default class merged with custom classes passed as prop
      {...props} // Spread any additional props
    >
      {children}
    </button>
  );
};

export default CustomButton;
