import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import Carousal from "@/components/Carousel/Carousal";
import { useTranslation } from "react-i18next";
import ProductCategories from "@/components/ProductCategories/ProductCategories";
import PromotionalProductGrid from "@/components/PromotionalProductGrid/PromotionalProductGrid";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-20">
      <div className="flex min-h-screen flex-col">
        <Carousal className="bg-[#F8F9FB]" />
        <div className="py-16 p-4 sm:mx-auto sm:w-1/2">
          <p className="text-gray-500 uppercase py-2">{t("top_choices")}</p>
          <p className="text-2xl font-bold">{t("popular_week")}</p>
          <p className="text-gray-500 sans-serif text-xl font-light py-2">
            {t("popular_description")}
          </p>
        </div>
        <PromotionalProductGrid />
      </div>

      <div className="bg-[#F8F9FA]">
        <ProductCategories />
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default Home;
