import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/utils/productListSlice";

const FilterPanel = ({ category }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([category]);
  const { products, status, error } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    console.log("Category before change:", selectedCategories);
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
    console.log("Category after change:", selectedCategories);
    // dispatch(changeFilter({filterType: "Men", filterValue: }))
  };

  function isCategoryExist(cat) {
    return selectedCategories.includes(cat);
  }

  console.log(products);
  return (
    <div className="container">
      <div className="flex justify-between items-center mb-3 p-5">
        <h5 className="text-lg font-semibold">Filters</h5>
        <span
          onClick={() => clearFilters()}
          className="text-gray-600 cursor-pointer underline text-sm"
        >
          Clear
        </span>
      </div>
      <hr className="text-gray-400 my-8" />
      <div className="mb-4">
        <h5 className="text-lg text-gray-600">PRICE</h5>
        <div className="flex justify-between text-gray-600 text-sm mb-2">
          <span>0</span>
          <span>{2}</span>
          <span>{6}</span>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <hr className="text-gray-400 my-8" />
      <h5 className="text-lg text-gray-400 py-2">Category</h5>
      <div className="my-2">
        <div>
          <Checkbox
            value="Men"
            checked={isCategoryExist("Men")}
            onChange={(e) => handleCategoryChange(e.target.value)}
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
            value="Women"
            checked={isCategoryExist("Women")}
            onChange={(e) => handleCategoryChange(e.target.value)}
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
            value="Kids"
            checked={isCategoryExist("Kids")}
            onChange={(e) => handleCategoryChange(e.target.value)}
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
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <div className="mb-2" key={size}>
            <RadioGroup
              value={selectedSize}
              onValueChange={(value) => setSelectedSize(value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={size} name="size" id={`size-${size}`} />
                <Label htmlFor={`size-${size}`}>
                  {size === "S"
                    ? "Small"
                    : size === "M"
                    ? "Medium"
                    : size === "L"
                    ? "Large"
                    : size === "XL"
                    ? "Extra Large"
                    : "XXL"}
                </Label>
              </div>
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
