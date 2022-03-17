import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const defaultNS = "translation";

// Import i18n resources
const resources = Object.fromEntries(
  Object.entries(import.meta.globEager("../../locales/*.y(a)?ml")).map(
    ([key, value]) => {
      const yaml = key.endsWith(".yaml");
      return [
        key.slice(14, yaml ? -5 : -4),
        {
          [defaultNS]: value.default,
        },
      ];
    }
  )
);

export const install = () => {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",

    resources,
    defaultNS,

    interpolation: {
      prefix: "{",
      suffix: "}",
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
};
