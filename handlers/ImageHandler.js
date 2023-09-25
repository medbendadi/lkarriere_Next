import ImageUrlBuilder from '@sanity/image-url';

import {createClient} from '@sanity/client';

const client = createClient({
   projectId: "7vfxofwn",
   dataset: "production",
   useCdn: true,
   apiVersion: '2023-08-13',
})



const builder = ImageUrlBuilder(client)

export default function urlFor(source) {
   return builder.image(source)
}
