import React from "react";
import { CounterConsumer } from "../providers/counter.context";
export const Counter = () => (
  <CounterConsumer>{(value) => <h1>{value}</h1>}</CounterConsumer>
);
