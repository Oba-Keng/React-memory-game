import { createStore } from "redux";

const store = createStore();

store.subscribe(() => console.log(store.getState()));

export default store;
