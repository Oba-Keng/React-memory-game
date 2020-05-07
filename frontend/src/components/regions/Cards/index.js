import React, { useState } from "react";
import Cards from "./presentation";

const Board = props => {
  const [game, setGame] = useState({
    flipped: Array(4).fill(false)
  });

  const flipCard = () => {
    props.classlist.toggle("flipper");
    if (!game.flipped) {
      setGame({
        flipped: true
      });
    } else {
      setGame({
        flipped: false
      });
    }
  };
  const showCards = () => {
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
        <div>{showCards()}</div>
      </div>
    </React.Fragment>
  );
};

export default Board;
