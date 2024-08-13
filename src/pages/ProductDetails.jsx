import ExploreMore from "@/components/ExploreMoreComponent/ExploreMore";
import ProductOverview from "@/components/ProductOverview/ProductOverview";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import { Button } from "@/components/ui/button";
import { addItem, removeItem } from "@/utils/cartSlice";
import {
  updateDataApi,
  fetchProductDetails,
} from "@/utils/productDetailsSlice";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const ProductDetails = () => {
  const [noOfItems, setNoOfItems] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetails);

  const cartItems = useSelector((state) => state.cart);
  const { toast } = useToast();

  console.log(cartItems);

  // const cartExist = cartItems.some((item) => item._id === productId);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [productId, product]);

  const numberOfStars = Math.floor(product.rating);
  const stars = Array.from({ length: numberOfStars }).map((_, index) => (
    <span key={index} className="text-yellow-500 text-lg">
      ⭐️
    </span>
  ));

  const handleAddToWishlist = (product) => {
    const productId = product._id;
    dispatch(
      updateDataApi({ productId: productId, field: "is_wished", value: true })
    );
    toast({
      description: "Product added to wishlist!",
      variant: "default",
      duration: 900,
    });
  };

  const handleRemoveWishlist = (productId) => {
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
    <div className="pt-20">
      <div className="flex">
        <div className="w-1/2 p-4">
          <img src={product.image} />
        </div>
        <div className="w-1/2 mx-20">
          <h1 className="text-6xl py-4  mt-10">{product.title}</h1>
          <div className="flex justify-between items-center">
            <div className="flex">
              <p className="text-xl font-extralight mx-2">
                ₹{product.price}.00
              </p>
              <p className="text-gray-400 float-end mt-1 line-through">
                ₹{product.original_price}.00
              </p>
            </div>
            <div className="flex items-center">
              {stars}
              <p className="text-gray-400 mx-2">{product.reviews} REVIEWS</p>
            </div>
          </div>

          <div className="my-10">
            <p className="text-sm text-gray-400">
              {product.description}. Fashion is a dynamic and ever-evolving art
              form that transcends mere clothing to become a profound statement
              of individual identity and cultural zeitgeist. It is an intricate
              tapestry woven from threads of history, culture, innovation, and
              personal expression. Fashion encompasses a vast array of elements,
              including clothing, accessories, footwear, and hairstyles, each
              contributing to a person's overall style and presentation.
            </p>
            <div>
              <div className="mt-8">
                <h5 className="font-semibold">SIZE</h5>
              </div>
              <div>
                <Button variant="outline" className="px-10 my-2">
                  {product.size}
                </Button>
                <p className="my-3">
                  <span className="text-base font-semibold">
                    Availability:{" "}
                  </span>{" "}
                  <span className="text-base">
                    {product.in_stock ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p className="my-3">
                  <span className="text-base font-semibold">Delivery: </span>{" "}
                  <span className="text-base">
                    In {product.delivery_time} Days
                  </span>
                </p>
                <div className="w-20 my-8">
                  <p className="text-base font-semibold">ITEMS</p>
                  <input
                    value={noOfItems}
                    min={1}
                    onChange={(e) => setNoOfItems(e.target.value)}
                    disabled={product.in_stock === false}
                    type="number"
                    className="w-full py-2 px-1 border border-gray-500"
                  />
                </div>

                <div className="">
                  {product.in_cart === false ? (
                    <Button
                      disabled={product.in_stock === false}
                      variant="addToCart"
                      className="py-10 px-10"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      <span className="flex items-center">
                        <ShoppingCart className="mr-3" /> ADD TO CART
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="addToCart"
                      className="py-10 px-10"
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      <span className="flex items-center">
                        <ShoppingCart className="mr-3" /> REMOVE FROM CART
                      </span>
                    </Button>
                  )}

                  {product.is_wished === false ? (
                    <Button
                      variant="outline"
                      className="mx-7 py-6 px-6 hover:bg-gray-400 text-gray-400"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <span className=" hover:text-white flex items-center text-xs">
                        <span className="">❤️ ADD TO WISHLIST</span>
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="mx-7 py-6 px-6 hover:bg-gray-400 text-gray-400"
                      onClick={() => handleRemoveWishlist(product._id)}
                    >
                      <span className=" hover:text-white flex items-center text-xs">
                        ❤️
                      </span>{" "}
                      REMOVE FROM WISHLIST
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 container w-full">
        <ProductOverview />
      </div>
      <div>
        <h4 className="text-center font-bold">YOU MIGHT ALSO LIKE</h4>
        <div className="flex">
          <ExploreMore />
        </div>
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default ProductDetails;
