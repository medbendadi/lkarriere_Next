

export default async function getTranslations(locale) {
   const res = await fetch('/api/translation',
      {
         method: 'POST',
         body: locale
      });
   const data = await res.json()
   if (data) {
      return data
   } else {
      return []
   }
}