// INC
export function increment(state) {
  const newState = {
    ...state,
    counter: state.counter + state.step,
  };

  return newState;
}
