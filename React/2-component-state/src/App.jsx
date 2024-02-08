import './App.css'
import { useState } from "react";
import React from 'react';
import DisappearingButton from './assets/DisappearingButton';
import Box from './assets/Box';

const names = [
  "Anakin Skywalker",
  "Leia Organa",
  "Han Solo",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Obi-Wan Kenobi",
  "Yoda",
  "Palpatine",
  "Boba Fett",
  "Lando Calrissian",
  "Jabba the Hutt",
  "Mace Windu",
  "Padmé Amidala",
  "Count Dooku",
  "Qui-Gon Jinn",
  "Aayla Secura",
  "Ahsoka Tano",
  "Ki-Adi-Mundi",
  "Luminara Unduli",
  "Plo Koon",
  "Kit Fisto",
  "Shmi Skywalker",
  "Beru Whitesun",
  "Owen Lars"
];

const createBoxes = () => {
  return
}
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
    <DisappearingButton numb="1"/>
    <DisappearingButton numb="2"/>
    <DisappearingButton numb="3"/>
    <DisappearingButton numb="4"/>
    <DisappearingButton numb="5"/>
    <h1>Assignment 3: Bingo</h1>
    <Box name="Anakin Skywalke" />
    {/* {names.map(name =>(
        <Note 
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))} */}
    </>
  );
}


export default App
