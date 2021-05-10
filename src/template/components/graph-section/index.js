import { func } from "prop-types";
import React from "react";
import LineGraph from "./line-graph";
import ColomnGraph  from './column-graph'
import DoughnutGraph from "./dounut-graph";
import "./index.css";
export default function GraphDataSection(props) {
  return (
    <section className="total-online-review" id="section-05">
      <div className="total-online-review-inner no-padding">
      <p className="common-heading">
              RateUsOnline Rating Index based on 260 reviews accross the web{" "}
            </p>
        <div className="row p-4">
          {/* <div className="col-md-3">
            <h4 className="alt-font">Total Online Review</h4>
            <div className="rating">
              <div className="row">
                <div className="col-md-3 rating-text">
                  5 <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="col-md-7">
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-2 rating-text">777</div>
              </div>

              <div className="row mt-2">
                <div className="col-md-3 rating-text">
                  4 <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="col-md-7">
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-2 rating-text">777</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3 rating-text">
                  3 <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="col-md-7">
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-sm-2 rating-text">550</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3 rating-text">
                  2 <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="col-md-7">
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-sm-2 rating-text">350</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-3 rating-text">
                  1 <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="col-md-7">
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="8"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="col-md-2 rating-text">350</div>
              </div>
              <button
                type="button"
                className="btn btn-info alt-font mt-3 share-btn"
              >
                <i className="fa fa-share-alt" aria-hidden="true"></i> Share
                Link
              </button>
            </div>
          </div> */}
          <div className="col-md-3">
            <div style={{width: '100%',height: '400px',justifyContent: 'center',display: 'flex',alignItems: 'center',border: '1px solid gray'}}>
              <div>4</div>
              
            </div>
          </div>
          <div className="col-md-5">
            <ColomnGraph></ColomnGraph>
          </div>
            <div className="col-md-4">
            <DoughnutGraph></DoughnutGraph>
          </div>
        </div>
      </div>
    </section>
  );
}
