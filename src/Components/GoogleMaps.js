// From the react google maps package https://github.com/fullstackreact/google-maps-react/blob/master/README.md

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    zoom: 15
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        initialCenter={{
          lat: this.props.location.lat,
          lng: this.props.location.lng
        }}
      >
        {this.props.venues.map(venue => {
          return (
            <Marker
              title={venue.venue.name}
              name={venue.venue.name.toLowerCase().split(' ').join('_')}
              key={venue.venue.name.toLowerCase().split(' ').join('_')}
              position={{ lat: venue.venue.location.lat, lng: venue.venue.location.lng }}
            />
          );
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATXVt26t22E1zEgWcQF2D1sjxsneIPM9w"
})(MapContainer);
