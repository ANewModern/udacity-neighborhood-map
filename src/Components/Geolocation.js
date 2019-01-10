// From the React Geolocation package https://www.npmjs.com/package/react-geolocated

import React from "react";
import { geolocated } from "react-geolocated";

class Geolocation extends React.Component {
  state = {
    updateCount: 1
  };
  componentDidUpdate() {
    if (this.state.updateCount === 1) {
      this.setGeolocation();
      this.setState(() => ({ updateCount: 2 }));
    }
  }
  setGeolocation = () => {
    this.props.setGeolocation(
      this.props.coords.latitude,
      this.props.coords.longitude
    );
  };
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div />
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
    timeout: Infinity
  },
  userDecisionTimeout: 5000
})(Geolocation);
