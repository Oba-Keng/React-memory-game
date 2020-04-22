import React, { useState } from "react";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0
  });

  return (
    <React.Fragment>
      <h1 align="center">Memory-Game</h1>
      <button>{props.cards} </button>
    </React.Fragment>
  );
};

export default Game;
