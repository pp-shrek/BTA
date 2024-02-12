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
    console.log(counters);
  };

  return (
    <div className="App">
      <div>
        <CounterButton
          key="0"
          id="0"
          updateCounterSum={updateCounterSum}
          counter={counters[0]}
        />
        <CounterButton
          key="1"
          id="1"
          updateCounterSum={updateCounterSum}
          counter={counters[1]}
        />
        <CounterButton
          key="2"
          id="2"
          updateCounterSum={updateCounterSum}
          counter={counters[2]}
        />
      </div>
      <p>{counters.reduce((total, counter) => total + counter)}</p>
    </div>
  );
}
