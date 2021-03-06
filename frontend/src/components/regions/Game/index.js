import React, { useState, useEffect } from "react";
import Board from "../Cards/index";
import Timer from "./Timer/presentation";
import InitializeBoard from "../Board/index";
import { GiNinjaHead } from "react-icons/gi";
import { Md3DRotation } from "react-icons/md";
import { GiBlindfold } from "react-icons/gi";
import { GiHolyOak } from "react-icons/gi";

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
    preloadImages();
  }, cards);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.addEventListener("resize", resizeListener);
  });

  const flipCard = id => {
    setFlipped([...flipped, id]);

    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCard()) return setFlipped([flipped[0], id]);
      if (cardMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const preloadImages = () => {
    cards.map(card => {
      const src = `/images/${card.type}.gif`;
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCard = () => flipped.includes(props.id);

  const cardMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);

    return flippedCard.type === clickedCard.type;
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
    return (
      <button className="timer">
        <h1>Restart</h1>
      </button>
    );
  };

  return (
    <React.Fragment>
      <div className="game-backdrop">
        <GiHolyOak />
        <GiBlindfold />
        <GiNinjaHead />
        <Md3DRotation /> <Restart />
        <Timer />
        <Board
          data-testid="board"
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          flipCard={flipCard}
          disabled={disabled}
          solved={solved}
        />
      </div>
    </React.Fragment>
  );
};
export default Game;
