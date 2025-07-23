// HotelCards.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import hotels from "./HotelList"; 


const HotelCards = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Read search params from URL
  const params = new URLSearchParams(location.search);
  const destination = params.get("destination")?.toLowerCase();

  // Filter hotels by destination
  const filteredHotels = hotels.filter((hotel) =>
    hotel.city.toLowerCase().includes(destination)
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Hotels in {destination?.charAt(0).toUpperCase() + destination?.slice(1)}
      </h2>

      {filteredHotels.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>No hotels found.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "300px",
                overflow: "hidden",
              }}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "1rem" }}>
                <h3>{hotel.name}</h3>
                <p>City: {hotel.city}</p>
                <p>Price: ₹{hotel.price} per night</p>
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#6a2e1f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/hotel-details?id=${hotel.id}`)
}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelCards;
