import React, { useEffect, useState } from "react";
import "../index.css";
import BillingDetails from "./billingdetails";


export default function CheckoutPage() {
  
  const [cartData, setCartData] = useState({ items: [], total: 0 });

  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem("cartData"));
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

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
      alert(`${key}: ${value}`);
    }
  }
  const [paymentMethod, setPaymentMethod] = useState("");

  function handlePaymentChange(event) {
    setPaymentMethod(event.target.value);
  }
  
  return (
    <section className="checkout-page">
      <div className="container">
        {/* Billing Details */}
        <BillingDetails/>

        {/* Order Summary */}
        <div className="order-summary">
          <ul>
            {cartData.items.map((item, index) => (
              <li key={index} className=" order-item">
                <span className="orderitemimg"><img src={`/images/${item.image}` || ""} alt={item.title}/></span>
                <span className="orderitemtitle">{item.title}</span>
                <span className="orderitemprice">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
              </li>
            ))}
            <li className="subtotal">
              <span>Subtotal</span>
              <span>${cartData.total.toFixed(2)}</span>
            </li>
            <li className="shipping">
              <span>Shipping</span>
              <span>Free</span>
            </li>
            <li className="total">
              <strong>Total</strong>
              <strong>${cartData.total.toFixed(2)}</strong>
            </li>
          </ul>
          <div className="radio-container">
            <div className="radio-wrapper">
              <label className="radio-button">
                <input id="option1" name="paymentMethod" type="radio" value="Bank" onChange={handlePaymentChange}/>
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

          <div className="coupon-code">
            <input name="couponCode" type="text" placeholder="Coupon Code" />
            <button type="button">Apply Coupon</button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* All form fields */}
            <button type="submit" className="place-order">Place Order</button>
          </form>        
        </div>
      </div>
    </section>
  );
}
