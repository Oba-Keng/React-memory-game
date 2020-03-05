import React from "react";

const Cards = props => {
  return (
    <button className="cardBlock" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Cards;
