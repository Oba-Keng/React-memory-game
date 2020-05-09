import { createStore,applyMiddleware } from "redux";
import rootReducer from "./r"

const store = createStore();

store.subscribe(() => console.log(store.getState()));

export default store;
