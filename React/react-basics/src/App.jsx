// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Greeting from "./Greeting";
import Planets from './Planets';
import IntroduceR2D2 from "./R2D2";

const App = () => {
  const planetList = [
    { name: "Hoth", climate: "Ice" },
    { name: "Tattooine", climate: "Desert" },
    { name: "Alderaan", climate: "Temperate" },
    { name: "Mustafar", climate: "Volcanic", }
  ];
  
  return (
    <>
      <h1>Assignment 1: Simple props</h1>
      <Greeting fullName='Teppo Korhonen' age={99}/>
      <h1>Assignment 2</h1>
      <IntroduceR2D2 />
      <h1>Assignment 3</h1>
      <Planets planetList={planetList}/>
      <h1>Assignment 4</h1>
    </>
  )
}

export default App
