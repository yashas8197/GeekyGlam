import { addAmount } from "@/utils/checkoutSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const OrderSummary = ({ cartItems: propCartItems }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  let deliveryFee = 0;
  const checkoutData = useSelector((state) => state.checkout.checkoutData);
  let cartProducts = [];
  if (propCartItems === undefined || propCartItems === null) {
    cartProducts = location.state;
  } else if (!location.state) {
    cartProducts = propCartItems;
  } else {
    cartProducts = [];
  }
  const total =
    cartProducts?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) ||
    [];

  if (checkoutData.deliveryMethod === "Same Day Delivery") {
    deliveryFee = 100;
  } else if (checkoutData.deliveryMethod === "Standard Delivery") {
    deliveryFee = 50;
  } else if (checkoutData.deliveryMethod === "USPS Next Day") {
    deliveryFee = 75;
  } else if (checkoutData.deliveryMethod === "Free Shipping") {
    deliveryFee = 0;
  }
  useEffect(() => {
    dispatch(addAmount(total + 100 + deliveryFee));
  }, []);

  return (
    <div>
      {cartProducts?.length > 0 && (
        <div className="p-5" style={{ backgroundColor: "#F8F9FB" }}>
          <h4 className="">ORDER SUMMARY</h4>
          <p className="text-xs my-4 text-gray-400">
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
          <div>
            {cartProducts.map((item) => (
              <div key={item._id}>
                <div>
                  <div className="flex justify-between">
                    <p>
                      {item.title}({item.quantity})
                    </p>
                    <p>₹{item.price}</p>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>₹100</p>
            </div>
            <hr className="my-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr className="my-2" />
          </div>

          <div className="flex justify-between text-xl">
            <p>Total: </p>
            <p>₹{total + 100 + deliveryFee}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
