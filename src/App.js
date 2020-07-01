import React, { useState, useContext } from "react";
import "./App.css";
import { Increment, Decrement, Counter } from "./components";

// useSelector => read data from the store

export const App = () => (
  <>
    <Increment></Increment>
    <Decrement></Decrement>
    <Counter></Counter>
  </>
);
