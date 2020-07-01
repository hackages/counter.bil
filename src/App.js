import React, { useState, useContext } from "react";
import "./App.css";
import { CounterProvider } from "./providers/counter.context";
import { Increment, Decrement, Counter } from "./components";

export const App = () => {
  const initialState = {
    counter: 0,
    step: 10,
    condition: false,
  };

  const [state, setState] = useState(initialState);

  const increment = () => {
    const { step, counter } = state;
    setState({ ...state, counter: counter + step });
  };

  const decrement = () => {
    const { step, counter } = state;
    setState({ ...state, counter: counter - step });
  };

  return (
    <>
      <Increment inc={increment}></Increment>
      <Decrement dec={decrement}></Decrement>
      <CounterProvider value={state.counter}>
        <Counter></Counter>
      </CounterProvider>
    </>
  );
};
