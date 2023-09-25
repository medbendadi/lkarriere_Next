const dictionaries = {
   'en': () => import("./i18n/en/translation.json").then(r => r.default),
   'fr': () => import("./i18n/fr/translation.json").then(r => r.default),
   'ma': () => import("./i18n/ma/translation.json").then(r => r.default),
   'ar': () => import("./i18n/ar/translation.json").then(r => r.default),
   'z': () => import("./i18n/ⵣ/translation.json").then(r => r.default)
 }
 
 export const getDictionary = (lang) => {
   return dictionaries[lang]();
 }