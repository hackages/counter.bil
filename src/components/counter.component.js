import React from "react";
import { useSelector } from "react-redux";
export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return <h1>{counter}</h1>;
};
