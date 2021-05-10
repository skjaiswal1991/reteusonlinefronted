import React from "react";

import GoogleMap from "google-map-react";
import { Next } from "react-bootstrap/esm/PageItem";

//77.3910265
//28.5355161

const GOOGLE_API_KEY = "AIzaSyA4KxYqQwMJTX7RNKxzGwdWtxPMP1LvcQM";
const AnyReactComponent = ({ text }) => (
  <>
  <div style={{
    color: 'white', 
    background: '#003366',
    padding: '5px 5px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3%',
    width:'200px',
    opacity: '0.8',
    fontSize: '14px',
  }}>
    {text}
  </div>
  <img src="./../../../../images/marker.png" className="marker" style={{width: '40px',marginLeft: '79px'}} />
  </>
);
export class GMapReact extends React.Component {
  render() {
    const { center, zoom } = this.props;
    console.log(this.props);
    return (
      <div className="mapcalss" style={{ width: "100%", height: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: [GOOGLE_API_KEY] }}
          center={center}
          zoom={zoom}
        >
          {center.location.length > 0 ?(
           <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text={center.location}
          >         
          </AnyReactComponent>
          ) :""}
          </GoogleMap>
       
      </div>
    );
  }
}

class MapUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.7824134,
        lng: -122.4088472
      },
      form: {
        lat: 37.7824134,
        lng: -122.4088472
      }
    };
   // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  //console.log(props);
  }

  handleClick() {
    console.log('handleClick')
    this.setState({
      center: {lat: Number(this.props.center.lat), lng: Number(this.props.center.lng)}
    });
    console.log('handleClick')
  }
  static getDerivedStateFromProps(props, state) {    
    return {center:props.center}
  }

  shouldComponentUpdate(NextState,NextProps){
    console.log(NextState)
    console.log(NextProps)
    if(NextState.center.lat !== this.props.center.lat){
      console.log('shouldComponentUpdate')
       this.handleClick;
       this.setState({
        center: {lat: Number(this.props.center.lat), lng: Number(this.props.center.lng)}
      });
      return true;
    }else{
      return true;
    }
  }

  render() {    
    const center = this.state.center;
    console.log(this.props.center);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <GMapReact center={center} zoom={15} />
        </div>
      </div>
    );
  }
}

export default MapUpdate;

