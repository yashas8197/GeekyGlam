import ProductCard from "../ProductCard/ProductCard";

const SortedProducts = ({ currentProduct, loading }) => {
  const placeholderCards = Array(6).fill(null);
  return (
    <div className="grid grid-cols-1 m-4 sm:grid-cols-3 gap-4">
      {loading === "loading" &&
        placeholderCards.map((_, index) => (
          <div key={index} className="relative group">
            <div className="animate-shimmer bg-gray-200 sm:h-96 h-48 w-full rounded"></div>
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
