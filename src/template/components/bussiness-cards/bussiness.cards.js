import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class BussinessCards extends Component {
  render() {
    let profilePicElement;
    if (this.props.profilePic) {
      profilePicElement = (
        <img
          className="card-img-top"
          src={JSON.parse(this.props.profilePic)}
          alt="Card image cap"
        />
      );
    } else {
      profilePicElement = (
        <img
          className="card-img-top"
          src="/images/googleavatar.png"
          alt="Card image cap"
        />
      );
    }

    return (
      <div className="col-md-2 col-sm-6 col-xs-6">
        <div className="card card-listing">
          <Link
            to={{
              pathname: `/dashboard/aggrigate-listing/${this.props.title}`,
              bussiness: this.props,
            }}
          >
            <div className="card-image">{profilePicElement}</div>
          </Link>
          <div className="card-body">
            <p className="card-text">{this.props.title}</p>
            <p className="card-loaction">
              <i className="fa fa-map-marker"></i>
              Moradabad
            </p>
            <div className="card-rating">
              <div className="rate"></div>
            </div>
            <div className="card-review">
              <p>
                <span>4.5</span> (4 reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
