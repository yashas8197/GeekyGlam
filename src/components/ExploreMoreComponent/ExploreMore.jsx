import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const ExploreMore = () => {
  const { products } = useSelector((state) => state.productList);

  const similarProducts = products.slice(3, 7);
  return (
    <div className="flex gap-8 container my-3">
      {similarProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ExploreMore;
