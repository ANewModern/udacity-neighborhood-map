import React, { Component } from 'react';
import './App.css';
import GoogleMaps from './Components/GoogleMaps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMaps />
      </div>
    );
  }
}

export default App;
