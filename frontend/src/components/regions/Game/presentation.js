import React, { useState } from "react";
import Board from "../Cards/index";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0,
    phase: [{ cards: Array(30).fill(null) }]
  });

  const phase = game.phase;

  return (
    <React.Fragment>
      <div className="game">
        <div className="">
          <Board onClick={i => props.onClick(i)} cards={phase} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Game;
