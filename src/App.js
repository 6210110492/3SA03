import React from 'react';
import './App.css';

import WordCard from './WordCard';

const word = "Fruit"
function App() {
  return (
      <div>
        <WordCard value={word}/>
        <WordCard value={"Apple"}/>
        <WordCard value={"Banana"}/>
        <WordCard value={"Coconut"}/>
        <WordCard value={"Durian"}/>
      </div>
    );
     
 }
 export default App;
