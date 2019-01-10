import React, { Component } from 'react';
import './App.css';
import GoogleMaps from './Components/GoogleMaps';
import Geolocation from './Components/Geolocation';
import axios from 'axios';

class App extends Component {
  state = {
    lat: 0,
    lng: 0,
    geolocationArrived: false,
    venues: []
  }
  setGeolocation = (lat, lng) => {
    console.log(lat, lng);
    this.setState(() => {
      return {
        lat,
        lng,
        geolocationArrived: true
      };
    }, () => {
      this.getVenues();
    });
  }
  getVenues = () => {
    const url = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'QP5MCIB1BHHWKNDS5PDWMIAP535T3MDWACJKHPTTY52WHZ0S',
      client_secret: 'ABW2QVCLNJXGCHE3YJ0NHG4UVEQJK5N1SKS3L3TFYAATKPNC',
      query: 'food',
      ll: `${this.state.lat}, ${this.state.lng}`,
      v: '20190109'
    }

    axios.get(url + new URLSearchParams(parameters)).then((response) => {
      const venues = response.data.response.groups[0].items;
      console.log(venues);
      this.setState(() => ({ venues }));
    }).catch((error) => {
      console.log('Error, ' + error);
    })
  }
  render() {
    return (
      <div className="App">
        <Geolocation setGeolocation={this.setGeolocation} />
        {this.state.geolocationArrived && <GoogleMaps location={{lat: this.state.lat, lng: this.state.lng}} venues={this.state.venues} />}
      </div>
    );
  }
}

export default App;
