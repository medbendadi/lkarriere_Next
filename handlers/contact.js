import {createClient} from '@sanity/client'

export const cl = createClient({
   projectId: "7vfxofwn",
   dataset: "production",
   useCdn: false,
   apiVersion: '2023-08-13',
   token: process.env.SANITY_URL
})

export default async function handler(data) {
   // eslint-disable-next-line default-case
         //this JSON arrives as a string,
         //so we turn it into a JS object with JSON.parse()
         //then use the Sanity client to create a new todo doc
         try {
            await cl
               .create({
                  _type: "contact",
                  first_name: data.first_name,
                  last_name: data.last_name,
                  email: data.email,
                  phone: data.phone,
                  createdAt: new Date().toISOString(),
                  message: data.message,
                  status: 'Idle'
               })
               .then((res) => {
                  console.log('Message sent!')
               });
         } catch (err) {
            console.error(err);
         }

}