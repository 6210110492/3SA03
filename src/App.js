import React from 'react';
import './App.css';

import WordCard from './WordCard';


function App() {
  const Fruit = ["Apple","Banana","Coconut","Durian"];
  const Animal = ["Ant","Brid","Cat","Dog"];
  const Vegetable = ["Acacia","Basil","Chilli","Dill"];
  const randomFruit = Fruit[Math.floor(Math.random()*Fruit.length)];
  const randomAnimal = Animal[Math.floor(Math.random()*Animal.length)];
  const randomVegetable = Vegetable[Math.floor(Math.random()*Vegetable.length)];
  const newgame = () => {window.location.reload()}  
  return (    
      <div> 
        <header>
          <h1> React Game </h1>
        </header>
        <h2> Fruit </h2>
        <WordCard value={randomFruit}/>
        <h2> Animal </h2>
        <WordCard value={randomAnimal}/>
        <h2> Vegetable </h2>
        <WordCard value={randomVegetable}/>
        <button onClick={newgame}>
          Restart
        </button>
      </div>
    );  
}
 export default App;
