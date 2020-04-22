import React, { useState } from "react";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0
  });

  return (
    <button>
      {props.value} onClick={() => props.onClick(i)} />
    </button>
  );
};

export default Game;
