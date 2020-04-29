import React from "react";
// import Board from "./index";

const Cards = props => {
  const Front = () => {
    return <button className="card">{props.children}</button>;
  };

  const Back = () => {
    return <button className="card">{props.children}</button>;
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
