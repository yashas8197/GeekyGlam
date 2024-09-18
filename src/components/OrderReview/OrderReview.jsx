import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { addOrders } from "@/utils/orderSlice";
import axios from "axios";
import { addInfo } from "@/utils/checkoutSlice";
import { clearCart, updateCartStatus } from "@/utils/productListSlice";

const OrderReview = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { products, status, error } = useSelector((state) => state.productList);
  const { amount, checkoutData, deliveryFee } = useSelector(
    (state) => state.checkout
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const cartItems = products.filter((cart) => cart.in_cart === true);

  useEffect(() => {
    if (checkoutData.msg) {
      cartItems.forEach((item) => {
        const orderPayload = {
          image: item.image,
          title: item.title,
          description: item.description,
          category: item.category,
          size: item.size,
          original_price: item.original_price,
          price: item.price,
          delivery_time: item.delivery_time,
          quantity: item.quantity,
          payment_id: checkoutData.id,
          city: checkoutData.city,
          deliveryMethod: checkoutData.deliveryMethod,
          state: checkoutData.state,
          street: checkoutData.street,
          zip: checkoutData.zip,
          deliveryFee: deliveryFee,
        };

        dispatch(addOrders(orderPayload));
        dispatch(clearCart());
        dispatch(updateCartStatus());
      });
      if (cartItems.length > 0) {
        navigate("/confirm");
      }
    }
  }, [checkoutData.msg, orderPlaced, dispatch]);

  const razorpayHandler = () => {
    const {
      city,
      email,
      fullName,
      phoneNumber,
      state,
      street,
      zip,
      deliveryMethod,
      selectedPayment,
    } = checkoutData;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !city ||
      !state ||
      !street ||
      !zip ||
      !deliveryMethod ||
      !selectedPayment
    ) {
      toast({
        description: "Please fill all the details",
        variant: "default",
        duration: 900,
      });
    } else {
      if (selectedPayment === "pay") {
        setOrderPlaced(true);
        // dispatch(addOrders())
      } else if (selectedPayment === "razorpay") {
        setOrderPlaced(true);
        displayRazorpay();
      }
    }
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        toast({
          description: "Razorpay SDK failed to load, check you connection",
          variant: "default",
          duration: 900,
        });
        return;
      }

      const response = await axios.post(
        `https://geeky-glam-backend.vercel.app/checkout`,
        {
          amount: (amount + deliveryFee) * 100,
          currency: "INR",
        }
      );

      console.log(response.data);

      const options = {
        key: "rzp_test_MfkVTZfHL3RsJj",
        amount: response.data.order.amount * 100,
        currency: "INR",
        name: "Yashas V",
        description: "Thank you for shopping with us",
        image:
          "https://demo.bootstrapious.com/sell/2-0-1/img/photo/kyle-loftus-589739-unsplash-avatar.jpg",
        order_id: response.data.order.id,
        handler: function (response) {
          dispatch(
            addInfo({
              msg: true,
              id: response.razorpay_payment_id,
            })
          );
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      paymentObject.open();
    } catch (error) {
      console.error("Error making the request:", error);
    }
  };

  return (
    <div>
      {cartItems.length === 0 && (
        <div className="h-40">
          <p className="text-center  my-20">
            Your cart is empty. Add items to place an order!
          </p>
        </div>
      )}
      {!checkoutData.msg && (
        <div className="w-full max-w-4xl mx-auto my-10 px-4">
          <div className="grid grid-cols-12 text-center my-4 py-3 bg-gray-50 border-b border-gray-200">
            <p className="uppercase font-semibold tracking-widest col-span-6">
              Item
            </p>
            <p className="uppercase font-semibold tracking-widest col-span-2">
              Price
            </p>
            <p className="uppercase font-semibold tracking-widest col-span-2">
              Quantity
            </p>
            <p className="uppercase font-semibold tracking-widest col-span-2">
              Total
            </p>
          </div>

          <div className="cart-body">
            {cartItems.map((cart) => (
              <div key={cart._id} className="cart-item border-b py-4">
                <div className="grid grid-cols-12 items-center text-center">
                  <div className="col-span-6 flex items-center space-x-4">
                    <img
                      className="w-20 h-20 object-cover"
                      src={cart.image}
                      alt="Product"
                    />
                    <div className=" text-start">
                      <span className="text-lg font-semibold text-gray-900">
                        {cart.title}
                      </span>
                      <br />
                      <span className="text-sm text-gray-500">
                        Size: {cart.size}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2">₹{cart.price}</div>
                  <div className="col-span-2">{cart.quantity}</div>
                  <div className="col-span-2">
                    ₹{cart.price * cart.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between my-5">
            <p className="uppercase tracking-widest text-xs text-gray-400">
              back to the payment method
            </p>
            <Button onClick={razorpayHandler} className="uppercase">
              place an order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderReview;
