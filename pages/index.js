import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import dynamic from "next/dynamic";
const Meta = dynamic(() => import('../components/Meta'))
const NavBar = dynamic(() => import('../components/NavBar'))
import { useState, useEffect } from 'react';
import getTranslations from '@/handlers/getTranslations';

import { Phone } from '@mui/icons-material'


const index = ({}) => {
  const { locale, locales } = useRouter();

  const [translation, setTranslation] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTranslations(locale)
      setTranslation(data)
      console.log(data);
    }
    getData()
  }, [locale]);

  return (
    <>
      <Meta title='Home' />
      <div className={`app flex flex-col items-center overflow-hidden`} id='scrollPage'>
            <div className="navbar_container relative">
              <NavBar translation={translation.navbar} openModal={() => setHandleModal(true)} />
            </div>
            {/* <Hero /> */}
            {/* <Features /> */}
            {/* <WhyForWho /> */}
            {/* <Bootcamps /> */}
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
               <Link href="https://wa.me/212677438317" target='_blanc'>
                  <div className={`fixed flex items-center justify-center w-[40px] z-[99] h-[40px] bottom-[30px] bg-[#40c351] rounded-full p-6 hover:bg-[#36a444] transition duration-300 cursor-pointer ${locale === 'ar-AR' || locale === 'ar-MA' ? 'left-[40px]' : 'right-[40px]'}`}>
                     <Phone htmlColor='#fff' fontSize='large'/>
                  </div>
                  <div className={`fixed bottom-[23.8px] w-[60px] h-[60px] bg-white z-[55] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.4)] ${locale === 'ar-AR' || locale === 'ar-MA' ? 'left-[33.9px]' : 'right-[33.9px]'}`}></div>
               </Link>
         </div>
    </>
  )
}


export default index