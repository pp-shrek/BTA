import './App.css'
import { useState } from "react";
import React from 'react';

const App = () => {
  const [isVisible, setVisibility] = useState(true);
  const toggleText = () => {
    console.log(`hei`);
    isVisible ? setVisibility(false) : setVisibility(true);
  };
  return (
    <>
    <h1>Assignment 1: Toggle render</h1>
    <button onClick={toggleText}>Toggle text</button>
    {isVisible && <p>lorem ipsum</p>}
    <h1>Assignment 2: More toggle render</h1>
    <h1>Assignment 3: Bingo</h1>
    </>
  );
}


export default App
