import { useTranslation } from "react-i18next";

const ServiceHighlights = () => {
  const { t } = useTranslation();
  return (
    <div className="m-0 bg-[#F8F9FB]">
      <div className="py-10 md:py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* First Card */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <i className="bi bi-truck text-4xl sm:text-6xl"></i>
              <div className="text-left">
                <div className="font-bold uppercase text-sm sm:text-base">
                  {t("free_shipping_return")}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm font-mono">
                  <small>{t("free_shipping_over")}</small>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <i className="bi bi-currency-bitcoin text-4xl sm:text-6xl"></i>
              <div className="text-left">
                <div className="font-bold uppercase text-sm sm:text-base">
                  {t("money_back_guarantee")}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm font-mono">
                  <small>{t("money_back_guarantee_30_days")}</small>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="flex items-center justify-center md:justify-start  space-x-3">
              <i className="bi bi-telephone text-4xl sm:text-5xl"></i>
              <div className="text-left">
                <div className="font-bold text-sm sm:text-base">
                  020-800-456-747
                </div>
                <div className="text-gray-600 text-xs sm:text-sm font-mono">
                  <small>{t("available_support")}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
