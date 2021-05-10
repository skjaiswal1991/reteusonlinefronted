import React, { Component } from 'react';

class DirectionSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="map-sec" id="section-07">
                <div className="total-online-review-inner">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="map"></div>
                        <div className="input-form">
                        <div className="row">
                            <div className="col-md-9">
                            <div className="input-group">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Post a Comment"
                                />
                            </div>
                            </div>
                            <div className="col-md-3">
                            <button
                                type="button"
                                className="view-btn alt-font float-right"
                            >
                                Get Directions
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default DirectionSection;