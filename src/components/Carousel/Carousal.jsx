import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Carousal = () => {
  const { i18n } = useTranslation();
  const [key, setKey] = useState(0);
  const slides = [
    {
      img: "https://demo.bootstrapious.com/sell/2-0-1/img/slider/circle-slider-1.jpg",
      captionKey: "caption_autumn_coats",
      seasonKey: "season_special",
      descriptionKey: "description_autumn",
    },
    {
      img: "https://demo.bootstrapious.com/sell/2-0-1/img/slider/circle-slider-3.jpg",
      captionKey: "caption_bestseller",
      seasonKey: "season_special",
      descriptionKey: "description_adventure",
    },
    {
      img: "https://demo.bootstrapious.com/sell/2-0-1/img/slider/circle-slider-2.jpg",
      captionKey: "caption_college_jackets",
      seasonKey: "season_arrived",
      descriptionKey: "description_sunset",
    },
  ];

  useEffect(() => {
    const handleLanguageChange = () => {
      setKey((prevKey) => prevKey + 1); // Increment key to trigger a re-render
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener when component is unmounted
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div key={key}>
      <Carousel style={{ backgroundColor: "#F8F9FB" }} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div
                className="relative overflow-hidden"
                style={{ width: "95%" }}
              >
                <div
                  className="h-[600px] bg-no-repeat bg-right flex items-center justify-center px-24"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundPosition: "right bottom",
                  }}
                >
                  <div className="container">
                    <div className="lg:w-1/2 p-5">
                      <h5 className="uppercase text-gray-500 mb-2 tracking-widest">
                        <Trans i18nKey={slide.seasonKey} />
                      </h5>
                      <h2 className="text-5xl font-semibold mb-3">
                        <Trans i18nKey={slide.captionKey} />
                      </h2>
                      <p className="text-lg mb-4 text-gray-700">
                        <Trans i18nKey={slide.descriptionKey} />
                      </p>
                      <Link
                        to="/products"
                        state={"All"}
                        className={buttonVariants({
                          variant: "checkoutButton",
                        })}
                      >
                        <Trans i18nKey="buttonName" />
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
