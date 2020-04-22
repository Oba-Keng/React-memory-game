import React from "react";
import Presentation from "./presentation";
import imageone from "/images/2C.jpg";
import imagetwo from "/images/2D.jpg";

const Board = () => {
  const cards = [imageone, imagetwo];

  const showCards = i => {
    return <Presentation value={cards[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <React.Fragment>
      <h1 align="center">Memory-Game</h1>
      <div>
        <div className={"border-row"}>
          {showCards(0)}
          {showCards(1)}
          {showCards(0)}
          {showCards(1)}
        </div>
        <div className={"border-row"}>
          {showCards(0)}
          {showCards(1)}
          {showCards(0)}
          {showCards(1)}
        </div>
        <div className={"border-row"}>
          {showCards(0)}
          {showCards(1)}
          {showCards(0)}
          {showCards(1)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
