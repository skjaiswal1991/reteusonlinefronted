import React, { Component } from "react";
import MapView from "./map-component";

export default class GeoLoaction extends Component {
  constructor(props) {
    super(props);
    this.state = {

      center:{
        lat:0,
        lng:0
      }
    };
  } 
  

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          this.setState({center:{
            lat :this.props.center.lat.length > 0 ? this.props.center.lat: position.coords.latitude,
            lng :this.props.center.lng.length > 0 ? this.props.center.lng: position.coords.longitude,
            location:this.props.center.location.length > 0 ? this.props.location.lng: ""
          }})
        
        });
    } else {
      alert("Not avilable");
    }
  }
 

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="mapwrapper">
        <MapView  center={this.props.center} zoom={this.props.zoom}></MapView>
      </div>
    );
  }
}
