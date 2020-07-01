// DEC
export function decrement(state) {
  const newState = {
    ...state,
    counter: state.counter - state.step,
  };

  return newState;
}
