import React from "react";
import { incrementAction } from "../redux/action";
import { useDispatch } from "react-redux";
export const Increment = () => {
  const dispatch = useDispatch();
  const inc = () => dispatch(incrementAction);
  return <button onClick={inc}>+</button>;
};
