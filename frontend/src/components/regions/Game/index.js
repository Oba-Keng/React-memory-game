import React, { useState, useEffect } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";
import InitializeBoard from "../Board/index";

const Game = props => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(InitializeBoard());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.addEventListener("resize", resizeListener);
  });

  const flipCard = id => {
    setFlipped([...flipped, id]);
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      )
    );
  };

  const Restart = () => {
    return <button className="timer">Play Again</button>;
  };

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        flipCard={flipCard}
      />
    </React.Fragment>
  );
};
export default Game;
