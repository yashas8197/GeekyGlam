import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/utils/productListSlice";

const FilterPanel = () => {
  return (
    <div
      className="w-1/4 mx-8 rounded-lg"
      style={{ backgroundColor: "#F8F9FB" }}
    >
      <div className="container">
        <div className="flex justify-between items-center mb-3 p-5">
          <h5 className="text-lg font-semibold">Filters</h5>
          <span
            onClick={clearFilters}
            className="text-gray-600 cursor-pointer underline text-sm"
          >
            Clear
          </span>
        </div>
        <hr className="text-gray-400 my-8" />
        <div className="mb-4">
          <h5 className="text-lg text-gray-600">PRICE</h5>
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
        <h5 className="text-lg text-gray-400 py-2">Category</h5>
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
  );
};

export default FilterPanel;
