import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { updateDataApi } from "@/utils/productDetailsSlice";
import {
  fetchProducts,
  toggleWishlistOptimistic,
} from "@/utils/productListSlice";
import { ChevronLeft, X } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const WishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.productList);

  const wishlistItems = products.filter((cart) => cart.is_wished === true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="text-center pt-24">
        <small>
          <Link to="/" className="mx-2">
            Home
          </Link>
          /<span className="text-gray-400 mx-2">Wishlist</span>
        </small>
        <h1 className="text-7xl font-bold my-4">WISHLIST</h1>
        <p className="text-xl text-gray-400">
          You have {wishlistItems.length} items in your wishlist
        </p>
      </div>
      <div className=" container flex flex-col flex-grow">
        <div className="my-10">
          {wishlistItems?.length === 0 && (
            <div className="flex justify-center items-center">
              <Button onClick={() => navigate("/products")}>
                <ChevronLeft />
                Back to Product list
              </Button>
            </div>
          )}
          <div className="grid grid-cols-4 gap-4">
            {wishlistItems.map((card) => (
              <div key={card._id} className="relative">
                <ProductCard product={card} />
                <span
                  onClick={() => {
                    dispatch(toggleWishlistOptimistic(card._id));
                    dispatch(
                      updateDataApi({
                        productId: card._id,
                        field: "is_wished",
                        value: false,
                      })
                    );
                  }}
                  className="absolute top-4 right-0 text-gray-400 cursor-pointer"
                >
                  <X />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
