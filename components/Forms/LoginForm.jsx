import React, { useState } from "react";
import styles from "../../styles/login.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    e.preventDefault();
    //async function, set error
  };

  return (
    <div className={styles.loginform}>
      <h2>Sign In to HutsyConnect.</h2>
      {error ? (
        <span>Error: {error}</span>
      ) : (
        <span>Enter your details below.</span>
      )}
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
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
