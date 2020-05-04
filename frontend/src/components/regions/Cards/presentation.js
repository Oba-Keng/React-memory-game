import React from "react";

const Cards = props => {
  const Front = () => {
    return (
      <div onClick={props.onClick} className="front tile">
        Front{props.child}
      </div>
    );
  };

  const Back = () => {
    return (
      <div onClick={props.onClick} className="back tile">
        Back{props.child}
      </div>
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
