import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import MapUpdate from './MapUpdate'
const mapStyles = {
  width: "100%",
  height: "100%",
};
class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      lat:'',
      lng:'',
      center:this.props.center
    };
  }

  hendler = () =>{
    this.setState({center:{lat: 20.593684, lng: 78.96288}})
  }
   
render() {
  //this.forceUpdate();
  // const  {lat,lng} = this.props
   console.log(this.props);
   //console.log(this.state);

    return (
      <div style={{ width: "30", height: "280px" }}>
        <MapUpdate {...this.props} />
      </div>  
       
      // <div className="maps-div">
         
      //   {/* <Map
      //     google={this.props.google}
      //     zoom={this.props.zoom?this.props.zoom : 20}
      //     style={mapStyles}
      //     initialCenter={this.props.center}
      //     center={this.props.center}
          
      //   >
      //     <Marker onClick={this.onMarkerClick} name={"This is test name"} />
      //   </Map> */}
      //   <button onClick={()=>this.hendler()}>Change</button>
      // </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4KxYqQwMJTX7RNKxzGwdWtxPMP1LvcQM",
})(MapView);
