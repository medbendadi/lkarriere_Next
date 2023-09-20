import en from '@/i18n/en/translation.json'


export default async function handler(req, res) {
         try {
               const data = en
               return res
               .status(200)
               .json(data);
         } catch (err) {
            console.error(err);
            res.status(500).json({ msg: err });
         }
}