import React from "react";

const ShuffleBoard = array => {
  const _array = array.slice(0);

  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
};

const InitializeBoard = () => {
  let id = 0;

  const cards = [
    "flash-top",
    "slicedtriangle",
    "smiley",
    "spiral",
    "tulipninja",
    "rotary",
    "toothpaste",
    "radius",
    "rainbowegg",
    "milkywayfog",
    "bluesmoke",
    "ampisand",
    "discoball",
    "globe",
    "honeycomb"
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);

  return ShuffleBoard(cards);
};

export default InitializeBoard;
