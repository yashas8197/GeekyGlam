import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addDeliveryFee, addInfo } from "@/utils/checkoutSlice";
import { Link } from "react-router-dom";

const DeliveryOptions = ({ goToNextTab }) => {
  const dispatch = useDispatch();
  const [deliveryMethod, setDeliveryMethod] = useState("");
  let deliveryFee = 0;

  if (deliveryMethod === "Same Day Delivery") {
    deliveryFee = 100;
  } else if (deliveryMethod === "Standard Delivery") {
    deliveryFee = 50;
  } else if (deliveryMethod === "USPS Next Day") {
    deliveryFee = 75;
  } else if (deliveryMethod === "Free Shipping") {
    deliveryFee = 0;
  }

  const handleDeliveryMethod = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleClick = () => {
    if (deliveryMethod !== "") {
      dispatch(addInfo({ deliveryMethod }));
      dispatch(addDeliveryFee(deliveryFee));
      goToNextTab();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 container">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="delivery"
            className="mt-1"
            value="USPS Next Day"
            onChange={(e) => handleDeliveryMethod(e)}
          />
          <div>
            <span className="font-medium uppercase tracking-wider">
              USPS Next Day
            </span>
            <p className="text-gray-500 text-xs">
              Get it right on next day - fastest option possible.
            </p>
          </div>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="delivery"
            className="mt-1"
            value="Standard Delivery"
            onChange={(e) => handleDeliveryMethod(e)}
          />
          <div>
            <span className="font-medium uppercase tracking-wider">
              Standard Delivery
            </span>
            <p className="text-gray-500 text-xs">
              Delivered within 3-5 business days.
            </p>
          </div>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="delivery"
            className="mt-1"
            value="Free Shipping"
            onChange={(e) => setDeliveryMethod(e.target.value)}
          />
          <div>
            <span className="font-medium uppercase tracking-wider">
              Free Shipping
            </span>
            <p className="text-gray-500 text-xs">
              Delivered within 7-10 business days.
            </p>
          </div>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="delivery"
            className="mt-1"
            value="Same Day Delivery"
            onChange={(e) => handleDeliveryMethod(e)}
          />
          <div>
            <span className="font-medium uppercase tracking-wider">
              Same Day Delivery
            </span>
            <p className="text-gray-500 text-xs">
              Get it by the end of the day if ordered before noon.
            </p>
          </div>
        </label>
      </div>
      <div className="container flex flex-col sm:flex-row sm:justify-between items-center">
        <Link
          to="/cartlist"
          className="flex items-center hover:underline text-gray-500 float-left mt-4  cursor-pointer text-xs tracking-widest font-light uppercase py-2"
        >
          <i className="bi bi-chevron-left"></i>back
        </Link>
        <button
          onClick={handleClick}
          className="tracking-widest text-xs uppercase py-3 px-14 font-semibold bg-slate-800  text-white border border-none hover:opacity-80"
        >
          Choose payment method
          <span className="text-xs">
            <i className="bi bi-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default DeliveryOptions;
