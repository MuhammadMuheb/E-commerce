import React, { useState, useEffect } from "react";
import "../../App.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

export default function FlashSales() {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const [flashsales, setFlashsales] = useState([]);

  // Fetch Flash Sales Data
  useEffect(() => {
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/flashsales.json")
      .then((response) => response.json())
      .then((result) => {
        const flashArray = Object.values(result || {});
        setFlashsales(flashArray);
      });
  }, []);
  

  // Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0)
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Slider States
  const [flashIndex, setFlashIndex] = useState(0);
  const [viewCount, setViewCount] = useState(4);

  // Navigation Handlers
  const handlePrev = () => {
    if (flashsales.length > 4) {
      setFlashIndex((prevIndex) =>
        prevIndex === 0 ? Math.max(flashsales.length - 4, 0) : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (flashsales.length > 4) {
      setFlashIndex((prevIndex) =>
        prevIndex >= flashsales.length - 4 ? 0 : prevIndex + 1
      );
    }
  };

  const handleViewMore = () => setViewCount(flashsales.length);
  const handleClose = () => setViewCount(4);
  return (
    <div className="flash-sales">
      {/* Header with Timer */}
      <div className="flash_header">
        <div className="timer-container">
          <div className="timer">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div key={unit} className="time-segment">
                <span className="time-value">{timeLeft[unit]}</span>
                {index < 3 && <span className="time-separator"></span>}
                <p className="time-label">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <h1>Today's</h1>
        <h2>Flash Sales</h2>
      </div>

      {/* Navigation Buttons */}
      {viewCount === 4 && (
        <>
          <button className="nav-btn left-btn" onClick={handlePrev}>
            {"<"}
          </button>
          <button className="nav-btn right-btn" onClick={handleNext}>
            {">"}
          </button>
        </>
      )}

      {/* Product Cards */}
      <div className="slider-container">
        <div className="slider" style={{ display: "flex", flexWrap: "wrap" }}>
          {flashsales.slice(
              viewCount === 4 ? flashIndex : 0,
              viewCount === 4 ? flashIndex + 4 : viewCount
            ).map((item) => (
              <div key={item.id} className="card explorecard">
                {item.isNew && <span className="new">New</span>}
                <img
                  src={`${process.env.PUBLIC_URL}/images/${item.image}` || ""}
                  alt={item.title}
                  onClick={() =>
                    navigate(`/product/${item.id}`, { state: { product: item } })
                  }
                />
                <h3>{item.title}</h3>
                <p className="price">
                  <span>${item.price}</span>
                </p>
                <div className="stars">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={index < item.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  <span className="rating-percentage">
                    ({item.ratingPercentage})
                  </span>
                </div>
                <div className="button-container">
                  <button
                    className="btn add-to-cart"
                    onClick={() => addItem(item)}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn buy-now"
                    onClick={() =>
                      navigate("/buynow", { state: { product: item } })
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* View All / Close Buttons */}
        <div className="view-all-products-container">
          <div className="ViewallProducts">
            {viewCount < flashsales.length ? (
              <button onClick={handleViewMore}>View All Products</button>
            ) : (
              <button onClick={handleClose}>Close</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
