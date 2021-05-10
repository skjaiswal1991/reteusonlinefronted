import React, { Component, useState,useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import GooglePlacesAutocomplete,{ geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { setMaxListeners } from 'process';
import { getDefaultNormalizer } from 'react-testing-library';


const GooglePlacesInput = (props) => {
    const [value, setValue] = useState(null);


//  useEffect(() =>{
//     //console.log(value)
//     if(value)
//     geocodeByAddress(value.label)
//         .then(results => getLatLng(results[0]))
//         .then(({ lat, lng }) =>{
//             setLet(lat)
//             setLng(lng)
//             console.log('Successfully got latitude and longitude', { lat, lng })
//         }
//         );
// })

  
  return (
    <GooglePlacesAutocomplete
    selectProps={{
        value,
        onChange: (data)=>{
            setValue(data)
            geocodeByAddress(data.label)
                .then(results => getLatLng(results[0]))
                .then(({ lat, lng }) =>{
                        props.callback( { lat, lng },data.label)
                        
                        //console.log('Successfully got latitude and longitude', { lat, lng })
                    }
                );
        },
      }}
    />
  );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyDOe_Bg4qQnGGTXUGeBCiVP2JfFxqrartw",
  })(GooglePlacesInput);