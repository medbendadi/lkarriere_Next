const dictionaries = {
   'en_EN': () => import("./i18n/en/translation.json").then(r => r.default),
   'fr_FR': () => import("./i18n/fr/translation.json").then(r => r.default),
   'ar_MA': () => import("./i18n/ar_MA/translation.json").then(r => r.default),
   'ar_AR': () => import("./i18n/ar_AR/translation.json").then(r => r.default),
   'AGH_Z': () => import("./i18n/ⵣ/translation.json").then(r => r.default)
 }
 
 export const getDictionary = (lang) => {
   return dictionaries[lang]();
 }