import React, { Component } from "react";
import * as bussinessActionsReview from "../../../redux/actions/datasourse.action.js";
//import GooglePlacesInput  from '../../../components/geo-location/geoplaceautocomplete';
import dataLayer from "../../../data-laye"; 
import GooglePlacesInput from '../geo-location/geoplaceautocomplete'
import { connect } from "react-redux";
import "../Intrigation-cards/intregation-card.css";
import { Modal, Card, Col, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CONSTANTS from "./constants.js";
//import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import DataLayer from "../../../data-laye.js";
class IntregationCardsHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showOther: false,
      isLoading: true,
      businessId:props.bussiness[0]._id,
      msg:"",
      bussinessReviews: {
        name: "",
        url: "",
        address:"",
        user_rating: "",
        user_review: "",
        photos_url: "",
        
      },
      bussiness: {        
        location: props.bussiness[0].location,
        latitude:props.bussiness[0].lat.$numberDecimal,
        longitude:props.bussiness[0].lng.$numberDecimal
    },
    };
  }
  
  handleCloseOther = () => {
    this.setState(() => {
      return {
        showOther: false,
      };
    });
  };
  
  // save the review data in database
  subscribehendler = () =>{
    DataLayer.createAgreegation({businessId:this.state.businessId,hotels:this.state.bussinessReviews})
      .then((res)=>{
        toast.success('update the Review Data', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          setTimeout(()=>{
            this.setState(() => {
              return {              
                showOther:false,
                show: false,
              };
            });
          },1000)
         
      })
      .catch((error)=>{
          toast.warn('Please check the login details', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
        
      })

  }


  handleShowOther = (data) => {
      console.log(this.state)
    dataLayer.gethotelData(this.state.bussiness)
    .then((review)=>{
        console.log(review);
       
        if(review.data.status == 'success'){
          console.log("typeof review.location")
          this.setState({
            bussinessReviews:{
              name: review.data.result.name,
              url: review.data.result.url,
              address:review.data.result.address,
              user_rating: review.data.result.user_rating,
              user_review: review.data.result.user_review,              
              businessId:this.state.businessId
            }
          },()=>{

            console.log(this.state);
            this.setState(() => {
              return {
                showOther: true,
              };
            });
          })
          
        }else{
          console.log("Else condition data")
          toast.warn('check location and business name', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
        }
    }) 
    
  };
  inputHendler = (e) =>{
    this.setState(
      {bussiness:{...this.state.bussiness,[e.target.name]:e.target.value}})
  }
  handleClose = () => {
    this.setState(() => {
      return {
        show: false,
      };
    });
  };
  handleShow = () => {
    this.props.loadedActions(false);
    this.setState(() => {
      return {
        show: true,
      };
    });
  };

  getlatlong = (cord,address) =>{
    // console.log(cord);
    // console.log(address);
    this.setState({
        bussiness: {        
        location: address,
        latitude:cord.lat,
        longitude:cord.lng
    }})
  }

 
  render() {
    const cardWithPoPUp = (
      <div className="col-md-2 col-sm-3 col-xs-6">
        <div className="">
        
          <Card
            onClick={this.handleShow}
            className="myCard"
            style={{ width: "auto" }}
          >
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <img src={`../images/${this.props.logo}`} />
            </Card.Body>
          </Card>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="myTitle">
              Enter URL of your Bussiness on {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                        
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Please Enter Business Name</Form.Label>
                <Form.Control
                  type="text"
                  name="url"
                  placeholder="Please give our Business Name"
                  onChange={this.inputHendler}
                  //disabled={!this.props.bussinessReviews.isLoaded}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancle
            </Button>
            <Button variant="primary" onClick={this.handleShowOther}>
              Get Data
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <ToastContainer />
        <Modal show={this.state.showOther} onHide={this.handleCloseOther}>
          <Modal.Header closeButton>
            <Modal.Title className="myTitle">
              Here Are The Ratings and Other Data From {this.props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img src={this.state.bussinessReviews.photos_url} width="300" />
            <p>Name: {this.state.bussinessReviews.name}</p>
            <p>Address: {this.state.bussinessReviews.address}</p>            
            <p>
              Rating Text:
              {this.state.bussinessReviews.user_rating}
            </p>
            <p>
              Total Review:
              {this.state.bussinessReviews.user_review}
            </p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseOther}>
              Cancle
            </Button>
            <Button onClick={this.subscribehendler} variant="primary">Confirm and subscribe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    let cardsWithOutPopUps = null;
    if (this.props.type == "pop-up") {
      return cardWithPoPUp;
    }
  }
}

function mapStateToProps({ isAuthonticate, bussinessReviews }) {
  return {
    isAuthonticate,
    bussinessReviews,
  };
}

const mapDispatchToProps = {
  loadBussinessReview: bussinessActionsReview.loadReview,
  loadedActions: bussinessActionsReview.LoaddingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(IntregationCardsHotel);
