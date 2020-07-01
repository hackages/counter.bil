// update the state in the store

import { incrementAction, decrementAction } from "./action";

const initialState = {
  counter: 0,
  step: 10,
  condition: false,
};

export function counterReducer(state = initialState, action) {
  if (action.type === incrementAction.type) {
    const newState = {
      ...state,
      counter: state.counter + state.step,
    };

    return newState;
  }
  if (action.type === decrementAction.type) {
    const newState = {
      ...state,
      counter: state.counter - state.step,
    };

    return newState;
  }

  return state;
}
