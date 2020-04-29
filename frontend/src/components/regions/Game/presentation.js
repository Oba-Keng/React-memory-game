import React, { useState } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";

const Game = props => {
  const [game, setGame] = useState({
    flipped: false
  });

  const Restart = () => {
    return <button className="start-button">Play Again</button>;
  };

  const flipCard = () => {
    setGame({ flipped: !game.flipped });
  };

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <div className="game">
        <div>
          <Board
            flipped={game.flipped}
            onClick={flipCard}
            orientation="horizontal"
          />
        </div>
      </div>
    </React.Fragment>
  );

  //

  // if (game.cardclick === 0)
  //   setGame({
  //     firstCard: cards,
  //     cardclick: 1,
  //     stepNumber: phase.length
  //   });
  // else if (game.cardClick === 1) {
  //   if (game.firstCard === phase.cards)
  //     setGame({
  //       cardClick: 2,
  //       secondCard: phase.cards,
  //       stepNumber: phase.length
  //     });

  //   // game.timer = setInterval(control, 500);
  // }
};
export default Game;
