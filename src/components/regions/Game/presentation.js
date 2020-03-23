import React, { useState } from "react";
import Board from "../Cards";

const Game = props => {
  const [game] = useState({
    cardOneisNext: true,
    stepNumber: 0,
    history: [{ cards: Array(9).fill(null) }]
  });

  const flipCard = i => {
    props.classlist.toggle("flip");
    //   const history = game.history.slice(0, game.stepNumber + 1);
    //   const current = history[history.length - 1];
    //   const cards = current.cards.slice();
    //   cards[i] = game.cardOneisNext ? "ACE" : "JACK";
    //   setGame({
    //     history: history.concat({
    //       cards: cards
    //     }),
    //     cardOneisNext: !game.cardOneisNext,
    //     stepNumber: history.length
    //   });
  };

  const history = game.history;

  const current = history[game.stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={i => flipCard(i)} cards={current.cards} />
      </div>
    </div>
  );
};

export default Game;
