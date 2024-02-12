import { useState } from "react";
import CounterButton from "./components/CounterButton";
import "./style/App.css";

export default function App() {
  const [sum, setSum] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0]);

  const updateCounterSum = (id) => {
    setCounters((prevCounters) => {
      return prevCounters.map((c, i) => {
        if (i == id) {
          return c + 1;
        } else {
          return c;
        }
      });
    });
  };

  return (
    <div className="App">
      <div>
        {counters.map((counter, index) => (
          <CounterButton
            key={index}
            id={index}
            updateCounterSum={updateCounterSum}
            counter={counters[index]}
          />
        ))}
      </div>
      <p>{counters.reduce((total, counter) => total + counter)}</p>
    </div>
  );
}
