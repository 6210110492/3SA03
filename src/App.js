import React from 'react';
import './App.css';

import WordCard from './WordCard';


function App() {
  const word = ["Fruit","Apple","Banana","Coconut","Durian"]
  const randomWord = word[Math.floor(Math.random()*word.length)];
  const newgame = () => {window.location.reload()}  
  return (    
      <div> 
        <header>
          <h1> React Game </h1>
        </header>

        <WordCard value={randomWord}/>
        <button onClick={newgame}>
          Restart
        </button>
      </div>
    );  
}
 export default App;
