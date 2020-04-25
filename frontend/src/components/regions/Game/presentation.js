import React, { useState } from "react";
import Board from "../Cards/index";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0,
    phase: [{ cards: Array(30).fill(null) }]
  });

  const Timer = () => {
    const [timer, setTimer] = useState({
      minutes: 2,
      seconds: 0
    });

    return (
      <React.Fragment>
        <div>
          <h1>Time-Elapsed: 2:00</h1>
        </div>
      </React.Fragment>
    );
  };

  const clickHandler = props => {
    const phase = game.phase.slice();
    const current = phase[phase - 1];

    // setGame({
    //   phase: phase.concat({
    //     cards: cards
    //   })
    // });
  };

  const phase = game.phase;

  return (
    <React.Fragment>
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
