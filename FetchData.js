import {createClient} from '@sanity/client';

const client = createClient({
   projectId: "7vfxofwn",
   dataset: "production",
   useCdn: true,
   apiVersion: '2023-08-13',
})


export async function fetchData(query) {
  return await client.fetch(query);
}
