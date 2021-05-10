import React, { Component } from "react";
import "./bussiness-listing.css";
import { Route, NavLink, Link } from "react-router-dom";

export default class EmptyState extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="empty-state">
        <div className="empty-state__inner toheight-1">
          <p>sndfjks</p>
        </div>
      </div>
    );
  }
}
