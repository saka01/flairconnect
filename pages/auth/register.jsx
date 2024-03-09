import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = () => {
    // You'll update this function later...
  };

  return (
    <div>
      <h2>Get Started Absolutely FREE.</h2>
    </div>
  );
};

export default Register;
