import { CircleUser, Heart, Search, ShoppingCart, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "../ui/button";
import { updateDataApi } from "@/utils/productDetailsSlice";
import { useToast } from "../ui/use-toast";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { products, status, error } = useSelector((state) => state.productList);
  const navigate = useNavigate();
  const { toast } = useToast();

  const cartItems = products.filter((cart) => cart.in_cart === true);

  const handleViewCart = () => {
    setIsOpen(false);
    navigate("/cartlist");
  };

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const handleRemoveFromCart = (productId) => {
    dispatch(
      updateDataApi({
        productId: productId,
        field: "in_cart",
        value: false,
        quantity: 1,
      })
    );
    toast({
      description: "Product removed from Cart!",
      variant: "destructive",
      duration: 900,
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-2xl font-bold" to="/">
            GeekyGlam
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/search" className="group">
              <Search className="duration-300 group-hover:scale-125" />
            </Link>
            <Link to="/profile" className="group">
              <CircleUser className="duration-300 group-hover:scale-125" />
            </Link>
            <Link to="wishlist" className="group">
              <Heart className="duration-300 group-hover:scale-125" />
            </Link>

            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <span className="group cursor-pointer">
                  <ShoppingCart className="duration-300 group-hover:scale-125" />
                </span>
              </PopoverTrigger>
              <PopoverContent className="p-4 max-h-96 overflow-y-auto">
                <div>
                  {cartItems.map((item) => (
                    <div key={item._id} className="relative">
                      <div className="flex p-3">
                        <div className="w-1/4">
                          <img src={item.image} className="w-15 h-20" />
                        </div>
                        <div className="w-3/4">
                          <p className="font-semibold ml-2">{item.title}</p>
                          <p className="text-xs text-gray-400 ml-2">
                            Quantity: {item.quantity}
                          </p>
                          <p className="font-semibold text-xs ml-2">
                            ₹{item.price}
                          </p>
                        </div>

                        <span
                          onClick={() => handleRemoveFromCart(item._id)}
                          className="absolute top-1 right-1 text-gray-400 cursor-pointer"
                        >
                          <X />
                        </span>
                      </div>
                      <hr className="text-gray-400 w-full container" />
                    </div>
                  ))}
                  <div className="flex justify-between py-2 container">
                    <p className="text-gray-400">TOTAL: </p>
                    <p className="font-semibold">₹{total}</p>
                  </div>
                  <hr className="text-gray-400 w-full container" />
                  <div className="flex justify-between my-5">
                    <Button
                      variant="outline"
                      onClick={handleViewCart}
                      className=" text-gray-400 cursor-pointer"
                      to="/cartlist"
                    >
                      VIEW CART
                    </Button>
                    <Button variant="checkoutButton">CHECKOUT</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
