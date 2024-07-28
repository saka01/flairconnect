import React, { useState } from "react";
import styles from "../../styles/form.module.css";
import CustomFloatingInput from "./CustomFloatingInput";
import Button from "../Buttons/AuthButton";
import { useRouter } from "next/router";
import Cookies from "js-cookie";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
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

      // if (!response.ok) {
      //   const errorResponse = await response.json();

      //   const errorMessage =
      //     errorResponse.error && errorResponse.error.message
      //       ? errorResponse.error.message
      //       : "Login failed";
      //   throw new Error(errorMessage);
      // }

      const data = await response.json();
      console.log("Login successful:", data);


      // Store the JWT token
      Cookies.set("token", data.jwt, {
        expires: 7,
        secure: true,
        sameSite: "Lax",
      });


      setLoading(false);
      router.push("/dashboard"); // Redirect to dashboard page after successful login
    } catch (error) {
      console.error("Login error:", error.message);
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className={styles.loginform}>
      <h2>Sign In to HutsyConnect.</h2>
      {error ? (
        <p className={styles.validationerror}>Error: {error}</p>
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
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            required={true}
          />
          <CustomFloatingInput
            id={"password"}
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
        </div>
        <span className={styles.signupalt}>
          <br/>
          Don&apos;t have account? <strong>Sign Up</strong>
        </span>
        <Button type="submit" size="large" loading={loading}>
          SIGN IN
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
