import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "@/utils/checkoutSlice";
import { Link } from "react-router-dom";

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
    <div className="my-10 mx-4">
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
          <div className="py-5">
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

      <div className="container flex flex-col sm:flex-row sm:justify-between items-center my-10">
        <Link
          to="/cartlist"
          className="flex items-center hover:underline text-gray-500 float-left mt-4  cursor-pointer text-xs tracking-widest font-light uppercase py-2"
        >
          <i className="bi bi-chevron-left"></i>back
        </Link>
        <button
          onClick={orderOverview}
          disabled={selectedPayment === ""}
          className="tracking-widest text-xs uppercase py-3 px-6 font-semibold bg-slate-800  text-white border border-none hover:opacity-80"
        >
          continue to order overview
          <span className="text-xs">
            <i className="bi bi-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
