import React from "react";
import Star from "../star";
import "./index.css";
export default function Ratings(props) {
  const rating = ratingfunction(props);
  return <ul className="star-ul">{rating}</ul>;
}
function ratingfunction({ size, count }) {
  let ratings = [];
  let remaningCount = 5 - parseInt(count);
  for (let i = 0; i < count; i++) {
    ratings.push(<Star key={Math.random()} size={size} fill={true}></Star>);
  }
  for (let i = 0; i < remaningCount; i++) {
    ratings.push(<Star key={Math.random()} size={size} fill={false}></Star>);
  }
  return ratings;
}
