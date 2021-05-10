import React, { Component } from 'react';
import MapUpdate from '../../../../components/geo-location/MapUpdate';

const TabMap = (props) =>{

  console.log(props)

  let center = {
                  lat: parseFloat(props.lat.$numberDecimal),
                  lng: parseFloat(props.lng.$numberDecimal),
                  location:props.location
                }
  console.log(center);
        return ( 
            <section className="main-sec-text" id="section-01">
            <div className="total-online-review-inner">
              <div className="row">
                <div className="col-md-12 text-left-sec">
                  <div style={{ width: "30", height: "400px" }}>
                      <MapUpdate center={center} />
                      
                  </div>
                  
                </div>    
              </div>
            </div>
        </section>
         );
}

 
export default TabMap;