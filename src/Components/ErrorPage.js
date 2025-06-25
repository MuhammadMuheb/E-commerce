import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const ErrorPage = () => {
  const navigate = useNavigate(); 

  const goHome = () => {
    navigate("/home"); 
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404 Not Found</h1>
        <p className="error-message">
          The page you are looking for does not exist. You may return to the home page or go back to your previous page.
        </p>
        <div className="button-container">
          <button className="home-button" onClick={goHome}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
