import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import dynamic from "next/dynamic";
const Meta = dynamic(() => import('../../Components/Meta'))
const NavBar = dynamic(() => import('../../Components/NavBar'), {
  loading: () => <p></p>,
})
const Hero = dynamic(() => import('../../Components/Hero'), {
  loading: () => <p></p>,
})
const Features = dynamic(() => import('../../Components/HomeFeatures'), {
  loading: () => <p></p>,
})
const WhyForWho = dynamic(() => import('../../Components/WhyForWho'), {
  loading: () => <p></p>,
})

const Bootcamps = dynamic(() => import('../../Components/Bootcamps'), {
  loading:() => <div></div>,
})


import { Phone } from '@mui/icons-material'
import { getDictionary } from '@/getTranslation';


const index = ({ translation }) => {
  const router = useRouter()
  const lang  = router.query.lang;

  
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
      <Bootcamps translation={translation?.home?.bootcamps} lang={lang} />
      {/* <HowItWorks /> */}
      {/* <Partners /> */}
      {/* <Coaches /> */}
      {/* <Reviews icon={true} /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {
        //  handleModal ? (<JoinForm  onClose={() => setHandleModal(false)}/>) : null
      }
      
          {/* Whatssap Icon */}
          <Link aria-label='Whatsapp' href="https://wa.me/212677438317" target='_blanc'>
            <div className={`fixed flex items-center justify-center w-[40px] z-[99] h-[40px] bottom-[30px] bg-[#40c351] rounded-full p-6 hover:bg-[#36a444] transition duration-300 cursor-pointer ${lang === 'ar_AR' || lang === 'ar_MA' ? 'left-[40px]' : 'right-[40px]'}`}>
                <Phone htmlColor='#fff' fontSize='large'/>
            </div>
            <div className={`fixed bottom-[23.8px] w-[60px] h-[60px] bg-white z-[55] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.4)] ${lang === 'ar_AR' || lang === 'ar_MA' ? 'left-[33.9px]' : 'right-[33.9px]'}`}></div>
          </Link>
    </div>
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
      { params: { lang: 'AGH_Z' } },
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
export default index