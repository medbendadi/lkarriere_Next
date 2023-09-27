import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import dynamic from "next/dynamic";
const Meta = dynamic(() => import('../../components/Meta'))
const NavBar = dynamic(() => import('../../components/NavBar/NavBar'), {
  loading: () => <div></div>,
})
const Hero = dynamic(() => import('../../components/Home/Hero/Hero'), {
  loading: () => <div></div>,
})
const Features = dynamic(() => import('../../components/Home/Features/HomeFeatures'), {
  loading: () => <div></div>,
})
const WhyForWho = dynamic(() => import('../../components/Home/whyForWho/WhyForWho'), {
  loading: () => <div></div>,
})
const Bootcamps = dynamic(() => import('../../components/Home/Bootcamps/Bootcamps'), {
  loading: () => <div></div>,
})

const HowItWorks = dynamic(() => import('../../components/Home/HowItWorks/HowItWorks'), {
  loading: () => <div></div>,
})
const Partners = dynamic(() => import('../../components/Home/Partners/Partners'), {
  loading: () => <div></div>,
})
const Coaches = dynamic(() => import('../../components/Home/Coaches/Coaches'), {
  loading: () => <div></div>,
})
const Reviews = dynamic(() => import('../../components/Home/Reviews/Reviews'), {
  loading: () => <div></div>,
})
const Contact = dynamic(() => import('../../components/Home/Contact/Contact'), {
  loading: () => <div></div>,
})
const JoinForm = dynamic(() => import('../../components/JoinFom'), {
  loading: () => <div></div>,
})

const Footer = dynamic(() => import('../../components/Footer'), {
  loading: () => <div></div>,
})

import { fetchData } from '../../FetchData';

import { getDictionary } from '@/getTranslation';
import { useState } from 'react';


const index = ({ translation, camps, reviews }) => {
  const [handleModal, setHandleModal] = useState(false)
  const {
    isFallback,
} = useRouter();

if (isFallback) {
    return <h1>Fallback</h1>;
}
  
  const router = useRouter()
  const lang  = router.query.lang;
  const isRTL = lang === 'ar' || lang === 'ma';
  
  return (
    <>
      <Meta title='Home' />
      <div className={`app flex flex-col items-center overflow-hidden`} id='scrollPage'>
      <div className="navbar_container relative">
        <NavBar translation={translation.navbar} openModal={() => setHandleModal(true)} />
      </div>
            <Hero translation={translation.home?.hero_section} lang/>
            <Features translation={translation.home?.features}/>
        <WhyForWho translation={translation.home} />
            <Bootcamps camps={camps} translation={translation.home?.bootcamps} translationButtons={translation.buttons}/>
            <HowItWorks translation={translation.home?.howItWorks}/>
            <Partners translation={translation.home?.ourPartners} translationButtons={translation.buttons}/>
            <Coaches translation={translation.home?.coaches}/>
        <Reviews icon={true} translation={translation} reviews={reviews} />
            <Contact translation={translation.home?.contact}/>
            <Footer translation={translation?.footer} isRTL={isRTL} />
            {
               handleModal ? (<JoinForm translation={translation.form} onClose={() => setHandleModal(false)}/>) : null
        }
            
               {/* Whatssap Icon */}
               <Link aria-label='Whatsapp' href="https://wa.me/212677438317" target='_blanc'>
                  <div className={`fixed flex items-center justify-center w-[40px] z-[99] h-[40px] bottom-[30px] bg-[#40c351] rounded-full p-6 hover:bg-[#36a444] transition duration-300 cursor-pointer ${lang === 'ar' || lang === 'ma' ? 'left-[40px]' : 'right-[40px]'}`}>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                  </div>
                  <div className={`fixed bottom-[23.8px] w-[60px] h-[60px] bg-white z-[55] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.4)] ${lang === 'ar' || lang === 'ma' ? 'left-[33.9px]' : 'right-[33.9px]'}`}></div>
               </Link>
         </div>
    </>
  )
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'ar' } },
      { params: { lang: 'ma' } },
      { params: { lang: 'en' } },
      { params: { lang: 'fr' } },
      { params: { lang: 'z' } },
    ],
    fallback: false, // Set to false or true depending on your requirements
  };
}

export async function getStaticProps({ params }) {
  
  const translation = await getDictionary(params.lang)
  const camps = await fetchData(`*[_type == "bootcamps"]`)
  const reviews = await fetchData(`*[_type == "reviews"]{
    name,
    bootcamp->{
       title
    },
    comment,
    video,
    image
 }`)
  

  return {
    props: {
      translation: translation || [],
      camps,
      reviews
    },
  };

}
export default index