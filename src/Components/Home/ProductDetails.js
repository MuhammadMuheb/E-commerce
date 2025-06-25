import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BestSellingProducts from "./HomeBestSellingProducts";
import "../../App.css";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const images =
    Array.isArray(product?.images) && product.images1.length > 0
      ? product.images.slice(0, 4)
      : [product?.image, product?.images1, product?.image, product?.images1];

  const [currentImageIndex,setCurrentImageIndex] = useState(0);

  const mainImage = images[currentImageIndex] || "/fallback-image.jpg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatPrice = (price) => {
    const num = parseFloat(price);
    return isNaN(num) ? "Price not available" : `$ ${num.toFixed(2)}`;
  };

  const handleQuantityChange = (type) => {
    if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increment") {
      setQuantity(quantity + 1);
    }
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    let filledStars = Math.round(rating);
    let emptyStars = totalStars - filledStars;
    return (
      <>
        {"★".repeat(filledStars)}{"☆".repeat(emptyStars)}
      </>
    );
  };


  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <div className="product-page">
        <button className="go-back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="product-details">
          <div className="gallery">
            <div className="main-image">

              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImage}
                  src={`/images/${mainImage}` || "/fallback-image.jpg"}
                  alt={product.title || "Product Image"}
                  className="large-img"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            <div className="thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={`/images/${image}` || "/fallback-image.jpg"}
                  className="small-img"
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    border:
                      currentImageIndex === index
                        ? "2px solid blue"
                        : "1px solid #ccc",
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="rating">
              {renderStars(product.rating)}
              <span style={{ fontSize: "12px", color: "#0000003b", marginLeft: "5px" }}>
                ({product.ratingPercentage || "No"} Reviews)
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "green",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                {product.availability}
              </span>
            </p>

            <p className="description">
              <p className="price" style={{ color: "#000", marginBottom: "10px" }}>
                {formatPrice(product.price)}
              </p>
              {product.description || "Currently, there are no details for this product."}
            </p>
            <p className="stock">
              <span style={{ marginRight: "10px" }}>Stock:</span>
              {product.stock
                ? product.stock
                : "Currently out of stock. Please check back later."}
            </p>

            <div className="colors">
              <span style={{ marginRight: "10px" }}>Colors:</span>
              {product.colors?.length > 0 ? (
                product.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      margin: "0 5px",
                      cursor: "pointer",
                      border:
                        selectedColor === color ? "3px solid black" : "2px solid #ccc",
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))
              ) : (
                <p>No colors available</p>
              )}
            </div>

            <div className="sizes">
              <span style={{ marginRight: "10px" }}>Size:</span>
              {product.sizes?.length > 0 ? (
                product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="size-button"
                    onClick={() => setSelectedSize(size)}
                    style={{
                      backgroundColor: selectedSize === size ? "blue" : "white",
                      color: selectedSize === size ? "white" : "black",
                    }}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </div>

            <div className="quantity-box">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="quantity-button-left"
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="quantity-button-right"
              >
                +
              </button>
            </div>
            <div>
              <button className="product-buy-now"
              onClick={() =>
                navigate("/buynow", { state: { product: product } })
              } >
              Buy Now
              </button>
            </div>

            <div className="delivery-info">
              <div className="info-block">
                <i className="fas fa-truck"></i>
                <div>
                  <p className="title">Free Delivery</p>
                  <a href="" className="details">
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </div>
              <div className="info-block">
                <i className="fas fa-undo"></i>
                <div>
                  <p className="title">Return Delivery</p>
                  <p className="details">
                    Free 30 Days Delivery Returns. <a href="">Details</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSellingProducts title="Related Product" />
    </>
  );
}