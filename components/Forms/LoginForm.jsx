import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import CustomFloatingInput from "./CustomFloatingInput";
import AuthButton from "../Buttons/AuthButton";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      identifier: username,
      password,
    };
    try {
      const response = await fetch(
        "http://jobtest.apihutsy.com/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();

        const errorMessage =
          errorResponse.error && errorResponse.error.message
            ? errorResponse.error.message
            : "Login failed";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    }

    //async function, set error
  };

  return (
    <div className={styles.loginform}>
      <h2>Sign In to HutsyConnect.</h2>
      {error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : (
        <span>Enter your details below.</span>
      )}
      <br />
      <form onSubmit={handleLogin}>
        <div>
          <CustomFloatingInput
            id={"username"}
            label={"Username"}
            type={"text"}
            placeholder={"Username"}
            onChange={(e) => setUsername(e.target.value)}
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
        <span className={styles.signupalt}>
          Don&apos;t have account? <strong>Sign Up</strong>
        </span>
        <AuthButton type="submit">SIGN IN</AuthButton>
      </form>
    </div>
  );
};

export default LoginForm;
