import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";
import "./footerlinks.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Our Services Section */}
          <div>
            <h3>Our Services</h3>
            <ul>
               <li><Link to="/reservations">Hotel Reservations</Link></li>
               <li><Link to="/exclusive">Exclusive Deals</Link></li>
               <li><Link to="/travel">Travel Assistance</Link></li>
            </ul>

          </div>

          {/* About Us Section */}
          <div>
            <h3>About Us</h3>
            <ul>
            <li><Link to="/whoweare">Who We Are</Link></li>
            <li><Link to="/ourmission">Our Mission</Link></li>
            <li><Link to="/customer">Customer Reviews</Link></li>

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3>Contact</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3>Newsletter</h3>
            <div className="newsletter">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <FaWhatsapp className="icon whatsapp" />
              <FaYoutube className="icon youtube" />
              <FaFacebookF className="icon facebook" />
              <FaInstagram className="icon instagram" />
              <FaTwitter className="icon twitter" />
            </div>

            <p>Customer Support: +91 9998887700</p>
            <p>Email: bookings@hotelheaven.com</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 YourHotelBooking.com | Your Trusted Hotel Booking Platform</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/conditions">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/refund">Cancellation & Refund Policy</Link>
            <Link to="/delivary">Shipping & Delivery Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
