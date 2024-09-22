import ExploreMore from "@/components/ExploreMoreComponent/ExploreMore";
import ProductOverview from "@/components/ProductOverview/ProductOverview";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import { Button } from "@/components/ui/button";
import {
  updateDataApi,
  fetchProductDetails,
} from "@/utils/productDetailsSlice";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  toggleCartOptimistic,
  toggleWishlistOptimistic,
} from "@/utils/productListSlice";

const ProductDetails = () => {
  const [noOfItems, setNoOfItems] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.productDetails);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [cartAdd, setCartAdd] = useState(product.in_cart);
  const [wishlistAdd, setWishlistAdd] = useState(product.is_wished);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [productId]);

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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12  pt-14">
        <div className="sm:col-span-6 p-4 pt-10">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            loading="lazy"
          />
        </div>
        <div className="sm:col-span-6 container">
          <p className="mt-10 text-xs tracking-widest">
            <Link to="/" className="cursor-pointer">
              Home /
            </Link>
            <span
              className="cursor-pointer"
              onClick={() => navigate(`/products`, { state: product.category })}
            >
              {" "}
              {product.category} /
            </span>
            <span className="text-gray-400 ">
              {"  "}
              {product.title}
            </span>
          </p>
          <h1 className="text-6xl py-4  ">{product.title}</h1>
          <div className="sm:flex justify-between items-center">
            <div className="flex">
              <p className="text-xl font-extralight my-2 sm:mx-2">
                ₹{product.price}.00
              </p>
              <p className="text-gray-400 float-end m-3 line-through">
                ₹{product.original_price}.00
              </p>
            </div>
            <div className="flex items-center">
              {stars}
              {emptyStars}
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
                  {cartAdd === false ? (
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
                      onClick={() => navigate("/cartlist")}
                    >
                      <span className="flex items-center">
                        <ShoppingCart className="mr-3" /> GO TO CART
                      </span>
                    </Button>
                  )}

                  {wishlistAdd === false ? (
                    <Button
                      variant="outline"
                      className="sm:mx-7 my-1 py-6 px-6 hover:bg-gray-400 text-gray-400"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <span className=" hover:text-white flex items-center">
                        <i className="bi bi-heart-fill text-red-700 mr-2"></i>
                        <span className="text-xs"> ADD TO WISHLIST</span>
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="sm:mx-7 my-1 py-6 px-6 hover:bg-gray-400 text-gray-400"
                      onClick={() => handleRemoveWishlist(product._id)}
                    >
                      <span className=" hover:text-white flex items-center text-xs">
                        REMOVE FROM WISHLIST
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container w-full">
        <ProductOverview product={product} />
      </div>
      <div>
        <h4 className="text-center font-bold">YOU MIGHT ALSO LIKE</h4>
        <div className="flex">
          <ExploreMore />
        </div>
      </div>
      <ServiceHighlights />
    </>
  );
};

export default ProductDetails;
