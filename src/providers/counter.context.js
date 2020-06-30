import React from "react";
// Counter Context
const CounterContext = React.createContext();

// Provider
export const CounterProvider = CounterContext.Provider;
console.log(CounterProvider);

// Consumer
export const CounterConsumer = CounterContext.Consumer;
console.log(CounterContext);
