import React, { useState } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0,
    firstCard: null,
    secondCard: null,
    timer: null,
    stepNumber: 0,
    phase: [{ cards: Array(30).fill(null) }],
    options: ["0", "2"]
  });

  const clickHandler = i => {
    const phase = game.phase.slice(0, game.stepNumber + 1);
    let current = phase[phase.length - 1];
    const cards = current.cards.slice();
    cards[i] = game.options;

    setGame({
      phase: phase.concat({
        cards: cards
      }),
      stepNumber: phase.length,
      options: game.options
    });
    // if (game.cardclick === 0) {
    //   setGame({
    //     firstCard: phase.cards,
    //     cardclick: 1,
    //     stepNumber: phase.length
    //   });
    // } else if (game.cardClick === 1) {
    //   if (game.firstCard === phase.cards)
    //     setGame({
    //       cardClick: 2,
    //       secondCard: phase.cards,
    //       stepNumber: phase.length
    //     });

    //   // game.timer = setInterval(control, 500);
    // }
  };

  const Restart = () => {
    return <button className="start-button">Play Again</button>;
  };

  // const phase = game.phase;
  let current = game.phase[game.stepNumber];

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <div className="game">
        <div className="">
          <Board onClick={i => clickHandler(i)} cards={current.cards} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Game;
