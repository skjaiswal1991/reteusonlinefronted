import React, { Component } from "react";
import "./ReviewSettings.css";
import { Row, Col, Container, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class ReviewSettings extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: new Date(),
  };
  render() {
    return (
      <div className="empty-state">
        <section className="review-comments">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <fieldset>
                  <legend className="alt-font">Select Review Info</legend>
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Select Bussiness</Form.Label>
                          <Form.Control as="select">
                            <option>Podium</option>
                            <option>Test1</option>
                          </Form.Control>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group controlId="exampleForm.ControlSelect2">
                          <Form.Label>Select Platform</Form.Label>
                          <Form.Control as="select">
                            <option>Facebook</option>
                            <option>Google</option>
                            <option>Yelp</option>
                            <option>Booking</option>
                            <option>Zomato</option>
                          </Form.Control>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group controlId="exampleForm.ControlSelect2">
                          <Form.Label>Select Date of Review</Form.Label>
                          <DatePicker
                            className="form-control"
                            selected={new Date()}
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </Form>
                </fieldset>
              </div>

              <div className="col-md-6">
                <fieldset>
                  <legend className="alt-font">Review (62)</legend>

                  <ul className="chat-message">
                    <li className="left">
                      <img
                        src="./images/profile-01.png"
                        alt=""
                        className="profile-photo-sm pull-left"
                      />
                      <div className="chat-item">
                        <div className="chat-item-header">
                          <h5 className="alt-font">Alex Clark</h5>

                          <small className="text-muted">
                            <span>
                              <i
                                className="fa fa-star blue-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star blue-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star blue-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star gray-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star gray-star"
                                aria-hidden="true"
                              ></i>
                            </span>
                            May 15,2020
                          </small>
                          <span className="share">
                            <i className="fa fa-share" aria-hidden="true"></i>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat...More
                        </p>
                      </div>
                    </li>
                    <li className="right">
                      <img
                        src="./images/profile-01.png"
                        alt=""
                        className="profile-photo-sm pull-right"
                      />
                      <div className="chat-item">
                        <div className="chat-item-header">
                          <h5 className="alt-font">Alex Clark</h5>

                          <small className="text-muted"> May 18,2020</small>
                          <span className="share">
                            <i className="fa fa-share" aria-hidden="true"></i>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <img
                            src="./images/emoji-icon.png"
                            alt=""
                            className=""
                          />
                        </p>
                      </div>
                    </li>
                    <li className="left">
                      <img
                        src="./images/profile-01.png"
                        alt=""
                        className="profile-photo-sm pull-left"
                      />
                      <div className="chat-item">
                        <div className="chat-item-header">
                          <h5 className="alt-font">Alex Clark</h5>

                          <small className="text-muted">
                            <span>
                              <i
                                className="fa fa-star blue-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star blue-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star blue-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star gray-star"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-star gray-star"
                                aria-hidden="true"
                              ></i>
                            </span>
                            May 15,2020
                          </small>
                          <span className="share">
                            <i className="fa fa-share" aria-hidden="true"></i>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat...More
                        </p>
                      </div>
                    </li>
                    <li className="right">
                      <img
                        src="./images/profile-01.png"
                        alt=""
                        className="profile-photo-sm pull-right"
                      />
                      <div className="chat-item">
                        <div className="chat-item-header">
                          <h5 className="alt-font">Alex Clark</h5>

                          <small className="text-muted"> May 18,2020</small>
                          <span className="share">
                            <i className="fa fa-share" aria-hidden="true"></i>
                          </span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                          <img
                            src="./images/emoji-icon.png"
                            alt=""
                            className=""
                          />
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="send-message">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Post a Comment"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
