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
            src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/artboard-bag.jpg"
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

        <div className="col-span-8 ml-auto">
          <div className="absolute py-24 z-10 -mt-8">
            <h2 className="sm:text-4xl text-2xl font-bold">
              {t("sweaters_for_her").split(" ").slice(0, 1)} <br />
              {t("sweaters_for_her").split(" ").slice(1, 2)} <br />
              {t("sweaters_for_her").split(" ").slice(2, 3)}
            </h2>
            <p className="text-gray-500 ">{t("price_sweaters")}</p>
            <p>
              <Link
                className="text-dark uppercase sm:block hidden"
                to="/products"
              >
                {t("shop_now")}
              </Link>
            </p>
          </div>
          <div className="ml-24">
            <img
              className="w-full h-auto"
              src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/matthew-kane-365718-unsplash-gray-square.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalProductGrid;
