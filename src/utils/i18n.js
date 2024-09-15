import i18next from "i18next";
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

      // New translations for the div content
      top_choices: "Top Choices",
      popular_week: "Popular this week",
      popular_description:
        "Popular This Week Discover the latest trends and must-have styles. From chic ensembles to timeless classics, our curated selection is designed to keep you ahead of the fashion curve.",

      // Translations for the new section
      black_canvas_bag: "Black canvas bag",
      price_bag: "₹3990",
      shop_now: "Shop now",

      // New translations for collections
      mens_collection: "Men's Collection",
      womens_collection: "Women's Collection",
      kids_collection: "Kid's Collection",

      sweaters_for_her: "Sweaters for her",
      price_sweaters: "₹3990",
      shop_now: "Shop now",

      // New translations
      free_shipping_return: "Free shipping & return",
      free_shipping_over: "Free Shipping over ₹300",

      // New translations
      money_back_guarantee: "Money back guarantee",
      money_back_guarantee_30_days: "30 Days Money Back Guarantee",

      available_support: "24/7 Available Support",

      // New translation
      premium_selections: "Elevate Every Moment with Our Premium Selections.",

      // New translations
      shop: "Shop",
      for_women: "For Women",
      for_men: "For Men",
      for_kids: "For Kids",
      our_blog: "Our Blog",
      company: "Company",
      login: "Login",
      register: "Register",
      wishlist: "Wishlist",
      checkouts: "Checkouts",
      daily_offers_discounts: "Daily Offers & Discounts",
      subscribe_newsletter:
        "Stay ahead with our latest deals and discounts! Subscribe to our newsletter for exclusive offers on new arrivals",
      your_email_address: "Your Email Address",
      send: "Send",

      copyright_notice: " 2020 GeekyGlam. Feel Free To Replicate.",

      bannerContent: {
        all: {
          category: "All",
          slogan: "Fashion for Everyone",
          description:
            "Browse a diverse selection of clothing for all ages and styles.",
        },
        men: {
          category: "Men",
          slogan: "Elevate Your Style",
          description:
            "Discover a range of sophisticated and trendy styles tailored for men.",
        },
        women: {
          category: "Women",
          slogan: "Unleash Your Elegance",
          description:
            "Explore the latest in women's fashion with our elegant and chic collections.",
        },
        kids: {
          category: "Kids",
          slogan: "Fun and Fashionable",
          description:
            "Brighten up your little one's wardrobe with our playful and comfortable clothing.",
        },
      },
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

      // New translations for the div content
      top_choices: "Mejores opciones",
      popular_week: "Popular esta semana",
      popular_description:
        "Popular Esta Semana Descubre las últimas tendencias y estilos imprescindibles. Desde conjuntos elegantes hasta clásicos atemporales, nuestra selección curada está diseñada para mantenerte a la vanguardia de la moda.",

      // Translations for the new section
      black_canvas_bag: "Bolsa de lona negra",
      price_bag: "₹3990",
      shop_now: "Compra ahora",

      // New translations for sweaters section
      sweaters_for_her: "Suéteres para ella",
      price_sweaters: "₹3990",
      shop_now: "Compra ahora",

      // New translations for collections
      mens_collection: "Colección para hombres",
      womens_collection: "Colección para mujeres",
      kids_collection: "Colección para niños",

      // New translations
      free_shipping_return: "Envío y devoluciones gratis",
      free_shipping_over: "Envío gratis para pedidos ₹300",

      // New translations
      money_back_guarantee: "Garantía de devolución de",
      money_back_guarantee_30_days: "Garantía de devolución de  30 días",

      available_support: "Soporte disponible 24/7",

      // New translation
      premium_selections:
        "Eleva cada momento con nuestras selecciones premium.",

      // New translations
      shop: "Tienda",
      for_women: "Para mujeres",
      for_men: "Para hombres",
      for_kids: "Para niños",
      our_blog: "Nuestro Blog",
      company: "Empresa",
      login: "Iniciar sesión",
      register: "Registrarse",
      wishlist: "Lista de deseos",
      checkouts: "Pagos",
      daily_offers_discounts: "Ofertas y descuentos diarios",
      subscribe_newsletter:
        "¡Mantente al día con nuestras últimas ofertas y descuentos! Suscríbete a nuestro boletín para ofertas exclusivas sobre nuevas llegadas",
      your_email_address: "Tu dirección de correo electrónico",
      send: "Enviar",

      copyright_notice: " 2020 GeekyGlam. Siéntete libre de replicar.",

      bannerContent: {
        all: {
          category: "Todo",
          slogan: "Moda para todos",
          description:
            "Explora una selección diversa de ropa para todas las edades y estilos.",
        },
        men: {
          category: "Hombres",
          slogan: "Eleva tu estilo",
          description:
            "Descubre una gama de estilos sofisticados y modernos para hombres.",
        },
        women: {
          category: "Mujeres",
          slogan: "Desata tu elegancia",
          description:
            "Explora lo último en moda femenina con nuestras colecciones elegantes y chic.",
        },
        kids: {
          category: "Niños",
          slogan: "Divertido y a la moda",
          description:
            "Ilumina el guardarropa de tus pequeños con nuestra ropa cómoda y divertida.",
        },
      },
    },
  },
  kn: {
    // Kannada translations
    translation: {
      caption_autumn_coats: "ಶರತ್ಕಾಲದ ಬಣ್ಣದ ಕೋಟ್ಸ್",
      caption_bestseller: "ನಮ್ಮ ಅತ್ಯುತ್ತಮ ಮಾರಾಟ",
      caption_college_jackets: "ಟಿಗರ್ಸ್ ಕಾಲೇಜ್ ಜಾಕೆಟ್ಸ್",
      season_special: "ವಿಶೇಷ",
      season_arrived: "ಹೊಸವಾಗಿ ಬಂದಿದೆ",
      description_autumn:
        "ಶಾಂತವಾದ ಬೀಚ್ ಮೇಲೆ ಬಿಳಿಯ ಸೂರ್ಯಮಿತಿ ಮತ್ತು ಶ್ರೇಷ್ಠವಾದ ವಿಶ್ರಾಂತಿ ಎಂದು ಚಿನ್ನದ ನೋಟದಲ್ಲಿ ನಿಮಗೆ ತೇಲಿಸಿ.",
      description_adventure:
        "ಬ್ರಾಹ್ಮಣ ಹಾಸ್ಯದ ಮೇಲೆ ನಿಂಗಿ ಆನಂದವನ್ನು ಅನುಭವಿಸಿ. ಚಿರಪಾತ ಹಾರಿಯ ಮೇಲೆ ಉಲ್ಲಾಸಕರ ಕ್ರಿಯೆಗಳೊಂದಿಗೆ.",
      description_sunset:
        "ಶಾಂತವಾದ ಬೀಚ್ ಮೇಲೆ ಬಿಳಿಯ ಸೂರ್ಯಮಿತಿ ಮತ್ತು ಶ್ರೇಷ್ಠವಾದ ವಿಶ್ರಾಂತಿ ಎಂದು ಚಿನ್ನದ ನೋಟದಲ್ಲಿ ನಿಮಗೆ ತೇಲಿಸಿ.",
      buttonName: "ಕಲೆಕ್ಷನ್‌ಗಳನ್ನು ನೋಡಿ",

      // New translations for the div content
      top_choices: "ಮೆಟ್ಟಿಲು ಆಯ್ಕೆಗಳನ್ನು",
      popular_week: "ಈ ವಾರದ ಜನಪ್ರಿಯ",
      popular_description:
        "ಈ ವಾರದ ಜನಪ್ರಿಯತೆ: ಹೊಸ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಮತ್ತು ಅಗತ್ಯವಾದ ಶೈಲಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಸಿಖ್ ensembles ನಿಂದ ಶಾಶ್ವತ ಶ್ರೇಷ್ಠಗಳನ್ನು, ನಮ್ಮ ಆಯ್ಕೆ ಮಾಡಲಾದ ಆಯ್ಕೆವು ನಿಮ್ಮನ್ನು ಫ್ಯಾಷನ್ ವೃತ್ತಿಗೆ ಮುನ್ನಡೆಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",

      // Translations for the new section
      black_canvas_bag: "ಕಪ್ಪು ಕಾವಲು ಚೀಲ",
      price_bag: "₹3990",
      shop_now: "ಈಗ ಖರೀದಿ",

      sweaters_for_her: "ಆಕೆಗಾಗಿ ಸ್ವೆಟರ್‌ಗಳು",
      price_sweaters: "₹3990",
      shop_now: "ಈಗ ಶಾಪ್ ಮಾಡಿ",

      // New translations for collections
      mens_collection: "ಪುರುಷರ ಸಂಗ್ರಹ",
      womens_collection: "ಮಹಿಳೆಗಳ ಸಂಗ್ರಹ",
      kids_collection: "ಮಕ್ಕಳ ಸಂಗ್ರಹ",

      // New translations
      free_shipping_return: "ನಿರ್ವಹಣಾ & ವಾಪಸು",
      free_shipping_over: "₹300 ಗೆ ಮೇಲು ಉಚಿತ ಸಾಗಣೆ",

      // New translations
      money_back_guarantee: "ಹಣ ಮರಳಿಸುವ ಗ್ಯಾರಂಟಿ",
      money_back_guarantee_30_days: "30 ದಿನದ ಹಣ ಮರಳಿಸುವ ಗ್ಯಾರಂಟಿ",

      available_support: "24/7 ಲಭ್ಯವಿರುವ ಬೆಂಬಲ",

      // New translation
      premium_selections:
        "ನಮ್ಮ ಪ್ರೀಮಿಯಂ ಆಯ್ಕೆಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಕ್ಷಣವನ್ನು ಏರಿಸಿ.",

      // New translations
      shop: "ಆಯ್ಕೆ",
      for_women: "ಮಹಿಳೆಯರಿಗೆ",
      for_men: "ಪುರುಷರಿಗೆ",
      for_kids: "ಮಕ್ಕಳಿಗೆ",
      our_blog: "ನಮ್ಮ ಬ್ಲಾಗ್",
      company: "ಕಂಪನಿಯು",
      login: "ಲಾಗಿನ್",
      register: "ರಿಜಿಸ್ಟರ್",
      wishlist: "ಈಗಲು",
      checkouts: "ಚೆಕ್ಔಟ್ಸ್",
      daily_offers_discounts: "ದೈನಂದಿನ ಆಫರ್‌ಗಳು ಮತ್ತು ರಿಯಾಯಿತಿಗಳು",
      subscribe_newsletter:
        "ನಮ್ಮ ಹೊಸ ನಿರ್ವಹಣೆಗಳಲ್ಲಿ ನಾವಿದ್ದಾಗ ಡೀಲ್ಗಳೊಂದಿಗೆ ಎದುರಿಸಿ! ಹೊಸ ಪ್ರಸಿದ್ಧ ಆಫರ್‌ಗಳನ್ನು ಪಡೆಯಲು ನಮ್ಮ ನ್ಯೂಸ್‌ಲೆಟರ್‌ಗೆ ಚಂದಾ ಹಾಕಿ",
      your_email_address: "ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ",
      send: "ಕಳಿಯಿರಿ",

      copyright_notice: "2020 GeekyGlam. ಪುನರಾವೃತ್ತಿಗಾಗಿ ಮುಕ್ತವಾಗಿರಿ.",

      bannerContent: {
        all: {
          category: "ಎಲ್ಲಾ",
          slogan: "ಎಲ್ಲರಿಗೂ ಫ್ಯಾಷನ್",
          description:
            "ಎಲ್ಲಾ ವಯಸ್ಸಿನವರ ಮತ್ತು ಶೈಲಿಗಳ ವಿವಿಧ ಆಯ್ಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
        },
        men: {
          category: "ಪುರುಷರು",
          slogan: "ನಿಮ್ಮ ಶೈಲಿಯನ್ನು ಏರಿಸಿ",
          description:
            "ಪುರುಷರಿಗಾಗಿ ಸೊphisಿತ್ತಿಕೆ ಮತ್ತು ಟ್ರೆಂಡಿ ಶೈಲಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
        },
        women: {
          category: "ಮಹಿಳೆಯರು",
          slogan: "ನಿಮ್ಮ ಎಲೆಗನ್ಸ್ ಅನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿ",
          description:
            "ನಮ್ಮ ಅಡುಗೆಯ ಮತ್ತು ಗ್ಲಾಮರಸ್ ಸಂಗ್ರಹದೊಂದಿಗೆ ಮಹಿಳಾ ಫ್ಯಾಷನ್ ಅನ್ನು ಅನ್ವೇಷಿಸಿ.",
        },
        kids: {
          category: "ಮಕ್ಕಳು",
          slogan: "ಆನಂದಕರ ಮತ್ತು ಫ್ಯಾಷನ್",
          description:
            "ನಿಮ್ಮ ಚಿಕ್ಕವರ ಬಟ್ಟೆಯ ಅಲ್ಮಾರಿಯನ್ನು ನಮ್ಮ ಆನಂದಕರ ಮತ್ತು ಆರಾಮದಾಯಕ ಬಟ್ಟೆಯೊಂದಿಗೆ ಬೆಳಗಿಸಿ.",
        },
      },
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
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
