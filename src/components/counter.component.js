import React from "react";
import { useSelector } from "react-redux";
export const Counter = () => {
  const counter = useSelector((state) => {
    return state.users.counter;
  });
  return <h1>{counter}</h1>;
};
