import React, { Component } from 'react';

const TabSlider = (props) =>
{

    return(

        <div className="col-md-6 left-carousel-vd">
              <div
                className="carousel slide"
                id="main-carousel"
                data-ride="carousel"
              >
                  <ol className="carousel-indicators">
                    <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#main-carousel" data-slide-to="1"></li>
                    <li data-target="#main-carousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <a href="https://www.rateusonline.com/small-business-recommendation-guide-for-2020/">
                        <img
                          className="img-fluid"
                          alt=""
                          src="https://i.ytimg.com/vi/rU-8MvTLytw/hqdefault.jpg"
                        />
                      </a>
                    </div>                    
                  </div>
            </div>
        </div>
    )
}

export default TabSlider;