import React, { useEffect, useState } from "react";
import "../index.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const [wishlistData, setWishlistData] = useState([]);
  const [justForYouData, setJustForYouData] = useState([]);

  // Fetch data from JSON endpoints
  useEffect(() => {
    // Fetch wishlist data
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/exploreourproducts.json")
    .then((response) =>{
      response.json().then((result) => {
        setWishlistData(result);
      })
    }) 

    // Fetch "Just For You" data
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/flashsales.json")
    .then((response) =>{
      response.json().then((result) => {
        setJustForYouData(result);
      })
    }) 
  }, []);

  return (
    <div className="wishlist-container">
      <h2>Wishlist ({wishlistData.length})</h2>
      <button className="move-all-btn">Move All To Bag</button>
      <div className="wishlist-items">
        {wishlistData.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}%</span>}
              <img
                src={`/images/${item.image}` || ""}
                alt={item.title}
                className="item-image"
                onClick={() =>
                  navigate(`/product/${item.id}`, {
                    state: { product: item },
                  })
                }
              />
              <button className="add-to-cart-btn" onClick={() => addItem(item)}>
                Add to Cart
              </button>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>
                ${item.price}{" "}
                {item.originalPrice && <span className="original-price">${item.originalPrice}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="just">Just For You</h2>
      <div className="see-all-container">
        <button className="see-all-btn">See All</button>
      </div>
      <div className="just-for-you-items">
        {justForYouData.map((item) => (
          <div key={item.id} className="just-for-you-item">
            <div className="wishlist-item-actions">
              {item.discount && <span className="discount">-{item.discount}</span>}
              <img
                src={`/images/${item.image}` || ""}
                alt={item.title}
                className="item-image item-img"
                onClick={() =>
                  navigate(`/product/${item.id}`, {
                    state: { product: item },
                  })
                }
              />
              <button className="add-to-cart-btn" onClick={() => addItem(item)}>
                Add to Cart
              </button>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              {item.rating && (
                <span className="rating">
                  <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>{" "}
                  <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>{" "}
                  <i className="fa-solid fa-star"></i> {item.rating}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
