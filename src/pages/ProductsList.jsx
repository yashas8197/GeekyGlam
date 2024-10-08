import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  categoryFilter,
  clearCategoryFilter,
  clearSort,
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

  const [query, setQuery] = useState({
    cSize: "",
    cPrice: "",
    sort: "",
    selectedCat: filterCategory,
  });

  let updatedSelectedItems = [...category];

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductsByCategory(filterCategory));
    dispatch(clearCategoryFilter());

    dispatch(categoryFilter({ value: filterCategory, checked: true }));
  }, [dispatch]);

  const maxValue = products.reduce(
    (acc, curr) => (parseInt(curr.price) > acc ? parseInt(curr.price) : acc),
    0
  );

  const cSize = query.cSize;
  const cPrice = query.cPrice || maxValue;
  const sort = query.sort;
  const selectedCat = query.selectedCat?.split(",") || [];

  const handleCategoryChange = (value, checked) => {
    updatedSelectedItems = checked
      ? [...selectedCat, value]
      : selectedCat.filter((selectedItem) => selectedItem !== value);
    dispatch(categoryFilter({ value: value, checked: checked }));
    dispatch(fetchProductsByCategory("All"));
    setQuery((prev) => ({
      ...prev,
      selectedCat: updatedSelectedItems.join(","),
    }));
  };

  const handleSizeChange = (value) => {
    setQuery((prev) => ({
      ...prev,
      cSize: value,
    }));
  };

  const handleSortChange = (value) => {
    setQuery((prev) => ({
      ...prev,
      sort: value,
    }));

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
    setQuery({
      cSize: "",
      cPrice: "",
      sort: "",
      selectedCat: "",
    });

    dispatch(clearCategoryFilter());
    dispatch(clearSort());
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
    <div className="my-4 py-2 ">
      <Banner loca={filterCategory} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 p-4 lg:p-6 sm:container">
        <div className="lg:col-span-9">
          <div className="flex justify-between items-center">
            <small className="text-gray-400 ">
              Displaying{" "}
              <span className="font-bold">{currentProduct.length}</span> out of{" "}
              <span className="font-bold">{sortProducts.length}</span> products
            </small>
            <div className="flex justify-end items-center">
              <label className="mx-2 text-gray-400">Sort: </label>
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
          <SortedProducts
            className=""
            currentProduct={currentProduct}
            loading={status}
          />
          <PaginationComponent
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
        <div className=" lg:col-span-3 bg-white shadow-lg p-4 rounded-lg">
          <div className="w-full">
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
                  setQuery((prev) => ({
                    ...prev,
                    cPrice: value,
                  }))
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
      </div>
    </div>
  );
};

export default ProductsList;
