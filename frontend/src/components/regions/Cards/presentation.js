import React from "react";
// import Board from "./index";

const Cards = props => {
  const Front = () => {
    return <div className="card">{props.children}</div>;
  };

  const Back = () => {
    return <div className="card">{props.children}</div>;
  };

  return (
    <div>
      <Front />
      <Back />
    </div>
  );
};

export default Cards;
