import {
  ChevronLeft,
  ChevronRight,
  CircleChevronRight,
  CircleMinus,
  CirclePlus,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import { useEffect } from "react";
import { updateDataApi } from "@/utils/productDetailsSlice";
import {
  incrementQuantity,
  toggleCartOptimistic,
  fetchProducts,
  decrementQuantity,
} from "@/utils/productListSlice";
import { addOrders } from "@/utils/orderSlice";
import OrderSummary from "@/components/OrderSummary/OrderSummary";

const CartList = () => {
  const { products, status, error } = useSelector((state) => state.productList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = products.filter((cart) => cart.in_cart === true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCheckout = (cartItems) => {
    navigate("/checkout", { state: cartItems });
  };

  const handleQuantityMinus = (item) => {
    if (item.quantity <= 1) return;
    dispatch(decrementQuantity(item._id));
    dispatch(
      updateDataApi({
        productId: item._id,
        field: "in_cart",
        quantity: item.quantity - 1,
      })
    );
  };

  const handleQuantityPlus = (item) => {
    dispatch(incrementQuantity(item._id));
    dispatch(
      updateDataApi({
        productId: item._id,
        field: "in_cart",
        quantity: item.quantity + 1,
      })
    );
  };

  return (
    <TooltipProvider>
      <div className="mt-6 flex flex-col flex-grow">
        <div className="">
          <div className="container text-center  pt-20 pb-10">
            <small>
              <Link to="/" className="mx-2">
                Home
              </Link>
              /<span className="text-gray-400 mx-2">Shopping cart</span>
            </small>
            <h1 className="sm:text-7xl text-3xl tracking-widest font-semibold my-4">
              SHOPPING CART
            </h1>
            <p className="text-xl text-gray-400">
              You have {cartItems.length} items in your shopping cart
            </p>
          </div>
          {cartItems.length === 0 && (
            <div className="my-12 flex justify-center">
              <Button
                className="text-center"
                onClick={() => navigate("/products")}
              >
                <i className="bi bi-chevron-left" /> Back to Product
              </Button>
            </div>
          )}

          <div className="mb-6 space-y-4 grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-12">
            <div className="col-span-8 container">
              {cartItems.length > 0 && (
                <div className="my-10 px-4 overflow-x-scroll 2xl:overflow-x-hidden">
                  <div className="grid grid-cols-12 min-w-[1024px] text-center my-4 py-3 bg-gray-50 border-b border-gray-200">
                    <p className="uppercase font-semibold tracking-widest col-span-5">
                      Item
                    </p>
                    <p className="uppercase font-semibold tracking-widest col-span-1">
                      Price
                    </p>
                    <p className="uppercase font-semibold tracking-widest col-span-2">
                      Quantity
                    </p>
                    <p className="uppercase font-semibold tracking-widest col-span-2">
                      Total
                    </p>
                    <p className="uppercase hidden font-semibold tracking-widest col-span-2">
                      Remove
                    </p>
                  </div>

                  <div className="cart-body ">
                    {cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="item-item border-b px-4 py-4"
                      >
                        <div className="grid grid-cols-12 min-w-[1024px] items-center text-center ">
                          <div className="col-span-5 flex items-center space-x-4">
                            <img
                              className="w-20 h-20 object-cover"
                              src={item.image}
                              alt="Product"
                            />
                            <div className=" text-start">
                              <span className="text-lg font-semibold text-gray-900">
                                {item.title}
                              </span>
                              <br />
                              <span className="text-sm text-gray-500">
                                Size: {item.size}
                              </span>
                            </div>
                          </div>
                          <div className="col-span-1">₹{item.price}</div>
                          <div className="col-span-2 flex container">
                            <CircleMinus
                              onClick={() => handleQuantityMinus(item)}
                            />
                            <p className="border border-gray-400 px-3 mx-3">
                              {item.quantity}
                            </p>
                            <CirclePlus
                              onClick={() => handleQuantityPlus(item)}
                            />
                          </div>
                          <div className="col-span-2">
                            ₹{item.price * item.quantity}
                          </div>
                          <div className="col-span-2">
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                dispatch(toggleCartOptimistic(item._id));
                                dispatch(
                                  updateDataApi({
                                    productId: item._id,
                                    field: "in_cart",
                                    value: false,
                                    quantity: 1,
                                  })
                                );
                              }}
                            >
                              <X />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-4 container">
              <OrderSummary cartItems={cartItems} />
            </div>
          </div>
          <div className="container flex flex-col sm:flex-row sm:justify-between items-center">
            {cartItems.length > 0 && (
              <Link
                variant="outline"
                className="flex items-center hover:underline text-gray-500 float-left mt-4  cursor-pointer text-sm tracking-widest font-light"
                to="/products"
              >
                <i className="bi bi-chevron-left font-extrabold tracking-widest"></i>
                <span className=" text-xs pr-4 py-3 uppercase">
                  continue shopping
                </span>
              </Link>
            )}
            {cartItems.length > 0 && (
              <div className="mb-10">
                <Button onClick={() => handleCheckout(cartItems)}>
                  PROCEED TO CHECKOUT
                  <i className="bi bi-chevron-right" />
                </Button>
              </div>
            )}
          </div>
        </div>

        <ServiceHighlights />
      </div>
    </TooltipProvider>
  );
};

export default CartList;
