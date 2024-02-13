import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CounterButton from "./components/CounterButton";
import "./style/App.css";

export default function App() {
  const [counters, setCounters] = useState([
    { id: uuidv4(), count: 0 },
    { id: uuidv4(), count: 0 },
    { id: uuidv4(), count: 0 },
  ]);

  const incrementCounter = (id) => {
    const counter = counters.find((counter) => {
      return counter.id === id;
    });
    counter.count++;
    setCounters([...counters]);
  };

  const addNewCounter = () => {
    console.log("addNewCounter");
    setCounters([...counters, { id: uuidv4(), count: 0 }]);
  };
  const deleteCounter = (id) => {
    console.log("delete " + id);
    setCounters(counters.filter((counter) => counter.id !== id));
  };
  return (
    <div className="App">
      <div>
        {counters.map((counter) => (
          <CounterButton
            key={counter.id}
            id={counter.id}
            updateCounterSum={incrementCounter}
            counter={counter.count}
            onDeleteClick={deleteCounter}
          />
        ))}
      </div>
      <p>{counters.reduce((total, counter) => total + counter.count, 0)}</p>
      <button onClick={addNewCounter}>Add a new counter</button>
    </div>
  );
}
