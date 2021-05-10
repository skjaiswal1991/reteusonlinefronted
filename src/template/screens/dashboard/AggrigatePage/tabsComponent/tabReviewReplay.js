import React, { Component } from 'react';

class TabReviewReplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="review-comments" id="section-06">
          <div className="total-online-review-inner no-padding">
          <h4 className="alt-font common-heading">Review (62)</h4>
            <div className="row p-4">
              
              <div className="col-md-6">
                <ul className="chat-message">
                  <li className="left">
                    {/* <img
                      src="./images/profile-01.png"
                      alt=""
                      className="profile-photo-sm pull-left"
                    /> */}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat...More
                      </p>
                    </div>
                  </li>
                  <li className="right">
                    {/* <img
                      src="./images/profile-01.png"
                      alt=""
                      className="profile-photo-sm pull-right"
                    /> */}
                    <div className="chat-item">
                      <div className="chat-item-header">
                        <h5 className="alt-font">Alex Clark</h5>

                        <small className="text-muted"> May 18,2020</small>
                        <span className="share">
                          <i className="fa fa-share" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        {/* <img
                          src="./images/emoji-icon.png"
                          alt=""
                          className=""
                        /> */}
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
                        Send
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-info alt-font mt-3 comments-btn"
                >
                  <i className="fa fa-share-alt" aria-hidden="true"></i> Write
                  Review
                </button>
                <div className="thumbs-icon">
                  <ul>
                    <li>
                      <a href="#">
                        {/* <img src="./images/thumbs-up.png" alt="" /> */}
                        <span className="ups">15</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {/* <img src="./images/thumbs-down.png" alt="" /> */}
                        <span className="down">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
         );
    }
}
 
export default TabReviewReplay;