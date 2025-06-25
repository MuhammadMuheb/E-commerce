import React from "react";
import "../index.css";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

export default function billingdetails() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
          alert(`${key}: ${value}`);
        }
      }

    
  return (
    <div>
      <div className="billing-details">
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input name="firstName" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input name="companyName" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="streetAddress">Street Address*</label>
              <input name="streetAddress" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
              <input name="apartment" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="city">Town/City*</label>
              <input name="city" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <input name="phoneNumber" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input name="email" type="email"required />
            </div>
            <div className="form-saveinfo">
            <Checkbox
              id="saveInfo"
              name="saveInfo"
              type="checkbox"
              defaultChecked
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
                marginRight: "1px",
                marginBottom:"20px", 
              }}
            />

              <label htmlFor="saveInfo">
                Save this information for faster checkout next time
              </label>
            </div>
          </form>
        </div>
    </div>
  )
}
