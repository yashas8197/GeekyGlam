import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addDeliveryFee, addInfo } from "@/utils/checkoutSlice";

const DeliveryOptions = ({ goToNextTab }) => {
  const dispatch = useDispatch();
  const { checkoutData } = useSelector((state) => state.checkout);
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

  const handleClick = () => {
    if (deliveryMethod !== "") {
      dispatch(addDeliveryFee(deliveryFee));
      dispatch(addInfo({ deliveryMethod }));
      goToNextTab();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 py-10">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="delivery"
            className="mt-1"
            value="USPS Next Day"
            onChange={(e) => setDeliveryMethod(e.target.value)}
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
            onChange={(e) => setDeliveryMethod(e.target.value)}
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
            onChange={(e) => setDeliveryMethod(e.target.value)}
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
      <div className="flex justify-between items-center pb-10">
        <p className="text-gray-500 uppercase tracking-wider text-xs">
          back to the address
        </p>
        <Button onClick={handleClick} className="tracking-widest uppercase">
          Choose Delevery method
        </Button>
      </div>
    </div>
  );
};

export default DeliveryOptions;
