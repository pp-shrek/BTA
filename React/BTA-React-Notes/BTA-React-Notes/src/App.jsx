import { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import Notes from "./Notes";
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   console.log(`fetching data`);

  //   axios
  //   .get("http://localhost:3000/notes")
  //   .then(response => {
  //     console.log(`promise fulfilled`);
  //     setNotes(response.data);
  //   });
  // }, []);

  

  return (
    <>
    <Notes />
   
     </>
  )
}

export default App
