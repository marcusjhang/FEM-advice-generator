import './App.css';
import {AdviceCard} from './AdviceCard';
import dice from './images/icon-dice.svg';
import React, { useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');

  function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <div className="box">
        <AdviceCard advice={advice}/>
      </div>
      <button className="circle" onClick={fetchAdvice}>
        <div className='dice'>
          <img src={dice} alt='dice' />
        </div>
      </button>
    </div>
  );
}


export default App;
