import React from "react";

const Cards = props => {
  return (
    <React.Fragment>
      <button className="card" onClick={props.onClick}>
        {props.cards}
      </button>
    </React.Fragment>
  );
};
export default Cards;
