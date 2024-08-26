import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Carousal = () => {
  const slides = [
    {
      img: "https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto:low/circle-slider-3_mewyfg.jpg",
      caption: "Nature's Serenity",
      description:
        "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
    },
    {
      img: "https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto:low/circle-slider-2_vty8mf.jpg",
      caption: "OUR BESTSELLER",
      description:
        "Experience the excitement of adventure with thrilling outdoor activities under a vibrant sky.",
    },
    {
      img: "https://res.cloudinary.com/dlrlwy7hg/image/upload/f_webp/q_auto:low/circle-slider-1_oe2emx.jpg",
      caption: "JUST ARRIVED",
      description:
        "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
    },
  ];
  return (
    <div>
      <Carousel style={{ backgroundColor: "#F8F9FB" }} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0">
              <div className="flex justify-between items-center  overflow-hidden">
                <div className="w-1/2 px-20">
                  <p className="text-blue-400 text-4xl">{slide.caption}</p>
                  <p className="font-sans text-xl mb-4">{slide.description}</p>
                  <Link
                    to="/products"
                    state={"All"}
                    className={buttonVariants({
                      variant: "checkoutButton",
                    })}
                  >
                    VIEW COLLECTIONS
                  </Link>
                </div>
                <div className="group">
                  <img
                    src={slide.img}
                    className="p-20 pt-20 duration-300 group-hover:scale-110"
                    alt={slide.caption}
                    loading="lazy"
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
  );
};

export default Carousal;
