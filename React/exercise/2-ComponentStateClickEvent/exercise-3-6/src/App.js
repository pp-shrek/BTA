import { useState } from "react";
import CounterButton from "./components/CounterButton";
import "./style/App.css";

export default function App() {
  const [sum, setSum] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const updateCounterSum = () => {
    setSum(sum + 1);
  };

  const hideButton = () => {
    isButtonDisabled ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
  };

  return (
    <div className="App">
      <div style={{ visibility: !isButtonDisabled ? "hidden" : "visible" }}>
        <CounterButton updateCounterSum={updateCounterSum} />
        <CounterButton updateCounterSum={updateCounterSum} />
        <CounterButton updateCounterSum={updateCounterSum} />
      </div>
      <p>{sum}</p>
      <button onClick={hideButton}> Hide Counters</button>
    </div>
  );
}
