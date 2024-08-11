import { searchProducts } from "@/utils/searchSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const searchCache = useSelector((state) => state.search.query);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(true);
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

  return (
    <div className=" h-screen flex items-center justify-center px-4">
      <input
        type="text"
        className="w-1/2  p-2 py-4 border-b-2 border-slate-500 bg-white rounded-t-md focus:outline-none focus:ring-0"
        placeholder="What are you looking for?"
        onChange={handleSearchInput}
      />
      {showSuggestion &&
        searchQuery !== "" &&
        results?.products?.length > 0 && (
          <div className="absolute w-1/2 top-96 mt-10 bg-white border border-gray-300 rounded-lg shadow-lg overflow-auto">
            <ul className=" overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg max-h-72">
              {results.products.map((suggestion) => (
                <li
                  onClick={() => navigate(`/product-details/${suggestion._id}`)}
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-100"
                  key={suggestion._id}
                >
                  <div className="w-1/3">
                    <img
                      src={suggestion.image}
                      className="w-full h-auto rounded"
                      alt={suggestion.title}
                    />
                  </div>
                  <div className="w-2/3 ml-4">
                    <p className="text-lg font-semibold">{suggestion.title}</p>
                    <p className="text-sm text-gray-600">
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
