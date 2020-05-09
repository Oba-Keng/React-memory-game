import React from "react";
import Cards from "./presentation";

const Board = props => {
  const showCards = i => {
    return (
      <React.Fragment>
        {props.cards.map(card => (
          <Cards
            key={card.id}
            id={card.id}
            type={card.type}
            dimension={props.dimension}
            flipped={props.flipped.includes(card.id)}
            flipCard={props.flipCard}
            solved={props.solved.includes(card.id)}
            disabled={props.disabled || props.solved.includes(card.id)}
          />
        ))}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="game">
        <div>{showCards()}</div>
      </div>
    </React.Fragment>
  );
};

export default Board;
