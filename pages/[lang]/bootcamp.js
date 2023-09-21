import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import dynamic from "next/dynamic";
const Meta = dynamic(() => import('../../components/Meta'))
const NavBar = dynamic(() => import('../../components/NavBar'))
const Hero = dynamic(() => import('../../components/Hero'))

import { Phone } from '@mui/icons-material'
import { getDictionary } from '@/getTranslation';


const Bootcamp = ({ translation }) => {
   const router = useRouter()
   const { pathname } = router
   const location = pathname.replace('/[lang]/', '');
  const { lang } = router.query;

  return (
    <>
      <Meta title='Bootcamp' />
        {
           translation?.home?.contact?.formDescription
        }
        <br/>
        <Link href={`/ar_AR/${location}`} >AR</Link>
        <br/>
        {/* {
           location
} */}
    </>
  )
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'ar_AR' } },
      { params: { lang: 'ar_MA' } },
      { params: { lang: 'en_EN' } },
      { params: { lang: 'fr_FR' } },
    ],
    fallback: false, // Set to false or true depending on your requirements
  };
}

export async function getStaticProps({ params }) { 
  const translation = await getDictionary(params.lang)
  return {
    props: {
      translation: translation || [],
    },
  };

}
export default Bootcamp