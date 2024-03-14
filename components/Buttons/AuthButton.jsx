// AuthButton.js
import React from "react";
import styles from "../../styles/Button.module.css";

// You can extend this component to accept more props as needed
const AuthButton = ({
  children,
  onClick,
  color = "primary", // Default color
  size = "medium", // Default size
  disabled = false,
  loading = false,
  ...props
}) => {
    const buttonClasses = `
    ${styles.custombutton}
    ${styles[color]}
    ${styles[size]}
    ${disabled ? styles.disabled : ""}
    ${loading ? styles.loading : ""}
  `;
  return (
    <button
      onClick={onClick}
      className={buttonClasses} // Default class merged with custom classes passed as prop
      {...props} // Spread any additional props
    >
      {loading ? "Loading" : children}
    </button>
  );
};

export default AuthButton;
