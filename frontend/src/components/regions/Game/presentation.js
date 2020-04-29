import React, { useState } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";

const Game = () => {
  const [game, setGame] = useState({
    cardclick: 0,
    firstCard: null,
    secondCard: null,
    timer: null,
    phase: [{ cards: Array(30).fill(null) }],
    orientation: null,
    flipped: false
  });

  const Restart = () => {
    return <button className="start-button">Play Again</button>;
  };

  // const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setGame({ flipped: game.flipped });
  };

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <Board
        flipped={game.flipped}
        onClick={flipCard}
        orientation="horizontal"
      />
      <Board flipped={game.flipped} onClick={flipCard} orientation="vertical" />
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
