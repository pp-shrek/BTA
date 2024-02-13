import React, { useState } from "react";
import "../style/button.css";

const CounterButton = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.updateCounterSum(props.id);
        }}
      >
        {props.counter}
      </button>
      <button
        onClick={() => {
          props.onDeleteClick(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CounterButton;
