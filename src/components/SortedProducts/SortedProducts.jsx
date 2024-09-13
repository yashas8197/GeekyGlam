import ProductCard from "../ProductCard/ProductCard";

const SortedProducts = ({ currentProduct, loading }) => {
  if (loading === "loading") {
    return <p>Loading....</p>;
  }
  return (
    <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {currentProduct.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default SortedProducts;
