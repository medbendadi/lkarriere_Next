import { Poppins, Source_Sans_3, Almarai } from 'next/font/google'

export const Source_Sans_3_Font = Source_Sans_3({
   weight: ["300", "400"],
   style: ["normal", "italic"],
   display: 'swap',
   subsets: ['latin']
})

export const Poppins_Font = Poppins({
   weight: ["300", "400", "500", "700"],
   style: ["normal", "italic"],
   display: 'swap',
   subsets: ['latin']
   
})

export const Almarai_Font = Almarai({
   weight: ["300", "400", "700"],
   style: ["normal"],
   display: 'swap',
   subsets: ['arabic']
})