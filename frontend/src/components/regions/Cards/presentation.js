import React, { useState } from "react";

// import Board from "./index";

const Cards = props => {
  return (
    <React.Fragment>
      <div className="flipper-container">
        <div className="flipper">
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
