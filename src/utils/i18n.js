import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      caption_autumn_coats: "Autumn-colour coats",
      caption_bestseller: "OUR BESTSELLER",
      caption_college_jackets: "Tigerrrs College Jackets",
      season_special: "SPECIAL",
      season_arrived: "JUST ARRIVED",
      description_autumn:
        "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
      description_adventure:
        "Experience the excitement of adventure with thrilling outdoor activities under a vibrant sky.",
      description_sunset:
        "Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.",
      buttonName: "VIEW COLLECTIONS",
    },
  },
  es: {
    translation: {
      caption_autumn_coats: "La serenidad de la naturaleza",
      caption_bestseller: "NUESTRO MÁS VENDIDO",
      caption_college_jackets: "Chaquetas Universitarias Tigerrrs",
      season_special: "ESPECIAL",
      season_arrived: "ACABADO DE LLEGAR",
      description_autumn:
        "Sumérgete en la belleza de una puesta de sol dorada sobre una playa tranquila, perfecta para relajarte.",
      description_adventure:
        "Experimenta la emoción de la aventura con actividades al aire libre emocionantes bajo un cielo vibrante.",
      description_sunset:
        "Sumérgete en la belleza de una puesta de sol dorada sobre una playa tranquila, perfecta para relajarte.",
      buttonName: "VER COLECCIONES",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "an", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
