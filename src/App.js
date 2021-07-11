import React from 'react';
import './App.css';

import WordCard from './WordCard';


function App() {
  const word = ["Fruit","Apple","Banana","Coconut","Durian"]
  const randomWord = word[Math.floor(Math.random()*word.length)];
  const newgame = () => {window.location.reload()}  
  return (
      <div>
        <WordCard value={randomWord}/>
        <button onClick={newgame}>
          Restart
        </button>
      </div>
    );
     
 }
 export default App;
