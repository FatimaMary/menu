import React from 'react';
import { useState } from 'react';
import './increment.css';


function ButtonIncrement(props) {
  return (
    <button className="increment-btn" onClick={props.onClickFunc}>+</button>
  )
}

function ButtonDecrement(props) {
  return (
    <button className="decrement-btn" onClick={props.onClickFunc}>-</button>
  )
}

function Display(props) {
  return (
    <label>{props.message}</label>
  )
}


function Add() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div className='increment'>
      <ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message = {counter}/>
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </div>
  );
}

export default Add;
