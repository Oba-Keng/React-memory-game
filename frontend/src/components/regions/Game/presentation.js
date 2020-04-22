import React, { useState } from "react";

const Game = props => {
  const [game, setGame] = useState({
    cardclick: 0
  });

  return (
    <div>
      {props.value} onClick={() => props.onClick(i)} />
    </div>
  );
};

export default Board;
