import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hotels from "./HotelList";
const HotelDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get("id"), 10);

  const hotel = hotels.find((h) => h.id === id);

  return (
    <div style={{ padding: "2rem" }}>
      {hotel ? (
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
          }}
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h2 style={{ margin: "1rem 0" }}>{hotel.name}</h2>
          <p><strong>City:</strong> {hotel.city}</p>
          <p><strong>Price:</strong> ₹{hotel.price} per night</p>
          <button
            onClick={() => navigate(`/book?id=${hotel.id}`)} 
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#6a2e1f",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              marginTop: "1rem",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>Hotel not found.</p>
      )}
    </div>
  );
};

export default HotelDetails;
