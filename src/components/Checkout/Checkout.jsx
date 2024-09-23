import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import BillingAddressForm from "../BillingAddressForm/BillingAddressForm";
import OrderReview from "../OrderReview/OrderReview";
import OrderSummary from "../OrderSummary/OrderSummary";
import ServiceHighlights from "../ServiceHighlights/ServiceHighlights";

const Checkout = () => {
  const [activeTab, setActiveTab] = useState("address");

  const infoNeeded = {
    address: "Please fill in your address.",
    delivery: "Choose your delivery method.",
    payment: "Choose the payment method.",
    order: "Please review your order.",
  };

  const message = infoNeeded[activeTab];
  return (
    <div className="mt-5">
      <div className="text-center pt-20 pb-10">
        <small>
          <Link to="/" className="mx-2">
            Home
          </Link>
          /<span className="text-gray-400 mx-2">Checkout</span>
        </small>
        <h1 className="sm:text-7xl text-4xl font-semibold my-4 uppercase tracking-widest">
          checkout
        </h1>
        <p className="text-xl text-gray-400 font-light">{message}</p>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-12 sm:px-16">
        <div className=" col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="sm:inline-flex grid grid-flow-row sm:bg-[#F8F9FB] sm:m-0 mb-56 justify-center ">
              <TabsTrigger
                value="address"
                className="uppercase sm:whitespace-nowrap whitespace-normal 2xl:px-16 md:px-8  px-10"
              >
                address
              </TabsTrigger>
              <TabsTrigger
                value="delivery"
                className="uppercase sm:whitespace-nowrap whitespace-normal 2xl:px-16 md:px-8  px-10"
              >
                delivery method
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="uppercase sm:whitespace-nowrap whitespace-normal 2xl:px-16 md:px-8  px-10"
              >
                Payment Method
              </TabsTrigger>
              <TabsTrigger
                value="order"
                className="uppercase sm:whitespace-nowrap whitespace-normal 2xl:px-16 md:px-8  px-10"
              >
                order review
              </TabsTrigger>
            </TabsList>
            <TabsContent value="address">
              <BillingAddressForm
                goToNextTab={() => setActiveTab("delivery")}
              />
            </TabsContent>
            <TabsContent value="delivery">
              <DeliveryOptions goToNextTab={() => setActiveTab("payment")} />
            </TabsContent>
            <TabsContent value="payment">
              <PaymentMethod goToNextTab={() => setActiveTab("order")} />
            </TabsContent>
            <TabsContent value="order">
              <OrderReview />
            </TabsContent>
          </Tabs>
        </div>
        <div className="col-span-4 sm:ml-10 m-4">
          <OrderSummary />
        </div>
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default Checkout;
