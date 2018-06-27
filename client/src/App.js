import React, { Component } from 'react';
import './App.css';
import TripPage from './components/TripPage';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TripPage/>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
