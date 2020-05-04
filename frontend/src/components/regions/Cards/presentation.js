import React from "react";

const Cards = props => {
  const Front = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/robot.gif"
        className="front tile"
      />
    );
  };

  const Back = () => {
    return (
      <button onClick={props.onClick} className="back tile">
        Back{props.child}
      </button>
    );
  };

  return (
    <React.Fragment>
      <div className={"flipper-container " + props.orientation}>
        <div className={"flipper" + (props.flipped ? " flipped" : "")}>
          <Front></Front>
          <Back></Back>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
