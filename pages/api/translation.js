import en from '../../i18n/en/translation.json'
import fr from '../../i18n/fr/translation.json'
import ar_AR from '../../i18n/ar-AR/translation.json'
import ar_MA from '../../i18n/ar-MA/translation.json'

const messages = {
  'en-EN': en,
  'fr-FR': fr,
  'ar-AR': ar_AR,
  'ar-MA': ar_MA
}
export default async function handler(req, res) {
         //this JSON arrives as a string,
         //so we turn it into a JS object with JSON.parse()
   const locale = req.body;
   console.log(locale);
         //then use the Sanity client to create a new todo doc
         try {
            if (locale in messages) {
               const data = messages[locale]
               return res
               .status(200)
               .json(data);
            } else {
               console.error('invalid language');
               return res.status(500).json({ msg: 'invalid language' });
            }
         } catch (err) {
            console.error(err);
            res.status(500).json({ msg: err });
         }

}