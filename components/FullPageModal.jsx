// FullPageModal.js
import React from "react";
import styles from "../styles/FullPageModal.module.css"; // Import the CSS module
import { IoIosClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const FullPageModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          <IoCloseSharp /> Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default FullPageModal;
