import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-4 py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-4xl font-bold font-serif ">{t("title")}</h2>
        <p className="max-w-3xl text-[#868e96] font-sans text-xl font-light text-opacity-100 mb-4">
          {t("category_description")}
        </p>
      </div>
      <div className="grid  sm:grid-cols-2 sm:gap-4">
        <div className="group flex col-span-1 sm:h-full">
          <Link
            className="relative overflow-hidden rounded-none flex-1"
            to="/products"
            state={"Men"}
          >
            <div className="h-full flex justify-start">
              <img
                className="sm:w-full w-[426.4px] sm:h-full h-[230px] mb-4 object-cover filter brightness-75"
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/q_auto,f_auto/v1728029403/nordwood-themes-481980-unsplash-square_ezhuca.jpg"
                alt="Men's Collection"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-widest font-bold">
                {t("mens_collection")}
              </h4>
            </div>
          </Link>
        </div>

        <div className="col-span-1 ">
          <div className="group flex mb-4">
            <Link
              className="relative  overflow-hidden rounded-none"
              to="/products"
              state={"Women"}
            >
              <img
                className="filter brightness-75"
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/q_auto,f_auto/v1728029609/malvestida-magazine-458585-unsplash_t9zd2v.jpg"
                alt="Women's Collection"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-widest  font-bold">
                  {t("womens_collection")}
                </h4>
              </div>
            </Link>
          </div>

          <div className="group flex mt-4">
            <Link
              className="relative overflow-hidden rounded-none"
              to="/products"
              state={"Kids"}
            >
              <img
                className="filter brightness-75"
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto:low/v1727283932/premium_photo-1675183690726-a5d47dbcc14a_1_xpskgo.jpg"
                alt="Kid's Collection"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-widest  font-bold">
                  {t("kids_collection")}
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
