import React, { useState } from "react";
import Cards from "./presentation";

const Board = () => {
  const [game, setGame] = useState({
    flipped: false
  });

  const flipCard = () => {
    if (!game.flipped) {
      setGame({
        flipped: true
      });
    }
  };
  const showCards = i => {
    return (
      <Cards
        flipped={game.flipped}
        orientation="horizontal"
        onClick={flipCard}
      />
    );
  };

  return (
    <React.Fragment>
      <div className="game">
        <div className="border-row">
          <div>
            {showCards(0)}
            {showCards(1)}
            {showCards(2)}
            {showCards(3)}
            {showCards(4)}
          </div>

          <div>
            {showCards(5)}
            {showCards(6)}
            {showCards(7)}
            {showCards(8)}
            {showCards(9)}
          </div>

          <div>
            {showCards(10)}
            {showCards(11)}
            {showCards(12)}
            {showCards(13)}
            {showCards(14)}
          </div>

          <div>
            {showCards(15)}
            {showCards(16)}
            {showCards(17)}
            {showCards(18)}
            {showCards(19)}
          </div>

          <div>
            {showCards(20)}
            {showCards(21)}
            {showCards(22)}
            {showCards(23)}
            {showCards(24)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
