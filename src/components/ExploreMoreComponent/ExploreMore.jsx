import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProducts } from "@/utils/productListSlice";

const ExploreMore = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (!products) return;

  const similarProducts = products.slice(3, 7);

  if (!similarProducts.length) {
    return (
      <p className="text-center container py-10">No similar products found.</p>
    );
  }
  return (
    <div className="flex gap-8 container my-3">
      {similarProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ExploreMore;
