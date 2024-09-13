import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import {
  fetchProductDetails,
  updateDataApi,
} from "@/utils/productDetailsSlice";
import {
  toggleCartOptimistic,
  toggleWishlistOptimistic,
} from "@/utils/productListSlice";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const ProductDeatilModal = ({ isDialogOpen, setIsDialogOpen, product }) => {
  const [noOfItems, setNoOfItems] = useState(1);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [cartAdd, setCartAdd] = useState(product.in_cart);
  const [wishlistAdd, setWishlistAdd] = useState(product.is_wished);

  useEffect(() => {
    setCartAdd(product.in_cart);
    setWishlistAdd(product.is_wished);
  }, [product.in_cart, product.is_wished]);

  const numberOfStars = Math.floor(product.rating);
  const maxStars = 5;
  const stars = Array.from({ length: numberOfStars }).map((_, index) => (
    <span key={index} className="text-blue-500 text-lg">
      <i className="bi bi-star-fill"></i>
    </span>
  ));

  const emptyStars = Array.from({ length: maxStars - numberOfStars }).map(
    (_, index) => (
      <span key={index + numberOfStars} className="text-gray-300 text-lg">
        <i className="bi bi-star-fill"></i>
      </span>
    )
  );

  const handleAddToWishlist = (product) => {
    setWishlistAdd(true);
    const productId = product._id;
    dispatch(toggleWishlistOptimistic(productId));
    dispatch(
      updateDataApi({
        productId: productId,
        field: "is_wished",
        value: true,
      })
    );
    toast({
      description: "Product added to wishlist!",
      variant: "default",
      duration: 900,
    });
  };

  const handleRemoveWishlist = (productId) => {
    setWishlistAdd(false);
    dispatch(toggleWishlistOptimistic(productId));
    dispatch(
      updateDataApi({ productId: productId, field: "is_wished", value: false })
    );
    toast({
      description: "Product removed from wishlist!",
      variant: "destructive",
      duration: 900,
    });
  };

  const handleAddToCart = (productId) => {
    setCartAdd(true);
    dispatch(toggleCartOptimistic(productId));
    dispatch(
      updateDataApi({
        productId: productId,
        field: "in_cart",
        value: true,
        quantity: noOfItems,
      })
    );
    toast({
      description: "Product added to Cart!",
      variant: "default",
      duration: 900,
    });
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent
        aria-describedby="dialog-description"
        className="max-w-lg md:max-w-3xl lg:max-w-4xl p-4 md:p-6"
      >
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:mx-10 mt-6 md:mt-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl py-2 md:py-4">
              {product.title}
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex">
                <p className="text-base md:text-xl font-light mx-1 md:mx-2">
                  ₹{product.price}.00
                </p>
                <p className="text-gray-400 mt-1 line-through text-sm md:text-base">
                  ₹{product.original_price}.00
                </p>
              </div>
              <div className="flex items-center">
                {stars}
                {emptyStars}
                <p className="text-gray-400 mx-2 text-xs md:text-sm">
                  {product.reviews} REVIEWS
                </p>
              </div>
            </div>

            <div className="my-4 md:my-6">
              <p className="text-xs md:text-sm text-gray-500">
                {product.description}. Fashion is a dynamic and ever-evolving
                art form that transcends...
              </p>

              <div className="mt-4 md:mt-6">
                <h5 className="font-semibold text-sm md:text-base">SIZE</h5>
                <Button
                  variant="outline"
                  className="px-6 md:px-8 py-2 md:py-3 my-2"
                >
                  {product.size}
                </Button>

                <p className="my-3 text-sm">
                  <span className="font-semibold">Availability: </span>
                  {product.in_stock ? "In Stock" : "Out of Stock"}
                </p>

                <p className="my-3 text-sm">
                  <span className="font-semibold">Delivery: </span>
                  In {product.delivery_time} Days
                </p>

                <div className="w-16 md:w-20 my-4 md:my-6">
                  <p className="font-semibold text-sm md:text-base">ITEMS</p>
                  <input
                    value={noOfItems}
                    min={1}
                    onChange={(e) => setNoOfItems(e.target.value)}
                    disabled={!product.in_stock}
                    type="number"
                    className="w-full py-2 px-2 border border-gray-400 text-sm"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {cartAdd === false ? (
                    <Button
                      disabled={!product.in_stock}
                      variant="addToCart"
                      className="py-4 md:py-6 px-4 md:px-6"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      <span className="flex items-center">
                        <i className="bi bi-cart-fill mr-2"></i> ADD TO CART
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="addToCart"
                      className="py-4 md:py-6 px-4 md:px-6"
                      onClick={() => navigate("/cartlist")}
                    >
                      <span className="flex items-center">
                        <i className="bi bi-cart-fill mr-2"></i> GO TO CART
                      </span>
                    </Button>
                  )}

                  {wishlistAdd === false ? (
                    <Button
                      variant="outline"
                      className="py-3 md:py-5 px-3 md:px-5 text-gray-400 hover:bg-gray-300 hover:text-white"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <i className="bi bi-heart-fill text-red-700 mr-2"></i> ADD
                      TO WISHLIST
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="py-3 md:py-5 px-1 md:px-1 text-gray-400 hover:bg-gray-300 hover:text-white"
                      onClick={() => handleRemoveWishlist(product._id)}
                    >
                      REMOVE FROM WISHLIST
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDeatilModal;
