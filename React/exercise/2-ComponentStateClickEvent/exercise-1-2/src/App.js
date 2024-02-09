import "./style/App.css";
import Family from "./components/Family";

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
  { name: "Donna", age: 45 },
];

export default function App() {
  return (
    <div className="App">
      <Family people={people} />
    </div>
  );
}
