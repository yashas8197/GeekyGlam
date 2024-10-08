import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { updateDataApi } from "@/utils/productDetailsSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { toggleCartOptimistic } from "@/utils/productListSlice";
import ProductDeatilModal from "../ProductDeatilModal/ProductDeatilModal";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = (productId) => {
    dispatch(toggleCartOptimistic(productId));
    dispatch(
      updateDataApi({
        productId: productId,
        field: "in_cart",
        value: true,
        quantity: 1,
      })
    );
    toast({
      description: "Product added to Cart!",
      variant: "default",
      duration: 900,
    });
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="my-4">
      <Card className="relative group rounded-none border-none ">
        <div className="relative group">
          {product.in_stock === false ? (
            <div className="uppercase bg-[#3494E6] absolute top-2 -left-3 z-10 inline-block font-sans text-xs tracking-widest pt-1 pr-4 pb-1 pl-4 text-[#fff] items-center">
              Out of Stock
            </div>
          ) : product.trending ? (
            <div className="uppercase bg-[#f2aa3e] absolute top-2 -left-3 z-10 inline-block font-sans text-xs tracking-widest pt-1 pr-4 pb-1 pl-4 text-[#fff] items-center">
              Trending
            </div>
          ) : (
            ""
          )}
          <img
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-10"
            src={product.image}
            alt="product"
            style={{ height: "100%", objectFit: "cover" }}
          />
          <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              disabled={product.in_cart === true || product.in_stock === false}
              className="text-black border border-slate-800 bg-white hover:text-white hover:bg-slate-800 px-4 py-2 sm:block hidden"
              onClick={() => handleAddToCart(product._id)}
            >
              <i className="bi bi-cart"></i>
            </button>
            <button
              variant="cardViewBtn"
              className="text-white tracking-widest text-sm uppercase font-mono border border-none px-5 mx-2 text-center leading-10 hover:opacity-80 bg-slate-800"
              onClick={() => navigate(`/product-details/${product._id}`)}
            >
              <i className="bi bi-search"></i>
              <span className="ml-2">View</span>
            </button>
            <button
              onClick={handleOpenDialog}
              className="sm:block hidden text-black border  border-slate-800 bg-white hover:text-white hover:bg-slate-800 px-4 py-2"
            >
              <i className="bi bi-arrows-angle-expand"></i>
            </button>
          </div>
        </div>

        <p className="border border-black transition-colors duration-100 group-hover:border-blue-400"></p>
        <CardContent className="py-4">
          <p className="text-gray-500 mb-1 text-xs sm:block hidden">
            {product.description.length > 30
              ? `${product.description.slice(0, 15)}...`
              : product.description}
          </p>

          <CardTitle className="sm:text-lg">
            <p className="text-gray-900 uppercase font-sans tracking-widest text-sm">
              {product.title}
            </p>
          </CardTitle>
          <p className="text-sm text-gray-500">₹{product.price}</p>
        </CardContent>
      </Card>

      <ProductDeatilModal
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
