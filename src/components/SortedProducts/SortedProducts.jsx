import ProductCard from "../ProductCard/ProductCard";

const SortedProducts = ({ currentProduct, loading }) => {
  const placeholderCards = Array(6).fill(null);
  return (
    <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading === "loading" &&
        placeholderCards.map((_, index) => (
          <div key={index} className="relative group">
            <div className="animate-shimmer bg-gray-200 h-96 w-full rounded"></div>
          </div>
        ))}
      {loading !== "loading" &&
        currentProduct.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default SortedProducts;
