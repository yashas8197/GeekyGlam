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
        <h1 className="text-7xl font-bold my-4 uppercase tracking-widest">
          checkout
        </h1>
        <p className="text-xl text-gray-400 font-light">{message}</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 px-16">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="col-span-2 mx-auto"
        >
          <TabsList>
            <TabsTrigger value="address" className="uppercase w-1/4">
              address
            </TabsTrigger>
            <TabsTrigger value="delivery" className="uppercase">
              delivery method
            </TabsTrigger>
            <TabsTrigger value="payment" className="uppercase">
              Payment Method
            </TabsTrigger>
            <TabsTrigger value="order" className="uppercase">
              order review
            </TabsTrigger>
          </TabsList>
          <TabsContent value="address">
            <BillingAddressForm goToNextTab={() => setActiveTab("delivery")} />
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
        <div>
          <OrderSummary />
        </div>
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default Checkout;
