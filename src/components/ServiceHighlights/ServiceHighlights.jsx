import { useTranslation } from "react-i18next";

const ServiceHighlights = () => {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: "#F8F9FB" }} className="m-0">
      <div className="mx-auto py-20">
        <div className="mx-28">
          <div className="grid grid-cols-3 divide-x-2">
            <div className="flex items-center mx-10">
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

            <div className="flex items-center mx-10">
              <i className="bi bi-currency-bitcoin text-6xl"></i>
              <div className="w-3/4 pl-3">
                <div className="font-bold uppercase">
                  {" "}
                  {t("money_back_guarantee")}
                </div>
                <div className="font-mono text-gray-600">
                  <small>{t("money_back_guarantee_30_days")}</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <img
                src="https://i.pinimg.com/564x/ee/10/15/ee10150445cdadf2871e87cf362bff07.jpg"
                className="w-1/6 object-contain"
                alt="Support"
                loading="lazy"
              />
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
