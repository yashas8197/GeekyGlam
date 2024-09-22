import ProductCard from "../ProductCard/ProductCard";

const SortedProducts = ({ currentProduct, loading }) => {
  const placeholderCards = Array(6).fill(null);
  return (
    <div className="grid sm:grid-cols-3 gap-4">
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
