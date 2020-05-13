import React from "react";
import ReactDOM from "react-dom";
import Game from "./../index";

describe("Cards components", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game></Game>, div);
  });
});
