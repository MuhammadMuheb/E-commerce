import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import BillingDetails from "./billingdetails";

export default function BuyNow() {
  const location = useLocation();
  const product = location.state?.product;


  const [cartData, setCartData] = useState({ items: [], total: 0 });

  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem( cartData ));
    if (savedCartData) {
      const calculatedTotal = savedCartData.items.reduce((acc, item) => {
        return acc + parseFloat(item.price) * item.quantity;
      }, 0);
      setCartData({
        items: savedCartData.items || [],
        total: calculatedTotal,
      });
    }
  }, []);

 
  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <section className="checkout-page">
      <div className="container">
        {/* Billing Details */}
        <BillingDetails />

        {/* Order Summary */}
        <div className="order-summary">
          <ul>
            <li className="order-item">
              <span className="orderitemimg">
                <img src={`/images/${product.image}` || ""} alt={product.title} />
              </span>
              <span className="orderitemtitle">{product.title}</span>
              <span className="orderitemprice">
                ${isNaN(parseFloat(product.price)) ? 0.00 : parseFloat(product.price).toFixed(2)}
              </span>
            </li>
            <li className="subtotal">
              <span>Subtotal</span>
              <span>${parseFloat(product.price).toFixed(2)}</span>
            </li>
            <li className="shipping">
              <span>Shipping</span>
              <span>Free</span>
            </li>
            <li className="total">
              <strong>Total</strong>
              <strong>${parseFloat(product.price).toFixed(2)}</strong>
            </li>
          </ul>

          {/* Payment Options */}
          <div className="radio-container">
            <div className="radio-wrapper">
              <label className="radio-button">
                <input id="option1" name="paymentMethod" type="radio" value="Bank" />
                <span className="radio-checkmark"></span>
                <span className="radio-label">Bank</span>
              </label>
            </div>
            <div className="radio-wrapper">
              <label className="radio-button">
                <input id="option2" name="paymentMethod" type="radio" value="Cash on delivery" />
                <span className="radio-checkmark"></span>
                <span className="radio-label">Cash on delivery</span>
              </label>
            </div>
          </div>

          {/* Place Order */}
          <form>
            <button type="submit" className="place-order">Place Order</button>
          </form>
        </div>
      </div>
    </section>
  );
}
