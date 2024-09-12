import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          caption: "<0>Nature's Serenity<0>",
          description:
            "<0>Immerse yourself in the beauty of a golden sunset over a tranquil beach, perfect for relaxation.<0>",
          buttonName: "VIEW COLLECTION",
        },
      },
      sp: {
        translation: {
          caption: "<0>La serenidad de la naturaleza<0>",
          description:
            "<0>Sumérgete en la belleza de una puesta de sol dorada sobre una playa tranquila, perfecta para relajarte.<0>",
          buttonName: "VER COLECCIÓN",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
