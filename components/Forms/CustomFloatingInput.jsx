import styles from "../../styles/customfloatinginput.module.css"
import { FaRegEye } from "react-icons/fa";

const CustomFloatingInput = ({onChange, id, placeholder, label, sideIcon, type}) => {
  return (
    <div className={styles.inputwrapper}>
      <input
        autoComplete="off"
        className={styles.input}
        required={false}
        onChange={onChange}
        type={type}
        id={id}
        placeholder={placeholder}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {type === "password" && (
        <button className={styles.clear} aria-label="Clear input">
          <FaRegEye />
        </button>
      )}
    </div>
  );
};
export default CustomFloatingInput;
