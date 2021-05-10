import React, { useRef } from "react";
import "./index.css";
import Ratings from "../../ratings";
export default function List(props) {
  return (
    <div className="compli-sec-01">
      <h4 className="alt-font">{props.message}</h4>
      <div className="row">
        <div className="col-sm-12">
          <Ratings count={props.stars} size={20}></Ratings>
        </div>
      </div>
    </div>
  );
}
