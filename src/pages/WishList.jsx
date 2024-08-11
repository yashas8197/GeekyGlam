import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { removeWishlist } from "@/utils/wishlistSlice";
import { ChevronLeft, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const WishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlists = useSelector((state) => state.wishlist.wishList);

  console.log(wishlists);
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
          You have {wishlists.length} items in your wishlist
        </p>
      </div>
      <div className=" container flex flex-col flex-grow">
        <div className="my-10">
          {wishlists.length === 0 && (
            <div className="flex justify-center items-center">
              <Button onClick={() => navigate("/products")}>
                <ChevronLeft />
                Back to Product list
              </Button>
            </div>
          )}
          <div className="grid grid-cols-4 gap-4">
            {wishlists.map((card) => (
              <div key={card._id} className="relative">
                <span
                  onClick={() => dispatch(removeWishlist(card._id))}
                  className="absolute top-1 right-9 text-gray-400 cursor-pointer"
                >
                  <X />
                </span>
                <ProductCard product={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
