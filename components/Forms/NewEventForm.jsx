import React, { useState } from "react";
import CustomFloatingInput from "./CustomFloatingInput";
import AuthButton from "../Buttons/AuthButton";
import styles from "../../styles/form.module.css";

const NewEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescriptiion] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    e.preventDefault();
    //async function, set error, check passwords
  };

  return (
    <div className={styles.neweventform} >
      <h2>Create new event</h2>
      {error ? <span>Error: {error}</span> : <span>Enter details below.</span>}
      <form onSubmit={handleLogin}>
        <div>
          <CustomFloatingInput
            id={"title"}
            label={"Title"}
            type={"text"}
            placeholder={"Title"}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />
          <CustomFloatingInput
            id={"description"}
            label={"Description"}
            type={"text"}
            placeholder={"Description"}
            onChange={(e) => setDescriptiion(e.target.value)}
            required={true}
          />
          <CustomFloatingInput
            id={"date"}
            label={"Date"}
            type={"date"}
            placeholder={"Date"}
            onChange={(e) => setDate(e.target.value)}
            required={true}
          />
          <CustomFloatingInput
            id={"time"}
            label={"Time"}
            type={"time"}
            placeholder={"Time"}
            onChange={(e) => setTime(e.target.value)}
          />
          <CustomFloatingInput
            id={"capacity"}
            label={"Capacity"}
            type={"number"}
            placeholder={"Capacity"}
            onChange={(e) => setCapacity(e.target.value)}
            required={true}
          />
        </div>
        <AuthButton type="submit" size="large" >CREATE NEW EVENT</AuthButton>
      </form>
    </div>
  );
};

export default NewEventForm;
