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

    if (game.flipped) {
      setGame({
        flipped: false
      });
    }
  };
  const showCards = i => {
    return (
      <React.Fragment>
        <Cards
          flipped={game.flipped}
          orientation="horizontal"
          onClick={flipCard}
        />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="game">
        <div className="border-row">
          <div>{showCards(0)}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
