import React, { useState } from "react";
import "../index.css";

function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Changes Saved Successfully!");
    console.log(formData);
  };

  const handleCancel = () => {
    alert("Changes Cancelled");
  };

  return (
    <>
      <div className="welcome">
        <h3>
          Welcome! <span>Md Rime</span>
        </h3>
      </div>
      <div className="edit-profile-page">
        <div className="sidebar">
          <h3>Manage My Account</h3>
          <ul>
            <li className="active">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h3>My Orders</h3>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h3>My Wishlist</h3>
        </div>

        <div className="profile-form-container">
          <h2>Edit Your Profile</h2>
          <form>
            <div className="form-group">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="username"
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                />
              </div>
            </div>

            <h3>Password Changes</h3>
            <div className="form-group">
              <div>
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>
              <div>
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
              <div>
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
              <button type="button" onClick={handleSave} className="save-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
