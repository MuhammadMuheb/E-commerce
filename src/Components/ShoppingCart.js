import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function AddItemCart() {
  const {
    items,
    isEmpty,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const navigate = useNavigate();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  // Calculate total price manually
  const manualCartTotal = items.reduce((total, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : parseFloat(item.price) || 0;
    const quantity = item.quantity || 0;
    return total + price * quantity;
  }, 0);

  const safeCartTotal = manualCartTotal || 0;

  return (
    <section className="py-5">
      <div className="row">
        <div className="col-md-10">
          <div className="shadow-lg">
            <div className="card-body">
              <table className="table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    const price = typeof item.price === 'string' 
                      ? parseFloat(item.price.replace('$', '')) 
                      : parseFloat(item.price) || 0;
                    const quantity = parseInt(item.quantity, 10) || 0;

                    return (
                      <tr key={index}>
                        <td>
                          <div className="d-flex">
                            <img
                              src={`/images/${item.image}` || ""}
                              className="img-thumbnail"
                              style={{ height: "4rem", width: "4rem" }}
                              alt="Product"
                              onClick={() =>
                                navigate(`/product/${item.id}`, {
                                  state: { product: item },
                                })
                              }
                            />
                            <p className="mb-0">{item.title}</p>
                          </div>
                        </td>
                        <td>${price.toFixed(2)}</td>
                        <td>
                          <div className="d-flex">
                            <button
                              className="minus"
                              onClick={() =>
                                updateItemQuantity(item.id, quantity - 1)
                              }
                              disabled={quantity <= 1}
                            >
                              -
                            </button>
                            <span className="quantitys">{quantity}</span>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, quantity + 1)
                              }
                              className="plus"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            className="btn-sm"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="empty_btn">
              <button
                className="btn-sm me-2"
                onClick={() => navigate("/men-fashion")} // Navigate to the shop page
              >
                Return To Shop
              </button>
              <button className="btn-sm me-2" onClick={() => emptyCart()}>
                Empty Cart
              </button>
            </div>
            <div className="card-footer">
              <div className="align-items-center">
                <h1>Cart Total</h1>
                <h5 className="mb-0">
                  Subtotal: <span>${safeCartTotal.toFixed(2)}</span>
                </h5>
                <h5 className="mb-0">Shipping: <span>Free</span></h5>
                <h5 className="mb-0">
                  Total: <span>${safeCartTotal.toFixed(2)}</span>
                </h5>
                <div>
                  <button
                    className="btn-sm"
                    onClick={() => {
                      localStorage.setItem("cartData", JSON.stringify({ items, safeCartTotal }));
                      navigate("/ProceedToCheckout");
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
