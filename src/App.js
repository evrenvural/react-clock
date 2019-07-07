import React from 'react';
import './App.css';
import Header from './components/Header';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Header title = "React Clock"/>
      <Clock />
    </div>
  );
}

export default App;
