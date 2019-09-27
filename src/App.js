import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './Components/admin'




class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div>
            <Admin />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
