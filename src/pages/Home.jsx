import { Link } from "react-router-dom";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import Carousal from "@/components/Carousel/Carousal";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-20">
      <div className="flex min-h-screen flex-col">
        <Carousal style={{ backgroundColor: "#F8F9FB" }} />
        <div className="py-16 p-4 sm:mx-auto sm:w-1/2">
          <p className="text-gray-500 uppercase py-2">{t("top_choices")}</p>
          <p className="text-2xl font-bold">{t("popular_week")}</p>
          <p className="text-gray-500 sans-serif text-xl font-light py-2">
            {t("popular_description")}
          </p>
        </div>
        <div className="relative sm:mx-28 grid sm:grid-cols-2 gap-4">
          <div className="sm:relative sm:w-3/4 w-full mb-4 ">
            <img
              className="object-cover"
              src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/artboard-bag.jpg"
              alt=""
            />
            <div className="px-4 sm:absolute sm:bottom-0">
              <h3 className="sm:text-3xl font-bold">
                {t("black_canvas_bag").split(" ").slice(0, 1)}
                <br />
                {t("black_canvas_bag").split(" ").slice(1, 2)}
                <br />
                {t("black_canvas_bag").split(" ").slice(2, 3)}
              </h3>
              <p className="text-gray-500">{t("price_bag")}</p>
              <p>
                <Link
                  to="/products"
                  className="tracking-widest my-3 uppercase text-sm px-0"
                >
                  {t("shop_now")}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="absolute sm:left-1/2 sm:mt-40">
              <h2 className="sm:text-4xl text-2xl sm:p-0 pl-3  font-bold">
                {t("sweaters_for_her").split(" ").slice(0, 1)} <br />
                {t("sweaters_for_her").split(" ").slice(1, 2)} <br />
                {t("sweaters_for_her").split(" ").slice(2, 3)}
              </h2>
              <p className="text-gray-500 sm:p-0 pl-3">{t("price_sweaters")}</p>
              <p>
                <Link
                  className="text-dark px-0 sm:p-0 pl-3 uppercase"
                  to="/products"
                >
                  {t("shop_now")}
                </Link>
              </p>
            </div>
            <div className="sm:ms-6 container">
              <img
                className="sm:w-full sm:p-0 pl-10  object-cover sm:h-auto"
                src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/matthew-kane-365718-unsplash-gray-square.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

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
      <ServiceHighlights />
    </div>
  );
};

export default Home;
