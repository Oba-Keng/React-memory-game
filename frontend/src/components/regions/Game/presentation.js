import React, { useState } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0,
    phase: [{ cards: Array(30).fill(null) }]
  });

  const clickHandler = props => {
    const phase = game.phase.slice();
    const current = phase[phase - 1];

    setGame({
      phase: phase.concat({
        cards: props.cards
      })
    });
  };

  const phase = game.phase;

  const Restart = () => {
    return <button className="start-button">Play Again</button>;
  };

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <div className="game">
        <div className="">
          <Board onClick={i => clickHandler(i)} cards={phase} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Game;
