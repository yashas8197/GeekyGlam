import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const Carousal = () => {
  const slides = [
    {
      img: "https://demo.bootstrapious.com/sell/2-0-1/img/slider/circle-slider-1.jpg",
      caption: "Autumn-colour coats",
      season: "SPECIAL",
      description:
        "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
    },
    {
      img: "https://demo.bootstrapious.com/sell/2-0-1/img/slider/circle-slider-3.jpg",
      season: "SPECIAL",
      caption: "OUR BESTSELLER",
      description:
        "Experience the excitement of adventure with thrilling outdoor activities under a vibrant sky.",
    },
    {
      img: "https://demo.bootstrapious.com/sell/2-0-1/img/slider/circle-slider-2.jpg",
      season: "JUST ARRIVED",
      caption: "Tigerrrs College Jackets",
      description:
        "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
    },
  ];
  return (
    <div>
      <Carousel style={{ backgroundColor: "#F8F9FB" }} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div style={{ width: "95%" }}>
                <div
                  className="h-[600px] bg-no-repeat bg-right flex items-center justify-center px-24 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div className="container">
                    <div className="lg:w-1/2 p-5">
                      <h5 className="uppercase text-gray-500 mb-2 tracking-widest">
                        {slide.season}
                      </h5>
                      <h2 className="text-5xl font-semibold mb-3">
                        {slide.caption}
                      </h2>
                      <p className="text-lg mb-4 text-gray-700">
                        {slide.description}
                      </p>
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
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Carousal;
