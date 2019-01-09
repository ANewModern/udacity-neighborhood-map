// From the react google maps package https://github.com/fullstackreact/google-maps-react/blob/master/README.md

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    lat: -34.397,
    lng: 150.64,
    zoom: 8
  };
  componentDidMount() {
    // this.initMap();
  }
  initMap = () => {
    this.setState(() => {
      return {
        zoom: 12
      };
    });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        initialCenter={{
          lat: -34.397,
          lng: 150.64,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATXVt26t22E1zEgWcQF2D1sjxsneIPM9w"
})(MapContainer);
