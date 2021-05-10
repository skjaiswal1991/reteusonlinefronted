import React, { Component } from "react";
import "./Intrigation.css";
import { connect } from "react-redux";

import GooglePlacesInput  from '../../../components/geo-location/geoplaceautocomplete';
import * as bussinessActions from "../../../../redux/actions/business.action.js";
import Cards from "../../../components/Intrigation-cards/intregation-cards";
import CardYelp from '../../../components/Intrigation-cards/intregation-cards-yelp'
import CardZomato from '../../../components/Intrigation-cards/intregation-cards-zomato'
import CardHotel from '../../../components/Intrigation-cards/intregation-cards-hotel'
import CardGooglemap from '../../../components/Intrigation-cards/intregation-cards-googlemap'
import CardAmazon from '../../../components/Intrigation-cards/intregation-cards-amazon'
import axios from 'axios'
import { Row, Container } from "react-bootstrap";
class Intrigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadBussiness();
  }

  getlatlong = (cord,address) =>{
    console.log('Cordinate');
    console.log(address);
    this.setState({
        lat:cord.lat,
        lng:cord.lng,bussiness: {
        ...this.state.bussiness,
        location: address,
        lat:cord.lat,
        lng:cord.lng
    }})
  }



  render() {

    console.log(this.props.bussiness);
    const beforeLoad = (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
    const afterLoad = (
      <div>
        <Container className="">
          <Row>
             
            <CardAmazon
              name="Amazon"
              logo="amazon-logo.png"
              bussiness={this.props.bussiness}
              type="pop-up"
              example=""
            ></CardAmazon>
            <CardZomato
              name="Zomato"
              logo="zomato-logo.png"
              bussiness={this.props.bussiness}
              type="pop-up"
            ></CardZomato>
            <Cards
              name="Facebook"
              logo="facebook-logo.svg"
              bussiness={this.props.bussiness}
              type="o-auth"
            ></Cards>
            <CardYelp
              name="Yelp"
              bussiness={this.props.bussiness}
              logo="yelp-logo.png"
              type="pop-up"
            ></CardYelp>
            <Cards
              name="Booking.com"
              logo="Booking.Com-Logo.png"
              bussiness={this.props.bussiness}
              type="o-auth"
            ></Cards>
            <CardHotel
              name="hotels.com"
              logo="hotel-Logo.png"
              bussiness={this.props.bussiness}
              type="pop-up"
            ></CardHotel>
            <CardGooglemap
              name="hotels.com"
              logo="Googlemap-logo.png"
              bussiness={this.props.bussiness}
              type="pop-up"
            ></CardGooglemap>
          </Row>
        </Container>
      </div>
    );
    return this.props.isLoading ? beforeLoad : afterLoad;
  }
}

function mapStateToProps({ bussiness, isAuthonticate, isLoading }) {
  return {
    bussiness,
    isAuthonticate,
    isLoading,
  };
}

const mapDispatchToProps = {
  loadBussiness: bussinessActions.loadBusiness,
};

export default connect(mapStateToProps, mapDispatchToProps)(Intrigation);
