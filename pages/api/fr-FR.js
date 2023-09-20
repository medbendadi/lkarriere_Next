import fr from '@/i18n/fr/translation.json'


export default async function handler(req, res) {
         try {
               const data = fr
               return res
               .status(200)
               .json(data);
         } catch (err) {
            console.error(err);
            res.status(500).json({ msg: err });
         }
}