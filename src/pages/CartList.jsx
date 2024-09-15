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

const CartList = () => {
  const { products, status, error } = useSelector((state) => state.productList);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = products.filter((cart) => cart.in_cart === true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCheckout = (cartItems) => {
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
      };

      dispatch(addOrders(orderPayload));
    });

    navigate("/profile?tab=history");
  };

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

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
      <div className="mt-14  flex flex-col flex-grow">
        <div className="container">
          <div className="text-center pt-20 pb-10">
            <small>
              <Link to="/" className="mx-2">
                Home
              </Link>
              /<span className="text-gray-400 mx-2">Shopping cart</span>
            </small>
            <h1 className="text-7xl font-bold my-4">SHOPPING CART</h1>
            <p className="text-xl text-gray-400">
              You have {cartItems.length} items in your shopping cart
            </p>
          </div>

          <div className="mb-6 space-y-4 flex justify-around items-center">
            {cartItems.length === 0 && (
              <div className="mx-auto my-12">
                <Button onClick={() => navigate("/products")}>
                  <ChevronLeft /> Back to Product
                </Button>
              </div>
            )}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="relative">
                  <Card className="w-[350px] flex p-4 relative cursor-pointer">
                    <img src={item.image} className=" w-1/4" alt={item.title} />
                    <div className="w-3/4 ml-2">
                      <p className="font-semibold">{item.title}</p>
                      <div className="flex items-center">
                        <p className="text-md font-semibold">
                          ₹{item.price}.00
                        </p>
                        <p className="text-gray-400 mx-1 line-through">
                          {item.original_price}.00
                        </p>
                      </div>

                      <div className="flex">
                        <p className="pr-3">Quantity: </p>
                        <CircleMinus
                          onClick={() => handleQuantityMinus(item)}
                        />
                        <p className="border border-gray-400 px-3 mx-3">
                          {item.quantity}
                        </p>
                        <CirclePlus onClick={() => handleQuantityPlus(item)} />
                      </div>
                      <Tooltip>
                        <div className="absolute bottom-1 right-3">
                          <TooltipTrigger>
                            <div>
                              <CircleChevronRight
                                onClick={() =>
                                  navigate(`/product-details/${item._id}`)
                                }
                              />
                            </div>
                          </TooltipTrigger>

                          <TooltipContent className="absolute top-0 right-5 ">
                            <p>product detail page</p>
                          </TooltipContent>
                        </div>
                      </Tooltip>
                    </div>
                  </Card>
                  <Tooltip>
                    <div className="absolute top-1 right-3">
                      <TooltipTrigger>
                        <span
                          className="absolute top-1 right-1 cursor-pointer"
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
                      </TooltipTrigger>

                      <TooltipContent className="absolute top-0 right-6 ">
                        <p>Remove item</p>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5" style={{ backgroundColor: "#F8F9FB" }}>
                <h4 className="">ORDER SUMMARY</h4>
                <p className="text-xs my-4 text-gray-400">
                  Shipping and additional costs are calculated based on values
                  you have entered.
                </p>
                <div>
                  {cartItems.map((item) => (
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
                <div className="flex justify-between text-xl">
                  <p>Total: </p>
                  <p>₹{total}</p>
                </div>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <Link
              variant="outline"
              className="flex items-center hover:underline text-gray-500 float-left mt-4  cursor-pointer text-sm tracking-widest font-light"
              to="/products"
            >
              <i className="bi bi-chevron-left font-extrabold tracking-widest"></i>
              <span className=" text-xs pr-4 uppercase">continue shopping</span>
            </Link>
          )}
          {cartItems.length > 0 && (
            <div className="mb-10 float-end">
              <Button onClick={() => handleCheckout(cartItems)}>
                PROCEED TO CHECKOUT <ChevronRight />
              </Button>
            </div>
          )}
        </div>

        <ServiceHighlights className="" />
      </div>
    </TooltipProvider>
  );
};

export default CartList;
