import React, { Component } from "react";
import * as bussinessActionsReview from "../../../redux/actions/datasourse.action.js";
import { connect } from "react-redux";
import "../Intrigation-cards/intregation-card.css";
import { Modal, Card, Col, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CONSTANTS from "./constants.js";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import DataLayer from "../../../data-laye.js";
class IntregationCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showOther: false,
      isLoading: true,
      bussinessReviews: {
        name: "",
        url: "",
        location: {
          address: "",
          locality: "",
          city: "",
          city_id: 11393,
          latitude: "",
          longitude: "",
          zipcode: "",
          country_id: 1,
          locality_verbose: "",
        },
        cuisines: "",
        average_cost_for_two: 0,
        user_rating: {
          aggregate_rating: "0",
          rating_text: "",
          rating_color: "",
          rating_obj: {
            title: {
              text: "0",
            },
            bg_color: {
              type: "lime",
              tint: "600",
            },
          },
          votes: 0,
        },
        photos_url: "",
      },
      businessMeta: { lat: 12.849, lng: 38.334 },
    };
  }
  selectDataSource = (event) => {
    const dataId = event.target.value;
    // const currentTime = new Date().getMilliseconds();
    // console.log(typeof new Date().getMilliseconds);
   // debugger;
    const filterBussiness = this.props.bussiness.filter((data) => {
     // debugger;
      console.log(data._id);
      return data._id === dataId ? true : false;
    });
    const dataSource = this.props.name.toLowerCase();
    switch (dataSource) {
      case "zomato":
        //debugger;
        if (filterBussiness.length > 0)
          this.props.loadBussinessReview(filterBussiness[0]);
        break;
      default:
        console.log("Issue inn switch case...");
    }
  };
  getBussiessUrl = (event) => {
    if (!event.target.value) return;
    if (!this.props.bussinessReviews) return;
    const filterd_results = this.props.bussinessReviews.restaurant.url.includes(
      event.target.value
    );

    if (filterd_results) {
      this.setState({
        bussinessReviews: this.props.bussinessReviews.restaurant,
      });
    } else {
      toast.error(
        `Bussiness URL Either Wrong!! Or Not Registerd With ${this.props.name} ... `,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };
  handleCloseOther = () => {
    this.setState(() => {
      return {
        showOther: false,
      };
    });
  };
  handleShowOther = () => {
    
    this.setState(() => {
      return {
        showOther: true,
      };
    });
  };
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
  responseFacebook = (resp) => {
    //debugger;
    DataLayer.getFaceBookToken(resp, this.props.bussiness);
  };
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
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Please Select A Bussiness</Form.Label>
                <Form.Control
                  name=""
                  as="select"
                  onChange={this.selectDataSource}
                >
                  {this.props.bussiness.map((data) => {
                    return (
                      <option key={data._id} value={data._id}>
                        {data.title}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Please Enter Bussiness URL</Form.Label>
              <Form.Control
                type="email"
                placeholder="http://example.com/some-thing"
                onInput={this.getBussiessUrl}
                disabled={!this.props.bussinessReviews.isLoaded}
              />
            </Form.Group>
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
            <p>Name: {this.state.bussinessReviews.name}</p>
            <p>Address: {this.state.bussinessReviews.location.address}</p>
            <p>cuisines: {this.state.bussinessReviews.cuisines}</p>
            <p>
              AvgCostForTwo:
              {this.state.bussinessReviews.average_cost_for_two}
            </p>
            <p>
              UserAggrigateRating:
              {this.state.bussinessReviews.user_rating.aggregate_rating}
            </p>
            <p>
              Rating Text:
              {this.state.bussinessReviews.user_rating.rating_text}
            </p>
            <p>
              Rating Text:
              {this.state.bussinessReviews.user_rating.rating_text}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseOther}>
              Cancle
            </Button>
            <Button variant="primary">Confirm and subscribe</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    let cardsWithOutPopUps = null;
    if (this.props.type == "pop-up") {
      return cardWithPoPUp;
    } else {
      const data_source_name = this.props.name.toLowerCase();
      switch (data_source_name) {
        case CONSTANTS.GOOGLE:
          cardsWithOutPopUps = (
            <div className="col-md-2 col-sm-3 col-xs-6">
              <Card className="myCard" style={{ width: "auto" }}>
                <Card.Body>
                  <Card.Title>{this.props.name}</Card.Title>
                  <img src={`../images/${this.props.logo}`} />
                </Card.Body>
              </Card>
            </div>
          );
          break;
        case CONSTANTS.FACEBOOK:
          cardsWithOutPopUps = (
            <div className="col-md-2 col-sm-3 col-xs-6">
              <FacebookLogin
                appId={CONSTANTS.FACEBOOK_APP_ID}
                callback={this.responseFacebook.bind(this)}
                scope="pages_show_list,pages_read_engagement,pages_read_user_content,pages_manage_posts"
                render={(renderProps) => (
                  <Card
                    className="myCard"
                    style={{ width: "auto" }}
                    onClick={renderProps.onClick}
                  >
                    <Card.Body>
                      <Card.Title>{this.props.name}</Card.Title>
                      <img src={`../images/${this.props.logo}`} />
                    </Card.Body>
                  </Card>
                )}
              />
            </div>
          );
          break;
      }
      return cardsWithOutPopUps;
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

export default connect(mapStateToProps, mapDispatchToProps)(IntregationCards);
