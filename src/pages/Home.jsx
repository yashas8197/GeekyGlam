import { Link } from "react-router-dom";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";
import Carousal from "@/components/Carousel/Carousal";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FB" }}>
      <div className="flex min-h-screen flex-col items-center">
        <Carousal />
      </div>

      <div className="container mx-auto my-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="group flex shadow-xl">
            <Link
              className="relative overflow-hidden rounded-xl opacity-80 group-hover:opacity-100 duration-300 "
              to="/products"
              state={"Men"}
            >
              <img
                className="duration-300 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnMlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D"
                alt="Men's Collection"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">
                  Men's Collection
                </h4>
              </div>
            </Link>
          </div>

          <div className="group flex shadow-xl">
            <Link
              className="relative  overflow-hidden rounded-xl opacity-80 group-hover:opacity-100 duration-300 "
              to="/products"
              state={"Women"}
            >
              <img
                className="duration-300 group-hover:scale-110"
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto/marco-xu-496929-unsplash_x3mctr.jpg"
                alt="Women's Collection"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">
                  Women's Collection
                </h4>
              </div>
            </Link>
          </div>

          <div className="group flex shadow-xl">
            <Link
              className="relative  overflow-hidden rounded-xl opacity-80 group-hover:opacity-100 duration-300"
              to="/products"
              state={"Kids"}
            >
              <img
                className=" duration-300 group-hover:scale-110"
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto/photo-1591845466204-dd3aba67ea58_fngure.jpg"
                alt="Kid's Collection"
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
