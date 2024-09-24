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
      <Carousel className="w-full bg-[#FFFFFF] sm:bg-[#F8F9FB]">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="sm:w-full h-full">
              <div className="sm:w-[95%] w-full">
                <div
                  className="sm:h-[620px] h-[28rem] sm:opacity-100 opacity-80 bg-center-bottom bg-no-repeat sm:bg-right-bottom bg-cover sm:bg-auto  flex items-center justify-center sm:px-24"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                  }}
                >
                  <div className="sm:container">
                    <div className="sm:w-1/2 w-full p-5">
                      <h5 className="uppercase text-gray-800 text-2xl mb-2 tracking-widest">
                        <Trans i18nKey={slide.seasonKey} />
                      </h5>
                      <h2 className="sm:text-5xl text-3xl font-semibold mb-3">
                        <Trans i18nKey={slide.captionKey} />
                      </h2>
                      <p className="text-lg mb-4">
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
