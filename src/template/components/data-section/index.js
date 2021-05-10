import React from "react";
import Ratings from "../ratings";
import DataSectionBar from "./rating-summery";
import "./index.css";
export default function DataSection(props) {
  return (
    <section className="rateusonline-rating covid-rating" id="section-04">
      <div className="total-online-review-inner no-padding">
      <h4 className="alt-font common-heading mb-2">RateUsOnline Rating</h4>
        <div className="row p-3">
          <div className="col-md-4">
            {/*  */}
            <Ratings count={4} size={28}></Ratings>
            <p className="mt-3">
              445 Reviews
              {/* trivago rating Index based on 260 reviews across the web */}
            </p>
            <button
              type="button"
              className="btn btn-primary rating-btn alt-font"
            >
              4 Start
            </button>
          </div>
          <div className="col-md-8">
            <DataSectionBar lavel={20} progress={10} ratio={2}></DataSectionBar>
          </div>
        </div>
      </div>
    </section>
  );
}
