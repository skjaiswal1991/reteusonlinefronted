import React, { Component } from 'react';
import TabSlider from './tabSlider';

const TabFullContent = (props) =>
{

    console.log(props.description);
    let description = props.description ? props.description : 'No Description Available'
  return (
      <section className="main-sec-text" id="section-01">
        <div className="total-online-review-inner">
          <div className="row">
            <div className="col-md-12">
                <p>
                    <div dangerouslySetInnerHTML={{ __html: description }} />                    
                </p>
            </div>    
          </div>       
        </div>
    </section>
  )
    
}
export default TabFullContent;