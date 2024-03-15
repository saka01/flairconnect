// AuthButton.js
import React from "react";
import styles from "../../styles/Button.module.css";

// You can extend this component to accept more props as needed
const AuthButton = ({
  children,
  onClick,
  style,
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
  const mergedStyles = { marginTop: "3em", ...style };
  return (
    <button
      onClick={onClick}
      style={mergedStyles}
      className={buttonClasses} // Default class merged with custom classes passed as prop
      {...props} // Spread any additional props
    >
      {loading ? "Loading" : children}
    </button>
  );
};

export default AuthButton;
