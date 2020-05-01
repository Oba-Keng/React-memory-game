import React from "react";

const Cards = props => {
  const Front = () => {
    return <div className="front">{props.children}</div>;
  };

  const Back = () => {
    return <div className="back">{props.children}</div>;
  };

  return (
    <React.Fragment>
      <div className={"flipper-container horizontal"}>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <Front>Front</Front>
            <Back>Back</Back>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
