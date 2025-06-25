import React from "react";
import "../index.css";
import phoneImage from "./image/side-image.png"; // Replace with your image path

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Image Section */}
      <div className="image-section">
        <img src={phoneImage} alt="Phone and Shopping Cart" />
      </div>

      {/* Log In Form Section */}
      <div className="form-section">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form>
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
