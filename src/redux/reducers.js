// update the state in the store

import { incrementAction, decrementAction, INC, stepAction } from "./action";
import { increment, decrement } from "./services";

const initialState = {
  counter: 0,
  step: 10,
  condition: false,
};

const reducerHandler = {
  [incrementAction.type]: increment,
  [decrementAction.type]: decrement,
};

export function counterReducer(state = initialState, action) {
  const handler = reducerHandler[action.type];

  return handler ? handler(state, action) : state;
}

export function stepReducer(state = initialState, action) {
  if (action.type === stepAction.type) {
    return {
      ...state,
      step: state.step + action.payload.step,
    };
  }

  return state;
}
