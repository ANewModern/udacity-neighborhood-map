import React, { Component } from 'react';
import './App.css';
import GoogleMaps from './Components/GoogleMaps';
import Geolocation from './Components/Geolocation';

class App extends Component {
  state = {
    lat: 0,
    lng: 0,
    geolocationArrived: false
  }
  setGeolocation = (lat, lng) => {
    console.log(lat, lng);
    this.setState(() => {
      return {
        lat,
        lng,
        geolocationArrived: true
      };
    });
  }
  render() {
    return (
      <div className="App">
        <Geolocation setGeolocation={this.setGeolocation} />
        {this.state.geolocationArrived && <GoogleMaps location={{lat: this.state.lat, lng: this.state.lng}} />}
      </div>
    );
  }
}

export default App;
