import React, { useState } from "react";
import "../index.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <div className="contact-card card1">
          <h3>
            <span className="icon">📞</span> Call To Us
          </h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +880611122222</p>
        </div>
        <div className="contact-card card2">
          <h3>
            <span className="icon">✉️</span> Write To Us
          </h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
            <input type="text" placeholder="Your Phone *" required />
          </div>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
