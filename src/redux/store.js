import { createStore, combineReducers } from "redux";
import { counterReducer, stepReducer } from "./reducers";

const state = {
  users: counterReducer,
  payments: stepReducer,
};

export const store = createStore(combineReducers(state));
