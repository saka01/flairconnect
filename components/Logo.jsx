import React from "react";

const Logo = ({color="black"}) => {
  return (
    <h1 style={{fontSize:"35px", color: `${color}`}}>
      <strong>E.</strong>
    </h1>
  );
};

export default Logo;
