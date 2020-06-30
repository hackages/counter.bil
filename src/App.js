import React, { useState } from "react";
import "./App.css";

let numberOfCalls = 0;

class Increment extends React.Component {
  render() {
    return <button onClick={this.props.inc}>+</button>;
  }
}
class Decrement extends React.Component {
  render() {
    return <button onClick={this.props.dec}>-</button>;
  }
}
class Counter extends React.Component {
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

function DisplayCities({ cities }) {
  return (
    <ul>
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
}

// Class
export class App extends React.Component {
  state = {
    counter: 0,
    step: 10,
    cities: ["Amsterdam", "Brussels", "Luxembourg", "Metz"],
  };

  increment = () => {
    const { step, counter } = this.state;
    this.setState({ counter: counter + step });
  };

  decrement = () => {
    const { step, counter } = this.state;
    this.setState({ counter: counter - step });
  };

  render() {
    return (
      <>
        <Increment inc={this.increment}></Increment>
        <Decrement dec={this.decrement}></Decrement>
        <Counter value={this.state.counter}></Counter>
        <DisplayCities cities={this.state.cities}></DisplayCities>
      </>
    );
  }
}

// function Increment(inc){
//   inc();
// }

// Increment(function(){})
