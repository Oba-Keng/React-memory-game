import React, { useState } from "react";
// import Board from "./index";

const Cards = props => {
  const Front = () => {
    return (
      <div className="card horizontal">
        <div className="flipper">
          <div className="front tile">{props.children}</div>
        </div>
      </div>
    );
  };

  const Back = () => {
    return (
      <div className="card horizontal">
        <div className="flipper flipped">
          <div className="back tile">{props.children}</div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={"card" + props.orientation}>
        <div className={"flipper" + (props.flipped ? "flipped" : "")}>
          <Front></Front>
          <Back></Back>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
