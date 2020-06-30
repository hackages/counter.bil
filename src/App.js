import React, { useState, useContext } from "react";
import "./App.css";
import { CounterConsumer, CounterProvider } from "./providers/counter.context";

// Dumb components
const Increment = ({ inc }) => <button onClick={inc}>+</button>;
const Decrement = ({ dec }) => <button onClick={dec}>-</button>;
const Counter = () => (
  <CounterConsumer>{(value) => <h1>{value}</h1>}</CounterConsumer>
);

// Class

// Smart component
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
