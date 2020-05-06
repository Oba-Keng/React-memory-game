import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

//STORE

//ACTION FLIPPED
const flipped = () => {
  return {
    type: "FLIPPED"
  };
};

//REDUCER
const card = (state = false, action) => {
  switch (action.type) {
    case "FLIPPED":
      return state + true;
  }
};

let store = createStore(card);

store.subscribe(() => console.log(store.getState()));
//DISPATCH
store.dispatch(flipped());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
