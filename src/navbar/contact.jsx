import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", form);
  };

  return (
    <div className="contact">
  <h2 className="contact-title">Contact Us</h2>
  <form onSubmit={handleSubmit} className="contact-form">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="contact-input"
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="contact-input"
      onChange={handleChange}
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      className="contact-textarea"
      rows="4"
      onChange={handleChange}
      required
    />
    <button type="submit" className="contact-button">
      Send Message
    </button>
  </form>
</div>

  );
};

export default Contact;
