import { createStore, combineReducers, compose } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

export default store;
