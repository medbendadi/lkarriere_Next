

export default async function getTranslations(locale) {
   const base_url = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
   const res = await fetch(`http://localhost:3000/api/en-EN`)
   const data = await res.json()
   return data;
}