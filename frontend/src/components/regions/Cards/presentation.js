import React from "react";

const Cards = props => {
  return (
    <div
      className={"flipper-container " + (props.flipped ? " flipped" : "")}
      onClick={() => props.flipCard(props.id)}
    >
      <div className={"flipper"}>
        <img
          src={
            props.flipped ? `/images/${props.type}.gif` : "/images/robot.gif"
          }
          alt=""
          className={props.flipped ? "front" : "back"}
        />
      </div>
    </div>
  );
};

export default Cards;
