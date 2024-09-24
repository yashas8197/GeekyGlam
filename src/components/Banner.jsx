import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Banner = ({ loca }) => {
  const { t } = useTranslation();
  const category = useSelector((state) => state.productList.filters.categories);
  const bannerContent = {
    All: {
      slogan: t("bannerContent.all.slogan"),
      description: t("bannerContent.all.description"),
    },
    Men: {
      slogan: t("bannerContent.men.slogan"),
      description: t("bannerContent.men.description"),
    },
    Women: {
      slogan: t("bannerContent.women.slogan"),
      description: t("bannerContent.women.description"),
    },
    Kids: {
      slogan: t("bannerContent.kids.slogan"),
      description: t("bannerContent.kids.description"),
    },
  };

  const content = bannerContent[loca] || bannerContent.All;
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center py-20 ">
        <small>
          <Link to="/" className="mx-2">
            Home
          </Link>
          /<span className="text-gray-400 mx-2">{category.join(" & ")}</span>
        </small>
        <h1 className="sm:text-7xl text-4xl font-semibold my-4">
          {content.slogan}
        </h1>
        <p className="text-xl text-gray-400">{content.description}</p>
      </div>
    </>
  );
};

export default Banner;
