// From the react google maps package https://github.com/fullstackreact/google-maps-react/blob/master/README.md

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    lat: 0,
    lng: 0,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  onMarkerClick = (props, marker, e) => { // Checked what marker was clicked and sets it into the state
    console.log('marker clicked', props);
    this.setState({
      lat: props.position.lat,
      lng: props.position.lng,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClicked = props => { // Checks if the map has been clicked to close any info window that has been opened
    console.log('map clicked');
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        center={{
          lat: !!this.state.lat ? this.state.lat : this.props.location.lat,
          lng: !!this.state.lng ? this.state.lng : this.props.location.lng
        }}
        onClick={this.onMapClicked}
      >
        {this.props.venues.map(venue => {
          return (
            <Marker
              title={venue.venue.name}
              name={venue.venue.name}
              key={venue.venue.name
                .toLowerCase()
                .split(" ")
                .join("_")}
              position={{
                lat: venue.venue.location.lat,
                lng: venue.venue.location.lng
              }}
              onClick={this.onMarkerClick}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATXVt26t22E1zEgWcQF2D1sjxsneIPM9w"
})(MapContainer);
