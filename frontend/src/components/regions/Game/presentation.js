import React from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";

const Game = props => {
  const Restart = () => {
    return <button className="start-button">Play Again</button>;
  };

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <Board />
    </React.Fragment>
  );

  //

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
