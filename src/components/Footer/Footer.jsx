import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="py-6 bg-gray-300 text-gray-600">
        <div className="mx-28 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="flex flex-col mb-5 lg:mb-0">
              <div className="font-bold font-serif text-lg text-gray-900 mb-3">
                GeekyGlam<span className="text-blue-500">.</span>
              </div>
              <p>Elevate Every Moment with Our Premium Selections.</p>
            </div>

            <div className="flex flex-col mb-5 lg:mb-0">
              <h6 className="text-uppercase text-gray-900 mb-3">Shop</h6>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                    state={"Women"}
                  >
                    For Women
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                    state={"Men"}
                  >
                    For Men
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                    state={"Kids"}
                  >
                    For Kids
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-blue-500"
                    target="_blank"
                    href="https://hashnode.com/@Yashas8197"
                  >
                    Our Blog
                  </a>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/products"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mb-5 lg:mb-0">
              <h6 className="text-uppercase text-gray-900 mb-3">Company</h6>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-600 hover:text-blue-500" to="/">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-blue-500" to="/">
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-blue-500"
                    to="/profile"
                  >
                    Checkouts
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h6 className="text-uppercase text-gray-900 mb-3">
                Daily Offers & Discounts
              </h6>
              <p className="mb-3">
                Stay ahead with our latest deals and discounts! Subscribe to our
                newsletter for exclusive offers on new arrivals
              </p>
              <form action="#" id="newsletter-form">
                <div className="flex mb-3">
                  <input
                    className="flex-1 bg-transparent border border-gray-400 rounded-l-md px-4 py-2"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <button
                    className=" border border-gray-400 px-4 py-2 flex items-center justify-center"
                    type="submit"
                  >
                    <i className="bi bi-send"></i>
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
            <p className="text-gray-300">
              &copy; 2020 Your company. Feel Free To Replicate.
            </p>
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
