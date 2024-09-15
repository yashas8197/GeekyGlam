import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="py-6 bg-gray-300 text-gray-600">
        <div className="mx-28 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="flex flex-col mb-5 lg:mb-0">
              <div className="font-bold font-serif text-lg text-gray-900 mb-3">
                GeekyGlam<span className="text-blue-500">.</span>
              </div>
              <p>{t("premium_selections")}</p>
            </div>

            <div className="flex flex-col mb-5 lg:mb-0">
              <h6 className="text-uppercase text-gray-900 mb-3">{t("shop")}</h6>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                    state={"Women"}
                  >
                    {t("for_women")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                    state={"Men"}
                  >
                    {t("for_men")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                    state={"Kids"}
                  >
                    {t("for_kids")}
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-blue-500"
                    target="_blank"
                    href="https://hashnode.com/@Yashas8197"
                  >
                    {t("our_blog")}
                  </a>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                  >
                    {t("shop")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mb-5 lg:mb-0">
              <h6 className="text-uppercase text-gray-900 mb-3">
                {t("company")}
              </h6>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-600 hover:text-blue-500" to="/">
                    {t("login")}
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-500" to="/">
                    {t("register")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/wishlist"
                  >
                    {t("wishlist")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/profile"
                  >
                    {t("checkouts")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h6 className="text-uppercase text-gray-900 mb-3">
                {t("daily_offers_discounts")}
              </h6>
              <p className="mb-3">{t("subscribe_newsletter")}</p>
              <form action="#" id="newsletter-form">
                <div className="flex mb-3">
                  <input
                    className="flex-1 bg-transparent border border-gray-400 rounded-l-md px-4 py-2"
                    type="email"
                    placeholder={t("your_email_address")}
                    aria-label={t("your_email_address")}
                  />
                  <button
                    className="border border-gray-400 px-4 py-2 flex items-center justify-center"
                    type="submit"
                  >
                    {t("send")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0">
        <div className="bg-gray-600">
          <div className="mx-28 py-7 flex justify-between">
            <p className="text-gray-300">&copy;{t("copyright_notice")}</p>
            <div className="flex space-x-4">
              <a href="https://github.com/yashas8197" target="_blank">
                <i className="bi bi-github text-gray-400 hover:text-gray-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yashas-v-b5b41a26a/"
                target="_blank"
              >
                <i className="bi bi-linkedin text-gray-400 hover:text-gray-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
