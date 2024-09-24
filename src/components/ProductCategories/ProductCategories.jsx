import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-4">
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="group flex ">
          <Link
            className="relative overflow-hidden rounded-none"
            to="/products"
            state={"Men"}
          >
            <img
              className=""
              src="https://demo.bootstrapious.com/sell/2-0-1/img/photo/christopher-campbell-28571-unsplash.jpg"
              alt="Men's Collection"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold">
                {t("mens_collection")}
              </h4>
            </div>
          </Link>
        </div>

        <div className="group flex ">
          <Link
            className="relative  overflow-hidden rounded-none"
            to="/products"
            state={"Women"}
          >
            <img
              className=""
              src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto/marco-xu-496929-unsplash_x3mctr.jpg"
              alt="Women's Collection"
              loading="lazy"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold">
                {t("womens_collection")}
              </h4>
            </div>
          </Link>
        </div>

        <div className="group flex ">
          <Link
            className="relative overflow-hidden rounded-none"
            to="/products"
            state={"Kids"}
          >
            <img
              className=""
              src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto:low/photo-1591845466204-dd3aba67ea58_fngure.jpg"
              alt="Kid's Collection"
              loading="lazy"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold">
                {t("kids_collection")}
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
