import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom"; 
import cardData from "./cards";  
import "./cards.css";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="featured-card">Luxury Hotels</h2>
      <div className="section-container">
        {cardData.map((card) => (
          <Card key={card.id} className="card">
            <img src={card.image} alt={card.title} className="img-container" />
            <h3>{card.title}</h3>
            <p>{card.location}</p>
            <div className="price-booking">
              <p className="price">₹{card.price}</p>
              <Button
                className="book-button"
                onClick={() => navigate(`/bookcard?id=${card.id}`)} 
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
