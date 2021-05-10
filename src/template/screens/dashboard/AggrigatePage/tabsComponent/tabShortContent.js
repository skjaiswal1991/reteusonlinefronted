import React, { Component } from 'react';
import TabSlider from './tabSlider';

const TabShortContent = (props) =>
{
  console.log(props);
  const regex = /(<([^>]+)>)/ig;
  const result =  props.description? props.description.replace(regex, '') :'';
  // this.setState({shortdesc:result.substr(0,1500)})
  return (
      <section className="main-sec-text" id="section-01">
        <div className="total-online-review-inner">
          <div className="row">
            <div className="col-md-6 text-left-sec">
              <p>
                 {result.substr(0,1500)}
                <button className="btn btn-primary" >More details</button>
              </p>
            </div> 
            <TabSlider />   
          </div>
          
        </div>
    </section>
  )
    
}
export default TabShortContent;