import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var myInt = 5;
var myFloat = 6.667;
var myMath = 60 + 11;
var string = 'The revolution will not be televised.';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
       <div className="App-body">
          <p>And this is where Chris learns something new
          </p>
           <p>{myInt}</p>
           <p>{myMath}</p>
           <p>{myMath+=5}</p>
           <p>{string + 'hi my name is chris' + " " + Number(456)}</p>
           
        </div>
        </header>
      </div>
    );
  }
}

export default App;
