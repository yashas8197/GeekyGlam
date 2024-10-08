import ExploreMore from "@/components/ExploreMoreComponent/ExploreMore";
import ProductOverview from "@/components/ProductOverview/ProductOverview";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import { fetchProductDetails } from "@/utils/productDetailsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductInfoSection from "@/components/ProductInfoSection/ProductInfoSection";
import { SyncLoader } from "react-spinners";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.productDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductDetails(productId));
  }, [productId]);

  const fashion = true;

  return (
    <>
      {status === "loading" ? (
        <div className="flex justify-center items-center min-h-screen">
          <SyncLoader size={20} color="#3b82f6" />
        </div>
      ) : (
        <ProductInfoSection product={product} fashion={fashion} />
      )}
      <div className=" container w-full">
        <ProductOverview product={product} />
      </div>
      <div>
        <h4 className="text-center font-bold">YOU MIGHT ALSO LIKE</h4>
        <div className="flex">
          <ExploreMore />
        </div>
      </div>
      <ServiceHighlights />
    </>
  );
};

export default ProductDetails;
