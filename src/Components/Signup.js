import React from "react";
import "../index.css";
import phoneImage from "./image/side-image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="image-section">
        <img src={phoneImage} alt="Phone and Shopping Cart" />
      </div>

      <div className="form-section">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form>
          <input type="text" placeholder="Name" className="form-input" />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="form-input"
            autoComplete="username"
          />

          <input
            type="password"
            placeholder="Password"
            className="form-input"
            autoComplete="current-password"
          />
          <button type="submit" className="create-account-button">
            Create Account
          </button>
          <button type="button" className="google-signup-button">
          <FontAwesomeIcon className="icon" icon={faGoogle}/> 
           Sign up with Google
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/Login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
