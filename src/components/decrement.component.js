// Dumb components
import React from "react";
import { useDispatch } from "react-redux";
import { decrementAction } from "../redux/action";
export const Decrement = () => {
  const dispatch = useDispatch();
  const dec = () => dispatch(decrementAction);
  return <button onClick={dec}>-</button>;
};
