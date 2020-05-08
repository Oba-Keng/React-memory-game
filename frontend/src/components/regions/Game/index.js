import React, { useState, useEffect } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";
import InitializeBoard from "../Board/index";

const Game = props => {
  const [cards, setCards] = useState([]);
  const [game, setGame] = useState({
    flipped: []
  });

  useEffect(() => {
    setCards(InitializeBoard());
  }, []);

  const flipCard = id => {
    setGame({
      flipped: [id]
    });
  };

  const Restart = () => {
    return <button className="start-button">Play Again</button>;
  };

  return (
    <React.Fragment>
      <Restart />
      <Timer />
      <Board cards={cards} flipped={game.flipped} flipCard={flipCard} />
    </React.Fragment>
  );

  //

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
