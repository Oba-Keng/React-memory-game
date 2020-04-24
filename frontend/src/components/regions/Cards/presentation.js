import React from "react";

const Cards = props => {
  return (
    <React.Fragment>
      <button className="card" onClick={props.onClick}>
        {props.card}
      </button>
    </React.Fragment>
  );
};
export default Cards;
