import {createStore, applyMiddleware} from "redux";
import bonoMail from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  bonoMail,
  composeWithDevTools(applyMiddleware())
);

export default store;
