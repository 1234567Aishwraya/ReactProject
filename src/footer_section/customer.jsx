import React from "react";
import  "./review.css";
import { Link } from "react-router-dom";
import img from "../images/review.jpg";
const CustomerReviews = () => {
  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      <Link to="/">
      <img src={img} alt="Customer Reviews" className="reviews-image" />
      </Link>
    </div>
  );
};

export default CustomerReviews;
