import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Banner = ({ loca }) => {
  const category = useSelector((state) => state.productList.filters.categories);
  const bannerContent = [
    {
      category: "All",
      slogan: "Fashion for Everyone",
      description:
        "Browse a diverse selection of clothing for all ages and styles. ",
    },
    {
      category: "Men",
      slogan: "Elevate Your Style",
      description:
        "Discover a range of sophisticated and trendy styles tailored for men.",
    },
    {
      category: "Women",
      slogan: "Unleash Your Elegance",
      description:
        "Explore the latest in women's fashion with our elegant and chic collections.",
    },
    {
      category: "Kids",
      slogan: "Fun and Fashionable",
      description:
        "Brighten up your little one's wardrobe with our playful and comfortable clothing.",
    },
  ];

  const content = bannerContent.find((item) => item.category === loca);
  return (
    <>
      <div className="flex flex-wrap flex-col text-center py-20">
        <small>
          <Link to="/" className="mx-2">
            Home
          </Link>
          /<span className="text-gray-400 mx-2">{category.join(" & ")}</span>
        </small>
        <h1 className="text-7xl font-bold my-4">{content.slogan}</h1>
        <p className="text-xl text-gray-400">{content.description}</p>
      </div>
    </>
  );
};

export default Banner;
