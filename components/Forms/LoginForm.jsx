import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import CustomFloatingInput from "./CustomFloatingInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //async function, set error
    console.log("form submitted!")
  };

  return (
    <div className={styles.loginform}>
      <h2>Sign In to HutsyConnect.</h2>
      {error ? (
        <span>Error: {error}</span>
      ) : (
        <span>Enter your details below.</span>
      )}
      <br />
      <form onSubmit={handleLogin}>
        <div>
          <CustomFloatingInput
            id={"email"}
            label={"Email"}
            type={"email"}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <CustomFloatingInput
            id={"password"}
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span>
          Don&apos;t have account? <strong>Sign Up</strong>
        </span>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
