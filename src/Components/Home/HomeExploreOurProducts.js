import React, { useState, useEffect } from "react";
import "../../App.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function ExploreOurProducts() {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const [exploreourproducts, setExploreourproducts] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [hoverRatings, setHoverRatings] = useState([]);
  const [ExploreIndex, setExploreIndex] = useState(0);
  const [viewCount, setViewCount] = useState(4);

  useEffect(() => {
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/exploreourproducts.json")
      .then((response) => response.json())
      .then((result) => {
        const exploreArray = Array.isArray(result) ? result : Object.values(result || {});
        setExploreourproducts(exploreArray);
        setRatings(new Array(exploreArray.length).fill(0));
        setHoverRatings(new Array(exploreArray.length).fill(-1));
      });
  }, []);

  const handlePrev = () => {
    if (viewCount === 4) {
      setExploreIndex((prevIndex) =>
        prevIndex === 0
          ? Math.max(exploreourproducts.length - 4, 0)
          : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (viewCount === 4) {
      setExploreIndex((prevIndex) =>
        prevIndex >= exploreourproducts.length - 4 ? 0 : prevIndex + 1
      );
    }
  };

  const handleViewMore = () => {
    setViewCount(exploreourproducts.length);
  };

  const handleClose = () => {
    setViewCount(4);
  };

  const getLabelText = (value) => `${value} Star${value !== 1 ? "s" : ""}`;

  return (
    <div className="ExploreOurProducts">
      <div className="Explore_header">
        <h1>Our Products</h1>
        <h2>Explore Our Products</h2>
      </div>

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

      <div className="slider-container">
        <div className="slider">
          {exploreourproducts
            .slice(viewCount === 4 ? ExploreIndex : 0, viewCount === 4 ? ExploreIndex + 4 : viewCount)
            .map((item, index) => (
              <div key={item.id} className="card explorecard">
                {item.isNew && <span className="new">New</span>}
                <img
                  src={`/images/${item.image}`}
                  alt={item.title}
                  className="product-image"
                  onClick={() =>
                    navigate(`/product/${item.id}`, {
                      state: { product: item },
                    })
                  }
                />

                <h3>{item.title}</h3>
                <p className="price">
                  <span>${item.price}</span>
                </p>

                <div className="stars">
                  <Rating
                    name={`hover-feedback-${index}`}
                    value={ratings[index]}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      const newRatings = [...ratings];
                      newRatings[index] = newValue;
                      setRatings(newRatings);
                    }}
                    onChangeActive={(event, newHover) => {
                      const newHoverRatings = [...hoverRatings];
                      newHoverRatings[index] = newHover;
                      setHoverRatings(newHoverRatings);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <span className="rating-percentage">
                    ({item.ratingPercentage})
                  </span>
                </div>

                <div className="button-container">
                  <button className="btn add-to-cart" onClick={() => addItem(item)}>
                    Add to cart
                  </button>
                  <button className="btn buy-now" onClick={() => navigate("/buynow", { state: { product: item } })}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="view-all-products-container">
          <div className="ViewallProducts">
            {viewCount < exploreourproducts.length ? (
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
