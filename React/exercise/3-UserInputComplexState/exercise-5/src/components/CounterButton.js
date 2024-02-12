import React, { useState } from "react";
import "../style/button.css";

const CounterButton = (props) => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    props.updateCounterSum();
  };

  return (
    <div
      onClick={() => {
        props.updateCounterSum(props.id);
      }}
    >
      <button>{props.counter}</button>
    </div>
  );
};

export default CounterButton;
