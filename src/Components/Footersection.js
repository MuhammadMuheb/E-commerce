import React from "react";
import "../index.css";
import googlePlayImage from "./image/GooglePlay.png";
import qrCodeImage from "./image/qr-code.png"; 
import appStoreImage from "./image/download-appstore.png";

function Footer() {
  return (
    <footer className="footer_1">
      <div className="footer_container">
        <div className="footer_section">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className="subscribe_btn" aria-label="Send Email">
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>

        <div className="footer_section">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer_section">
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div className="footer_section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer_section">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="qr_codes">
            <img src={qrCodeImage} alt="QR Code for downloading the app" />
            <div className="app_buttons">
              <a href="#">
                <img src={googlePlayImage} alt="Get it on Google Play" />
              </a>
              <a href="#">
                <img src={appStoreImage} alt="Download on the App Store" />
              </a>
            </div>
          </div>
          <div className="social_icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; Copyright Rimel 2025. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
