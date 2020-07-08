import React from 'react';
//import logo from './logo.svg';
import hamburguesa from './hamburguesa.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hamburguesa} className="App-logo" alt="logo" />
        <p>
          <code>bienvenido</code>welcome.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
