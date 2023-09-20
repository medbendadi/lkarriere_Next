const dictionaries = {
   'en-EN': () => import("./i18n/en/translation.json").then(r => r.default),
   'fr-FR': () => import("./i18n/fr/translation.json").then(r => r.default),
   'ar-MA': () => import("./i18n/ar-MA/translation.json").then(r => r.default),
   'ar-AR': () => import("./i18n/ar-AR/translation.json").then(r => r.default)
 }
 
 export const getDictionary = (lang) => {
   return dictionaries[lang]();
 }