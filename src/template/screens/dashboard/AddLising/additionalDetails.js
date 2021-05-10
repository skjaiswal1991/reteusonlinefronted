import React, { Component } from 'react';

class AdditionalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Opening Days</label>
                    <input
                    onChange={this.setTitleValue}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder={this.state.openingDays}
                    name="openingDays"
                    />
                </div>
                </div>
                <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Start</label>
                    <input
                    onChange={this.setTitleValue}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder={this.state.from}
                    name="from"
                    />
                </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">End</label>
                    <input
                        onChange={this.setTitleValue}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder={this.state.to}
                        name="to"
                    />
                    </div>
                </div>
          </div>
         );
    }
}
 
export default AdditionalDetails;