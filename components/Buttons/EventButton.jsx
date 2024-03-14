// EventButton.js
import React from "react";
import styles from "../../styles/Button.module.css";

// You can extend this component to accept more props as needed
const EventButton = ({
  children,
  onClick,
  isOwner = false,
  isAttendee = false,
  loading = false,
  ...props
}) => {
  // Determine button state
  let buttonText = "Join";
  let buttonStyle = styles.primary; // Default color for "Join" button

  if (loading) {
    buttonText = "Loading";
    buttonStyle = styles.loading;
  } else if (isOwner) {
    buttonText = "Edit";
    buttonStyle = styles.edit; // Assuming you have an 'edit' style in your CSS
  } else if (isAttendee) {
    buttonText = "Leave";
    buttonStyle = styles.leave; // Assuming you have a 'leave' style in your CSS
  }

  const buttonClasses = `
    ${styles.custombutton}
    ${buttonStyle}
    ${styles.eventbuttonsize}
    ${loading ? styles.loading : ""}
  `;
  return (
    <button
      onClick={onClick}
      className={buttonClasses} // Default class merged with custom classes passed as prop
      {...props} // Spread any additional props
    >
      {buttonText}
    </button>
  );
};

export default EventButton;
