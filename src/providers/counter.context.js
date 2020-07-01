import React from "react";
// Counter Context
const CounterContext = React.createContext();

// Provider
export const CounterProvider = CounterContext.Provider;

// Consumer
export const CounterConsumer = CounterContext.Consumer;
