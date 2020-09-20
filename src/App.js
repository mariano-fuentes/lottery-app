import React from 'react';
import './App.css';
import Lotto from './components/lotto/Lotto';

function App() {
  return (
    <div className="App">
        <Lotto title='Lottery' amount={6}></Lotto>
        <br></br>
        <Lotto title='Mini Lottery' amount={4}></Lotto>
    </div>
  );
}

export default App;
