import React, { Component } from "react";
import "./aggrigatepage.css";
import { Route, NavLink, Link } from "react-router-dom";
import { Modal, Card, Col, Button, Form} from "react-bootstrap";
import ProfilePicSelector from "../../../components/profile-pic-selector/profile-pic-selector.js";
import CoverPicSelector from "../../../components/cover-pic-selector/cover-pic-selector.js";
import Ratings from "../../../components/ratings";
import dataLayer from "../../../../data-laye";
import TabsData from "./tabsComponent/tabData";
import CovidCompaliance from "../../../components/covid-compaliance";
import DataSection from "../../../components/data-section";
import GraphDataSection from "../../../components/graph-section";
import TabCommonSection from "./tabCommonSection";
import TabSlider from './tabsComponent/tabSlider'
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import MapUpdate from "../../../components/geo-location/MapUpdate";

export default class EmptyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListing: true,
      tabactive:'information',
      businessdata : [],
      shortdesc:'',
      center:[]
    };
  
    dataLayer.getBussiness().then((response)=>{
        console.log(response);
      const regex = /(<([^>]+)>)/ig;
      const result = response.data[0].description.replace(regex, '');
        this.setState({businessdata:response.data[0],shortdesc:result.substr(0,1500)})
        this.setState({center:{
          lat:parseFloat(response.data[0].lat.$numberDecimal),
          lng:parseFloat(response.data[0].lng.$numberDecimal),
          location:response.data[0].location}},()=>{
            console.log(this.state);
          })
    })
  }

   

  render() {

    console.log(this.state);
    return (
      <div>
        <CoverPicSelector
          path="/images/"
          image="test.jpg"
          {...this.props}
        ></CoverPicSelector>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 top-left-sec">
                <ProfilePicSelector
                  path="/images/"
                  image="googleavatar.png"
                  {...this.props}
                ></ProfilePicSelector>
                <div className="Podium">
                  <p>
                    {this.props.location.bussiness
                      ? this.props.location.bussiness.title
                      : this.props.history.push("/dashboard")}
                  </p>
                  <Ratings count={4} size={14}></Ratings>
                  <div className="dropdown top-review">
                    <button
                      className="btn btn-secondary  alt-font"
                      type="button"
                      id="dropdownMenuButton"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {4} Review
                    </button>
                    {/* <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#"></a>
                      <a className="dropdown-item" href="#"></a>
                      <a className="dropdown-item" href="#"></a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 top-right-sec">
                <div className="top-social pull-right">
                  <a href="#" className="fb">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" className="twit">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="insta">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="whtsap">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </div>
                <div>
                  <button type="button" className="view-btn alt-font pull-right">
                    Claim this listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nav-listing">
          <div className="container">
            <div className="row">
              <ul id="nav">
                <li>
                  <div className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'all'})}>
                    Product Information
                  </div>
                </li>
                <li>
                  <div href="#section-02" className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'review'})}>
                    reviews
                  </div>
                </li>
                <li>
                  <div className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'map'})}>
                    map
                  </div>
                </li>
                <li>
                  <div href="#section-04" className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'feature'})}>
                    features
                  </div>
                </li>
                <li>
                  <div href="#section-04" className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'aggrigatation'})}>
                    Aggrigatation 
                  </div>
                </li>
                <li>
                  <div href="#section-04" className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'covidcompliance'})}>
                    Covid Compliance
                  </div>
                </li>
                <li>
                  <div href="#section-04" className="js-anchor-link alt-font" onClick ={()=>this.setState({tabactive:'fulldetails'})}>
                    full Details
                  </div>
                </li>
              </ul>
              
            </div>
          </div>
        </section>

       {/* <TabCommonSection type={this.state.tabactive} /> */}
       {/* {this.state.shortdesc} */}
      {/* {this.state.tabactive == 'information' ? (
          <section className="main-sec-text" id="section-01">
              <div className="total-online-review-inner">
                <div className="row">
                    <div className="col-md-6 text-left-sec" >
                    <div dangerouslySetInnerHTML={{ __html: this.state.shortdesc+"..." }} />
                    <div className="btn btn-primary" onClick ={()=>this.setState({tabactive:'fulldetails'})}>Read More</div>  
                  </div>
                  <TabSlider />   
                </div>
                              
              </div>
          </section>
      ):''}  
  
      {this.state.tabactive == 'map' ? (
          <section className="main-sec-text" id="section-01">
              <div className="total-online-review-inner">
                <div className="row">
                  <div className="col-md-12 text-left-sec">
                    <div style={{ width: "30", height: "400px" }}>
                        <MapUpdate center={this.state.center} />
                    </div>
                    
                  </div>    
                </div>
              </div>
          </section>
      ):''} 

       {this.state.tabactive == 'fulldetails' ? (
          <section className="main-sec-text" id="section-01">
              <div className="total-online-review-inner">
                <div className="row">
                  <div className="col-md-12 text-left-sec">
                    <div dangerouslySetInnerHTML={{ __html: this.state.businessdata.description }} />
                  </div>    
                </div>  
              </div>
          </section>
      ):''}   */}
       
        {/* tabs section End */}

          <TabsData action={this.state.tabactive} data={this.state.businessdata}  />

        {/* <CovidCompaliance></CovidCompaliance>
        <DataSection></DataSection>
        <GraphDataSection></GraphDataSection>    */}

        
      </div>
    );
  }
}
