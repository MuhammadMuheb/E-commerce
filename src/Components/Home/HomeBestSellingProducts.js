import React, { useState, useEffect } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export default function BestSellingProducts({ title }) {
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(4);
  const [bestselling, setBestselling] = useState([]);

  // Fetch Flash Sales Data
   // Fetch Flash Sales Data
   useEffect(()=>{
     fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/bestsellingproducts.json")
     .then((response) =>{
       response.json().then((result) => {
         setBestselling(result);
       })
     })
   });

  const handleViewMore = () => {
    if (bestselling.length > 0) {
      setViewCount(bestselling.length);
    }
  };

  const handleClose = () => {
    setViewCount(4);
  };

  return (
    <div className="best-selling-products">
      <div className="header">
        <h4>This Month</h4>
        <h2>{title || "Best Selling Products"}</h2>
        {viewCount < bestselling.length ? (
          <div>
            <button className="view-all-button" onClick={handleViewMore}>
              View All
            </button>
          </div>
        ) : (
          <div>
            <button className="view-all-button" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>

      <div className="product-grid">
        {bestselling.length > 0 ? (
          bestselling.slice(0, viewCount).map((product, index) => (
            <div className="product-card" key={index}>
              <div
                className="product-image"
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product: product } })
                }
              >
                <div className="actions">
                  <button className="likebtn">♥</button>
                  <button className="eyebtn">👁</button>
                </div>
                <img src={`/images/${product.image}` || ""} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p className="price">
                ${product.price} <span className="old-price">${product.oldPrice}</span>
              </p>
              <div className="productstars">
                <span>★★★★★</span>
                <span className="rating-percentage">({product.reviews} reviews)</span>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
