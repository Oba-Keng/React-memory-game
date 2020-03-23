import React from "react";
import Presentation from "./presentation";

const Board = props => {
  const showCards = i => {
    return (
      <Presentation value={props.cards[i]} onClick={() => props.onClick(i)} />
    );
  };
  return (
    <React.Fragment>
      <h1 align="center">Memory-Game</h1>
      <div>
        <div className={"border-row"}>
          {showCards(0)}
          {showCards(1)}
          {showCards(2)}
          {showCards(3)}
        </div>
        <div className={"border-row"}>
          {showCards(4)}
          {showCards(5)}
          {showCards(6)}
          {showCards(7)}
        </div>
        <div className={"border-row"}>
          {showCards(8)}
          {showCards(9)}
          {showCards(10)}
          {showCards(11)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
