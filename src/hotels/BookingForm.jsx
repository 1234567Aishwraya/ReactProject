import React from "react";
import { useLocation } from "react-router-dom";
import hotels from "./HotelList";

const BookingForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get("id"), 10);
  const hotel = hotels.find((h) => h.id === id);

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: "2rem",
  };

  const formWrapperStyle = {
    backgroundColor: "#fff",
    color:"#6a2e1f",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#008080",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  };
const handleSubmit = (e) => {
    e.preventDefault();
    alert(` Your booking at "${hotel.name}" is confirmed!`);
  };
  return (
    <div style={containerStyle}>
      {hotel ? (
        <div style={formWrapperStyle}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Book {hotel.name}
          </h2>
          <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required style={inputStyle} />
            <input type="email" placeholder="Your Email" required style={inputStyle} />
            <input type="number" placeholder="Number of Guests" required style={inputStyle} />
            <input type="date" placeholder="Check-in Date" required style={inputStyle} />
            <input type="date" placeholder="Check-out Date" required style={inputStyle} />
            <button type="submit" style={buttonStyle}>Confirm Booking</button>
          </form>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>Hotel not found</p>
      )}
    </div>
  );
};

export default BookingForm;
