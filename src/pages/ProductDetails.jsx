import ExploreMore from "@/components/ExploreMoreComponent/ExploreMore";
import ProductOverview from "@/components/ProductOverview/ProductOverview";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import { Button } from "@/components/ui/button";
import { addItem } from "@/utils/cartSlice";
import { fetchProductDetails } from "@/utils/productDetailsSlice";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [productId]);

  const numberOfStars = Math.floor(product.rating);
  const stars = Array.from({ length: numberOfStars }).map((_, index) => (
    <span key={index} className="text-yellow-500 text-lg">
      ⭐️
    </span>
  ));

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
                    disabled={product.in_stock === false}
                    type="number"
                    className="w-full py-2 px-1 border border-gray-500"
                  />
                </div>

                <div className="">
                  <Button
                    disabled={product.in_stock === false}
                    variant="addToCart"
                    className="py-10 px-10"
                    onClick={() => dispatch(addItem(product))}
                  >
                    <span className="flex items-center">
                      <ShoppingCart className="mr-3" /> ADD TO CART
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="mx-7 py-6 px-6 hover:text-white"
                  >
                    <span className="text-gray-400 hover:text-white flex items-center text-xs">
                      <Heart className="mr-1 hover:text-white" /> ADD TO
                      WISHLIST
                    </span>
                  </Button>
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
