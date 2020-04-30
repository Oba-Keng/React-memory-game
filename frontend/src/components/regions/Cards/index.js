import React from "react";
import Cards from "./presentation";

const Board = props => {
  const showCards = () => {
    return <Cards />;
  };

  return (
    <React.Fragment>
      <div>
        <div className={"border-row"}>
          {showCards(0)}
          {showCards(1)}
          {showCards(2)}
        </div>

        {/* <div className={"border-row"}>
          {showCards(5)}
          {showCards(6)}
          {showCards(7)}
          {showCards(8)}
          {showCards(9)}
        </div>
        <div className={"border-row"}>
          {showCards(10)}
          {showCards(11)}
          {showCards(12)}
          {showCards(13)}
          {showCards(14)}
        </div> */}
        {/* <div className={"border-row"}>
          {showCards(15)}
          {showCards(16)}
          {showCards(17)}
          {showCards(18)}
          {showCards(19)}
        </div>
        <div className={"border-row"}>
          {showCards(20)}
          {showCards(21)}
          {showCards(22)}
          {showCards(23)}
          {showCards(24)}
        </div>
        <div className={"border-row"}>
          {showCards(25)}
          {showCards(26)}
          {showCards(27)}
          {showCards(28)}
          {showCards(29)}
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Board;

// React
// JavaScript
// HTML
// CSS(less Css as well)
// SQL
// Python
// Node.js
// MongoDB
// Docker
// Express.js
