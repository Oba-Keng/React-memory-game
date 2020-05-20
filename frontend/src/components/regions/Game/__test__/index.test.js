import React from "react";
import ReactDOM from "react-dom";
import Game from "./../index";
import { isTSAnyKeyword } from "@babel/types";

describe("Cards components", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
  });
});
