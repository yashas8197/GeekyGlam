import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PromotionalProductGrid = () => {
  const { t } = useTranslation();
  return (
    <div className="container sm:my-4 my-10">
      <div className="grid sm:grid-cols-12 gap-4">
        <div className="col-span-4 mt-4 mb-4">
          <img
            className="w-full "
            src="https://res.cloudinary.com/dlrlwy7hg/image/upload/q_auto,f_auto/v1728029403/artboard-bag_y4pm5i.jpg"
            alt=""
          />
          <div className="px-4 sm:relative z-10 -mt-4">
            <h3 className="sm:text-3xl text-xl font-bold leading-tight">
              {t("black_canvas_bag").split(" ").slice(0, 1)}
              <br />
              {t("black_canvas_bag").split(" ").slice(1, 2)}
              <br />
              {t("black_canvas_bag").split(" ").slice(2, 3)}
            </h3>
            <p className="text-gray-500 font-light my-2">{t("price_bag")}</p>
            <p className="my-4">
              <Link
                to="/products"
                className="tracking-widest font-extralight  uppercase text-xs px-0"
              >
                {t("shop_now")}
              </Link>
            </p>
          </div>
        </div>

        <div className="col-span-8 ml-auto mb-8">
          <div className="absolute py-24 z-10 -mt-8">
            <h2 className="sm:text-4xl text-2xl font-bold">
              {t("sweaters_for_her").split(" ").slice(0, 1)} <br />
              {t("sweaters_for_her").split(" ").slice(1, 2)} <br />
              {t("sweaters_for_her").split(" ").slice(2, 3)}
            </h2>
            <p className="text-gray-500 font-light my-2">
              {t("price_sweaters")}
            </p>
            <p className="my-4">
              <Link
                className="text-dark uppercase font-extralight text-xs tracking-widest"
                to="/products"
              >
                {t("shop_now")}
              </Link>
            </p>
          </div>
          <div className="ml-24">
            <img
              className="w-full h-auto"
              src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1728029403/matthew-kane-365718-unsplash-gray-square_rw26ld.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalProductGrid;
