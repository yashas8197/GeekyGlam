import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "@/utils/checkoutSlice";

const PaymentMethod = ({ goToNextTab }) => {
  const [openItems, setOpenItems] = useState({ razorpay: true });
  const [selectedPayment, setSelectedPayment] = useState("");
  const dispatch = useDispatch();

  const handleClick = (item) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handlePaymentChange = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const orderOverview = () => {
    if (selectedPayment !== "") {
      dispatch(addInfo({ selectedPayment }));
      goToNextTab();
    }
  };

  return (
    <div className="my-10">
      <div className="w-full mx-auto mt-4 bg-gray-50  p-4 cursor-pointer">
        <span
          onClick={() => handleClick("razorpay")}
          className="uppercase font-semibold  tracking-wide hover:underline"
        >
          razorpay
        </span>

        <div
          className={`${
            openItems["razorpay"] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="py-5">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="razorpay"
                checked={selectedPayment === "razorpay"}
                onChange={() => handlePaymentChange("razorpay")}
                className="mr-2"
              />
              <span className="uppercase font-semibold text-sm tracking-widest">
                Pay with Razorpay
                <p className="font-thin text-xs lowercase mt-1 text-gray-400">
                  Secure and fast payment through Razorpay.
                </p>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto mt-4 bg-gray-50  p-4 cursor-pointer">
        <span
          onClick={() => handleClick("pay")}
          className="uppercase font-semibold  tracking-wide hover:underline"
        >
          Pay on delivery
        </span>

        <div
          className={`${
            openItems["pay"] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="py-5 bg-white">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="pay"
                checked={selectedPayment === "pay"}
                onChange={() => handlePaymentChange("pay")}
                className="mr-2"
              />
              <span className="uppercase font-semibold text-sm tracking-widest">
                Pay on delivery
                <p className=" font-thin text-xs lowercase mt-1 text-gray-400">
                  You can pay when the order is delivered to your doorstep.
                </p>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <p className="uppercase tracking-widest text-xs text-gray-400">
          back to the delivery method
        </p>
        <Button onClick={orderOverview} className="uppercase">
          continue to order overview
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;
