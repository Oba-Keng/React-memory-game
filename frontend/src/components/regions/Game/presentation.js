import React, { useState } from "react";
import Board from "../Cards/index";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0,
    history: [{ cards: Array(30).fill(null) }]
  });

  const history = game.history;

  return (
    <React.Fragment>
      <div className="game">
        <div className="">
          <Board onClick={i => props.onClick(i)} cards={history} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Game;
