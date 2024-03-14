import React from "react";

const Logo = ({color="black", show}) => {
  return (
    //add classname to adjust for mobile view
    <h1 style={{fontSize:"35px", color: `${color}`, display:`${show ? "contents" : "none"}`}}>
      <strong>E.</strong>
    </h1>
  );
};

export default Logo;
