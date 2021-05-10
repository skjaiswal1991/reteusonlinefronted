import { func } from "prop-types";
import React, { useState } from "react";
import "./index.css";
function saveReview(e, name, comment) {
  e.preventDefault();
  console.log("handle here", name, comment);
}

export default function RiveiwForm(props) {
  const [comment, typeComment] = useState(null);
  const [name, changeName] = useState(null);
  return (
    <form
      onSubmit={(e) => {
        saveReview(e, name, comment);
      }}
    >
    <div className="row">
      <div className="col-md-6">
      <div className="user-login-form mt-4">
        <h4 className="alt-font">Additional Comments</h4>
        <div className="form-group">
          <input
            type="text"
            className="form-control effects"
            placeholder="Additional Comments"
            onInput={(e) => {
              typeComment(e.target.value);
            }}
          />
        </div>
      </div>
      </div>

      <div className="col-md-6">
      <div className="user-login-form mt-4">
        <h4 className="alt-font">Your Name</h4>
        <div className="form-group">
          <input
            type="text"
            className="form-control effects"
            placeholder="Your Name"
            onInput={(e) => {
              changeName(e.target.value);
            }}
          />
        </div>
      </div>
      </div>

      <div className="col-md-12">
      <div className="user-login-form mt-4">
        <div className="form-group text-center">
          <input type="submit" className="form-control submit-btn effects" placeholder="Your Name"/>
        </div>
      </div>
      </div>
      </div>
    </form>
  );
}
