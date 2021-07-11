import React from 'react';
import './App.css';

import WordCard from './WordCard';

const word = ["Fruit","Apple","Banana","Coconut","Durian"]
const randomWord = word[Math.floor(Math.random()*word.length)];
function App() {
  return (
      <div>
        <WordCard value={randomWord}/>

      </div>
    );
     
 }
 export default App;
