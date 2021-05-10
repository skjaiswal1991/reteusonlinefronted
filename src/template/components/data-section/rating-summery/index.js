import React from "react";

import "./index.css";
export default function RatingSummeryBar(props) {
  return (
    <div className="rating-summary">
      <h4 className="text-center mb-3 alt-font">Rating Summary</h4>
      <div className="row">
        <div className="col-md-3">
          <p>Location</p>
        </div>
        <div className="col-md-6">
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
        <div className="col-md-3">
          <p>{`${props.lavel} (${props.ratio})`}</p>
        </div>
        <div className="col-md-3">
          <p>{props.term}</p>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary show-more-rating-btn alt-font"
      >
        Show More
      </button>
    </div>
  );
}
