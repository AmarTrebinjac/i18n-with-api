import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

const loadResources = async (locale: string) => {
  const res = await fetch("https://localhost:7007/translations?languageCode=" + locale);
  return await res.json();
};

const backendOptions = {
  loadPath: "{{lng}}|{{ns}}",
  request: (options: any, url: any, payload: any, callback: any) => {
    try {
      const [lng] = url.split("|");
      loadResources(lng).then((response) => {
        callback(null, {
          data: response,
          status: 200,
        });
      });
    } catch (e) {
      console.error(e);
      callback(null, {
        status: 500,
      });
    }
  },
};

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: backendOptions,
    fallbackLng: "en",
    debug: false,
    load: "languageOnly",
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    }
  });

export default i18n;
