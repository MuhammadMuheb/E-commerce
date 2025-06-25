import React, { useState, useEffect } from "react";
import "../../App.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function HomeSidebarCategories() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState([]);

  // Fetch slider data from Firebase
  useEffect(() => {
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/slides.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSlider(data);
        }
      })
      .catch((error) => console.error("Slider fetch error:", error));
  }, []);

  // Auto slider change
  useEffect(() => {
    if (slider.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slider.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slider]);

  // Dot click change handler
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slider[currentIndex];

  return (
    <div className="home-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Banner */}
      {currentSlide && (
        <div className="main-banner">
          <div className="banner-content">
            <img
              src={`/images/${currentSlide.logo}`}
              alt="Logo"
              className="apple-logo"
            />
            <h2>{currentSlide.title}</h2>
            <p>
              Up to {currentSlide.discount}% <br /> off Voucher
            </p>
            <a href="/Electronics" className="shop-now-btn">
              Shop Now <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <img
            src={`/images/${currentSlide.image}`}
            alt={currentSlide.title}
            className="banner-image"
            onClick={() =>
              navigate(`/product/${currentSlide.id}`, {
                state: { product: currentSlide },
              })
            }
          />

          {/* Dots Navigation */}
          <div className="dots">
            {slider.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
