import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./translation/en";
import { sv } from "./translation/sv";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, sv: { translation: sv } },
  lng: localStorage?.getItem("lang") || "en",
});
export default i18n;
