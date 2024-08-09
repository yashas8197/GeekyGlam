import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";

import { Link } from "react-router-dom";
import ServiceHighlights from "@/components/ServiceHighlights/ServiceHighlights";

const slides = [
  {
    img: "https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722769196/circle-slider-3_mewyfg.jpg",
    caption: "Nature's Serenity",
    description:
      "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
  },
  {
    img: "https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722769196/circle-slider-2_vty8mf.jpg",
    caption: "OUR BESTSELLER",
    description:
      "Experience the excitement of adventure with thrilling outdoor activities under a vibrant sky",
  },
  {
    img: "https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722769196/circle-slider-1_oe2emx.jpg",
    caption: "JUST ARRIVED",
    description:
      "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
  },
];

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FB" }}>
      <div className="flex min-h-screen flex-col items-center">
        <Carousel style={{ backgroundColor: "#F8F9FB" }} className="w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="w-full flex-shrink-0">
                <div className="flex justify-between items-center  overflow-hidden">
                  <div className="w-1/2 px-20">
                    <p className="text-blue-400 text-4xl">{slide.caption}</p>
                    <p className="font-sans text-xl">{slide.description}</p>
                    <Link
                      to="/products"
                      state={"All"}
                      className={buttonVariants({
                        variant: "viewButton",
                      })}
                    >
                      <span className="w-0 h-0  bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        VIEW COLLECTIONS
                      </span>
                    </Link>
                  </div>
                  <div className="group">
                    <img
                      src={slide.img}
                      className="p-20 pt-20 duration-300 group-hover:scale-110"
                      alt={slide.caption}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        </Carousel>
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
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722773049/marco-xu-496929-unsplash_x3mctr.jpg"
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
                src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722773049/photo-1591845466204-dd3aba67ea58_fngure.jpg"
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
