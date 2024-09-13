import { Link } from "react-router-dom";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import Carousal from "@/components/Carousel/Carousal";
import { Trans } from "react-i18next";

const Home = () => {
  return (
    <div className="mt-28">
      <div className="flex min-h-screen flex-col">
        <Carousal style={{ backgroundColor: "#F8F9FB" }} />
        <div className="py-16 mx-auto w-1/2">
          <p className="text-gray-500 uppercase py-2">Top Choices</p>
          <p className="text-2xl font-bold">Popular this week</p>
          <p className="text-gray-500 sans-serif text-xl font-light py-2">
            Popular This Week Discover the latest trends and must-have styles.
            From chic ensembles to timeless classics, our curated selection is
            designed to keep you ahead of the fashion curve.
          </p>
        </div>
        <div className="relative mx-28 flex flex-col sm:grid sm:grid-cols-2 sm:gap-4">
          <div className="relative w-3/4 mb-4 ">
            <img
              className="object-cover h-64 md:h-auto"
              src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/product/artboard-bag.jpg"
              alt=""
            />
            <div className="px-4 absolute bottom-0">
              <h3 className="text-3xl font-bold">
                Black
                <br />
                canvas
                <br />
                bag
              </h3>
              <p className="text-gray-500">₹3990</p>
              <p>
                <Link
                  to="/products"
                  className="tracking-widest my-3 uppercase text-sm px-0"
                >
                  Shop now
                </Link>
              </p>
            </div>
          </div>
          <div className="">
            <div className="absolute left-1/2 mt-40">
              <h2 className="text-4xl font-bold">
                Sweaters
                <br />
                for
                <br />
                her
              </h2>
              <p className="text-gray-500">₹3990</p>
              <p>
                <Link className="text-dark px-0 uppercase" to="/products">
                  Shop now
                </Link>
              </p>
            </div>
            <div className="ms-6">
              <img
                className="w-full object-cover h-64 md:h-auto"
                src="https://d19m59y37dris4.cloudfront.net/sell/2-0-1/img/photo/matthew-kane-365718-unsplash-gray-square.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="group flex ">
            <Link
              className="relative overflow-hidden rounded-none"
              to="/products"
              state={"Men"}
            >
              <img
                className=""
                src="https://demo.bootstrapious.com/sell/2-0-1/img/photo/christopher-campbell-28571-unsplash.jpg"
                alt="Men's Collection"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">
                  Men's Collection
                </h4>
              </div>
            </Link>
          </div>

          <div className="group flex ">
            <Link
              className="relative  overflow-hidden rounded-none"
              to="/products"
              state={"Women"}
            >
              <img
                className=""
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto/marco-xu-496929-unsplash_x3mctr.jpg"
                alt="Women's Collection"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">
                  Women's Collection
                </h4>
              </div>
            </Link>
          </div>

          <div className="group flex ">
            <Link
              className="relative overflow-hidden rounded-none"
              to="/products"
              state={"Kids"}
            >
              <img
                className=""
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto:low/photo-1591845466204-dd3aba67ea58_fngure.jpg"
                alt="Kid's Collection"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">
                  Kid's Collection
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default Home;
