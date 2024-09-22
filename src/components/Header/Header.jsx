import { CircleUser, Heart, Search, ShoppingCart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { addOrders } from "@/utils/orderSlice";
import { fetchProducts, toggleCartOptimistic } from "@/utils/productListSlice";
import i18next from "i18next";
import { updateDataApi } from "@/utils/productDetailsSlice";
import { useToast } from "../ui/use-toast";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { products, status, error } = useSelector((state) => state.productList);
  const { toast } = useToast();

  const navigate = useNavigate();
  const cartItems = products.filter((cart) => cart.in_cart === true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleViewCart = () => {
    setIsOpen(false);
    navigate("/cartlist");
  };

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const handleRemoveFromCart = (productId) => {
    dispatch(toggleCartOptimistic(productId));
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

  const handleCheckout = () => {
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

      // dispatch(addOrders(orderPayload));
    });
    navigate("/checkout", { state: cartItems });
  };

  const languages = [
    {
      label: "English",
      code: "en",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      label: "Spain",
      code: "es",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
    {
      label: "Kannada",
      code: "kn",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
  ];

  const handleLanguageChange = (code) => {
    i18next
      .changeLanguage(code)
      .then(() => {
        // console.log("Language changed to " + code);
      })
      .catch((err) => {
        // console.error("Error changing language ", err);
      });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="py-6">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="font-bold text-2xl font-serif">
            GeekyGlam<span style={{ color: "#0284c7" }}>.</span>
          </NavLink>

          <div className="flex space-x-6">
            <NavLink to="/search" className="group cursor-pointer">
              <i className="bi bi-search text-xl"></i>
            </NavLink>
            <NavLink to="/profile" className="group cursor-pointer">
              <i className="bi bi-person-circle text-xl"></i>
            </NavLink>
            <NavLink to="/wishlist" className="group cursor-pointer">
              <i className="bi bi-heart text-xl"></i>
            </NavLink>
            <NavLink className="sm:hidden block" to="/cartlist">
              <span className="group cursor-pointer">
                <i className="bi bi-cart2 text-xl"></i>
              </span>
            </NavLink>

            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger className="hidden sm:block " asChild>
                <span className="group cursor-pointer">
                  <i className="bi bi-cart2 text-xl"></i>
                </span>
              </PopoverTrigger>
              <PopoverContent className="p-4">
                <div>
                  <div className=" h-48 overflow-y-auto">
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
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
                              X
                            </span>
                          </div>
                          <hr className="text-gray-400 w-full container" />
                        </div>
                      ))
                    ) : (
                      <p className="text-center">Your cart is empty</p>
                    )}
                  </div>
                  <div className="flex justify-between py-2 container">
                    <p className="text-gray-400 font-light text-xs tracking-widest">
                      TOTAL:{" "}
                    </p>
                    <p className="font-semibold">₹{total}</p>
                  </div>
                  <hr className="text-gray-400 w-full container" />
                  <div className="flex justify-between my-2">
                    <p
                      variant="outline"
                      onClick={handleViewCart}
                      className="flex items-center hover:underline  cursor-pointer text-sm tracking-widest font-light"
                    >
                      <span className="text-gray-950 text-xs pl-4">
                        VIEW CART
                      </span>
                      <i className="bi bi-arrow-right-short font-extrabold text-xl"></i>
                    </p>
                    <Button
                      disabled={cartItems.length === 0}
                      className="tracking-widest"
                      onClick={handleCheckout}
                      variant="checkoutButton"
                    >
                      CHECKOUT
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover open={langOpen} onOpenChange={setLangOpen}>
              <PopoverTrigger asChild>
                <span className="group cursor-pointer text-gray-700">
                  <i className="bi bi-globe text-xl"></i>
                </span>
              </PopoverTrigger>

              <PopoverContent className="w-72 bg-white border border-gray-200 shadow-lg rounded-lg p-4">
                {languages.map((lang, i) => (
                  <div
                    key={i}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="flex cursor-pointer items-center py-2 hover:bg-gray-100 rounded-lg transition duration-200"
                  >
                    <img
                      src={lang.imgSrc}
                      className="w-6 h-6 mr-3"
                      alt={lang.label}
                    />
                    <span className="text-gray-800 font-medium">
                      {lang.label}
                    </span>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
