import { searchProducts } from "@/utils/searchSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const SearchPage = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    if (value === "") return;

    const timer = setTimeout(() => {
      dispatch(searchProducts(value));
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SyncLoader size={20} color="#4A90E2" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4">
      <input
        type="text"
        className="sm:w-1/2 w-full p-2 py-4 border-b-2 border-slate-500 bg-white rounded-t-md focus:outline-none focus:ring-0"
        placeholder="What are you looking for?"
        onChange={handleSearchInput}
      />
      {searchQuery !== "" && results?.products?.length > 0 && (
        <div className="sm:w-1/2 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-auto">
          <ul className=" overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg max-h-72">
            {results.products.map((suggestion) => (
              <li
                onClick={() => navigate(`/product-details/${suggestion._id}`)}
                className="grid grid-cols-12 p-4 cursor-pointer hover:bg-gray-100"
                key={suggestion._id}
              >
                <div className="col-span-4">
                  <img
                    src={suggestion.image}
                    className="w-full h-auto rounded"
                    alt={suggestion.title}
                    loading="lazy"
                  />
                </div>
                <div className="col-span-8 ml-4">
                  <p className="text-lg font-semibold">{suggestion.title}</p>
                  <p className="text-sm text-gray-600 sm:block hidden">
                    {suggestion.description}
                  </p>
                  <span className="font-bold">₹{suggestion.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
