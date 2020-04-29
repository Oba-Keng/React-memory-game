import React from "react";
import Presentation from "./presentation";

const Board = props => {
  return (
    <div className={"card" + props.orientation}>
      <div className={"flipper" + (props.flipped ? " flipped" : "")}>
        <Presentation />
      </div>
    </div>
  );

  // const showCards = i => {
  //   return (
  //     <Presentation value={props.cards} onClick={() => props.onClick(i)} />
  //   );
  // };

  // return (
  //   <React.Fragment>
  //     <div>
  //       <div className={"border-row"}>
  //         {showCards(0)}
  //         {showCards(1)}
  //         {showCards(2)}
  //         {showCards(3)}
  //         {showCards(4)}
  //       </div>
  //       <div className={"border-row"}>
  //         {showCards(5)}
  //         {showCards(6)}
  //         {showCards(7)}
  //         {showCards(8)}
  //         {showCards(9)}
  //       </div>
  //       <div className={"border-row"}>
  //         {showCards(10)}
  //         {showCards(11)}
  //         {showCards(12)}
  //         {showCards(13)}
  //         {showCards(14)}
  //       </div>
  //       <div className={"border-row"}>
  //         {showCards(15)}
  //         {showCards(16)}
  //         {showCards(17)}
  //         {showCards(18)}
  //         {showCards(19)}
  //       </div>
  //       <div className={"border-row"}>
  //         {showCards(20)}
  //         {showCards(21)}
  //         {showCards(22)}
  //         {showCards(23)}
  //         {showCards(24)}
  //       </div>
  //       <div className={"border-row"}>
  //         {showCards(25)}
  //         {showCards(26)}
  //         {showCards(27)}
  //         {showCards(28)}
  //         {showCards(29)}
  //       </div>
  //     </div>
  //   </React.Fragment>
  // );
};

export default Board;
