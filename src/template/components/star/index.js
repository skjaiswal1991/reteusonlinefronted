import React, { useRef } from "react";
import "./index.css";
export default function Star(props) {
  const styleObject = { fontSize: `${props.size}px` };
  const star = props.fill ? (
    <i className="fa fa-star" style={styleObject} aria-hidden="true"></i>
  ) : (
    <i className="fa fa-star-o" aria-hidden="true" style={styleObject}></i>
  );
  return <li>{star}</li>;
}
