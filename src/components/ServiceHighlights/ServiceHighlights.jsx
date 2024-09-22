import { useTranslation } from "react-i18next";

const ServiceHighlights = () => {
  const { t } = useTranslation();
  return (
    <div className="m-0 bg-[#F8F9FB]">
      <div className="sm:mx-auto py-20">
        <div className="sm:mx-28">
          <div className="grid sm:grid-cols-3 sm:divide-x-2">
            <div className="flex items-center mx-auto sm:mx-10 sm:w-full w-3/4 py-2">
              <i className="bi bi-truck text-6xl"></i>
              <div className="w-3/4 pl-3">
                <div className="font-bold uppercase">
                  {t("free_shipping_return")}
                </div>
                <div className="font-mono text-gray-600">
                  <small>{t("free_shipping_over")}</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-auto sm:mx-10 sm:w-full w-3/4 py-2">
              <i className="bi bi-currency-bitcoin text-6xl"></i>
              <div className="w-3/4 pl-3">
                <div className="font-bold uppercase">
                  {t("money_back_guarantee")}
                </div>
                <div className="font-mono text-gray-600">
                  <small>{t("money_back_guarantee_30_days")}</small>
                </div>
              </div>
            </div>

            <div className="flex items-center  mx-auto sm:mx-10 sm:w-full w-3/4 py-2">
              <i className="bi bi-telephone text-5xl p-2"></i>
              <div className="w-3/4 pl-3">
                <div className="font-bold">020-800-456-747</div>
                <div className="font-mono text-gray-600">
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
