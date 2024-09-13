import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  categoryFilter,
  clearCategoryFilter,
  clearSort,
  fetchProducts,
  fetchProductsByCategory,
  setSort,
} from "../utils/productListSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Banner from "@/components/Banner";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import SortedProducts from "@/components/SortedProducts/SortedProducts";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

const ProductsList = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { products, status, error } = useSelector((state) => state.productList);
  const category = useSelector((state) => state.productList.filters.categories);
  const sortBy = useSelector((state) => state.productList.filters.sortBy);
  const filterCategory = location.state || "All";
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const [query, setQuery] = useSearchParams({
    cSize: "",
    cPrice: "",
    sort: "",
    selectedCat: "",
  });

  useEffect(() => {
    if (filterCategory === "All") {
      dispatch(fetchProducts());
      dispatch(clearCategoryFilter());
      dispatch(categoryFilter({ value: filterCategory, checked: true }));
    } else {
      dispatch(fetchProductsByCategory(filterCategory));
      dispatch(clearCategoryFilter());
      dispatch(categoryFilter({ value: filterCategory, checked: true }));
    }
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const maxValue = products.reduce(
    (acc, curr) => (parseInt(curr.price) > acc ? parseInt(curr.price) : acc),
    0
  );

  const cSize = query.get("cSize");
  const cPrice = query.get("cPrice") || maxValue;
  const sort = query.get("sort");
  const selectedCat = query.get("selectedCat")?.split(",") || [];

  const handleCategoryChange = (value, checked) => {
    const updatedSelectedItems = checked
      ? [...selectedCat, value]
      : selectedCat.filter((selectedItem) => selectedItem !== value);

    dispatch(categoryFilter({ value: value, checked: checked }));
    dispatch(fetchProducts());
    setQuery(
      (prev) => {
        prev.set("selectedCat", updatedSelectedItems.join(","));
        return prev;
      },
      { return: true }
    );
  };

  // console.log(products);

  const handleSizeChange = (value) => {
    setQuery(
      (prev) => {
        prev.set("cSize", value);
        return prev;
      },
      { replace: true }
    );
  };

  const handleSortChange = (value) => {
    setQuery((prev) => {
      prev.set("sort", value);
      return prev;
    });

    dispatch(setSort(value));
  };

  const filteredProducts =
    products &&
    products.filter((product) => {
      const categoryMatch =
        category.length > 0 ? category.includes(product.category) : true;
      const sizeMatch = cSize ? cSize.includes(product.size) : true;
      const matchedPriceRange = cPrice === maxValue || product.price <= +cPrice;
      return categoryMatch && sizeMatch && matchedPriceRange;
    });

  const sortProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "Rating") {
      return b.rating - a.rating;
    } else if (sortBy === "Popularity") {
      return parseFloat(b.reviews) - parseFloat(a.reviews);
    }

    return 0;
  });

  const clearFilters = () => {
    setQuery(
      (prev) => {
        prev.delete("cSize");
        prev.delete("cPrice");
        prev.delete("sort");
        prev.delete("selectedCat");
        return prev;
      },
      { replace: true }
    );

    dispatch(clearCategoryFilter());
    dispatch(clearSort());
    dispatch(fetchProducts());
  };

  //Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = sortProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="my-24 py-2 ">
      <Banner loca={filterCategory} />

      <div className="container flex justify-between items-center">
        <small className="text-gray-400 ml-96">
          Showing 1 - 8 0f 29 products
        </small>
        <div className="flex items-center ">
          <label className="mx-5 text-gray-400">Sort By: </label>
          <Select
            value={sort}
            onValueChange={(value) => handleSortChange(value)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Popularity">Popularity</SelectItem>
              <SelectItem value="Rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-between items-start container">
        <div className="w-1/4 mx-8 rounded-lg">
          <div className="container">
            <div className="flex justify-between items-center mb-3 p-5">
              <h5 className="text-lg font-semibold uppercase">Filters</h5>
              <span
                onClick={clearFilters}
                className="text-gray-600 cursor-pointer underline text-sm"
              >
                Clear
              </span>
            </div>
            <hr className="text-gray-400 my-8" />
            <div className="mb-4">
              <h5 className="text-lg text-gray-500">PRICE</h5>
              <div className="flex justify-between text-gray-600 text-sm mb-2">
                <span>200</span>
                <span>{maxValue / 2}</span>
                <span>{maxValue}</span>
              </div>
              <Slider
                className="w-full"
                type="range"
                max={maxValue}
                min={299}
                onValueChange={(value) =>
                  setQuery((prev) => {
                    prev.set("cPrice", value);
                    return prev;
                  })
                }
              />
            </div>
            <hr className="text-gray-400 my-8" />
            <h5 className="text-lg text-gray-400 py-2 uppercase">Category</h5>
            <div className="my-2">
              <div>
                <Checkbox
                  type="checkbox"
                  value="Men"
                  checked={category.includes("Men")}
                  onCheckedChange={(checked) =>
                    handleCategoryChange("Men", checked)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mx-2"
                >
                  Men
                </label>
              </div>
              <div>
                <Checkbox
                  type="checkbox"
                  value="Women"
                  checked={category.includes("Women")}
                  onCheckedChange={(checked) =>
                    handleCategoryChange("Women", checked)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none mx-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Women
                </label>
              </div>
              <div>
                <Checkbox
                  type="checkbox"
                  value="Kids"
                  checked={category.includes("Kids")}
                  onCheckedChange={(checked) =>
                    handleCategoryChange("Kids", checked)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none mx-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Kids
                </label>
              </div>
            </div>
            <hr className="text-gray-400 my-8" />
            <div className="mb-4">
              <h5 className="text-lg text-gray-400 py-2">Size</h5>
              {["S", "M", "L", "XL", "XXL"].map((s, i) => (
                <div className="flex gap-2 items-start" key={i}>
                  <div className="grid place-items-center mt-1">
                    <input
                      className="
                      col-start-1 row-start-1
                      appearance-none shrink-0
                      w-4 h-4 border-2 border-black rounded-full
                    "
                      type="radio"
                      name="sizes"
                      value={s}
                      id={s}
                      onChange={(e) => handleSizeChange(e.target.value)}
                    />
                    {cSize === s && (
                      <div
                        className="
        col-start-1 row-start-1
        w-2 h-2 rounded-full bg-black"
                      />
                    )}
                  </div>
                  <label className="Label" htmlFor={s}>
                    {s === "S"
                      ? "Small"
                      : s === "M"
                      ? "Medium"
                      : s === "L"
                      ? "Large"
                      : s === "XL"
                      ? "Extra Large"
                      : "XXL"}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SortedProducts currentProduct={currentProduct} loading={status} />
      </div>
      <PaginationComponent
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsList;
