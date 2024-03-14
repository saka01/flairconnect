import React, { useState } from "react";
import CustomFloatingInput from "./CustomFloatingInput";

const SignupForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    e.preventDefault();
    //async function, set error, check passwords
  };

  return (
    <div>
      <span>
        Already have an account? <strong>Log In</strong>
      </span>
      <h2>Get Start absolutely free.</h2>
      {error ? (
        <span>Error: {error}</span>
      ) : (
        <span>Enter your details below.</span>
      )}
      <form onSubmit={handleLogin}>
        <div>
          <CustomFloatingInput
            id={"firstname"}
            label={"First name"}
            type={"text"}
            placeholder={"First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
          />
          <CustomFloatingInput
            id={"lastname"}
            label={"Last name"}
            type={"text"}
            placeholder={"Last name"}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          />
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
          <CustomFloatingInput
            id={"confirm-password"}
            label={"Confirm Password"}
            type={"password"}
            placeholder={"Confirm Password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
          />
        </div>
        <span>
          Already have an account? <strong>Log In</strong>
        </span>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default SignupForm;
