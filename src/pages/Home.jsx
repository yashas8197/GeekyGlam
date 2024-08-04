import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { Bitcoin } from "lucide-react";

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
                      className={`${buttonVariants({
                        variant: "viewButton",
                      })} font-sans my-6`}
                      to="/products/All"
                    >
                      VIEW COLLECTIONS
                    </Link>
                  </div>
                  <div className="bg-transparent">
                    <img
                      src={slide.img}
                      className="p-20 pt-20"
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
          <Link className="relative" to="/products/Men">
            <img
              className=""
              src="https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnMlMjBjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D"
              alt="Men's Collection"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold">Men's Collection</h4>
            </div>
          </Link>

          <Link className="relative" to="/products/Women">
            <img
              className=""
              src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722773049/marco-xu-496929-unsplash_x3mctr.jpg"
              alt="Women's Collection"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold">
                Women's Collection
              </h4>
            </div>
          </Link>

          <Link className="relative" to="/products/Kids">
            <img
              className=""
              src="https://res.cloudinary.com/dlrlwy7hg/image/upload/v1722773049/photo-1591845466204-dd3aba67ea58_fngure.jpg"
              alt="Kid's Collection"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold">Kid's Collection</h4>
            </div>
          </Link>
        </div>
      </div>

      <div className="mx-auto py-10">
        <div className="container">
          <div className="grid grid-cols-3 divide-x-2">
            <div className="flex items-center mx-10">
              <img
                src="https://i.pinimg.com/564x/d9/15/f4/d915f415772c58c453e680b31355b2a1.jpg"
                className="w-1/4 object-contain"
                alt="Shipping"
              />
              <div className="w-3/4 pl-3">
                <div className="font-bold text-xl">Free shipping & return</div>
                <div className="font-mono text-gray-600">
                  <small>Free Shipping over ₹300</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <Bitcoin className="w-1/4 h-24 text-gray-800" />
              <div className="w-3/4 pl-3">
                <div className="font-bold text-xl">Money back guarantee</div>
                <div className="font-mono text-gray-600">
                  <small>30 Days Money Back Guarantee</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <img
                src="https://i.pinimg.com/564x/ee/10/15/ee10150445cdadf2871e87cf362bff07.jpg"
                className="w-1/4 object-contain"
                alt="Support"
              />
              <div className="w-3/4 pl-3">
                <div className="font-bold text-xl">020-800-456-747</div>
                <div className="font-mono text-gray-600">
                  <small>24/7 Available Support</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
