import React, { memo } from 'react';
import styles from '../styles/WhyForWhoStyle.module.css';
import { m } from 'framer-motion'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

// Translation
const WhyContent = dynamic(() => import('./WhyContent'))
const ForWhoContent = dynamic(() => import('./ForWhoContent'))

function WhyForWho({translation}) {
  const router = useRouter()
  const lang = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';



   const [isMobileState, setIsMobileState] = useState(null);
   // const isMobile = 
   useEffect(() => {
      setIsMobileState(window.innerWidth <= 768);
   }, []);

   useEffect(() => {
      function handleResize() {
         setIsMobileState(window.innerWidth <= 768);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   const isMobile = isMobileState;

  return (
    <div className={`${styles.WhyForWhoBg} w-full h-auto flex flex-col justify-center items-center sm:gap-20 gap-10 sm:py-16 py-10 lg:px-0 xl:px-10 px-10`}>

      {/* Header */}
      <div className={`hidden w-full max-w-[1600px] md:flex justify-center items-center text-white sm:text-2xl text-xl ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
        <m.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: .5,
          }}
          className={`${styles.WhyHeader} purple-gradient-to-dark sm:w-[40%] w-[50%] py-5 flex justify-center items-center rounded-full -mr-2 relative`}>
          <div className='absolute w-[34px] h-[34px] rounded-full top-[50%] -left-[22px] -translate-y-[50%] bg-[#8D58A4]' />
          <span className={`uppercase ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>{translation?.why?.title ? translation?.why?.title : 'Why ?'}</span>
        </m.div>
        <m.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{
            duration: .5,
          }}
          className={`${styles.WhoHeader} yellow-gradient-to-light sm:w-[40%] w-[50%] py-5 flex justify-center items-center rounded-full -ml-2 relative`}>
          <div className='absolute w-[34px] h-[34px] rounded-full top-[50%] -right-[22px] -translate-y-[50%] bg-[#FBBC67]' />
          <span className={`uppercase ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>{translation?.forWho?.title ? translation?.forWho?.title : 'For Who ?'}</span>
        </m.div>
      </div>

      {/* Header Mobile 'Why' */}
      <div className='md:hidden purple-gradient-to-dark w-full py-3 flex justify-center items-center rounded-full relative'>
        <div className='absolute w-[24px] h-[24px] rounded-full top-[50%] -left-[15px] -translate-y-[50%] bg-[#8D58A4]' />
        <span className='uppercase text-white sm:text-xl text-lg'>{translation?.why?.title}</span>
        <div className='absolute w-[24px] h-[24px] rounded-full top-[50%] -right-[15px] -translate-y-[50%] bg-[#5357A6]' />
      </div>

      {/* Body */}
      <div className={`${styles.WhyForWhoContainer} w-full flex ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col justify-center items-center lg:gap-6 sm:gap-20 gap-0`}>

        {/* Why Content */}
        <WhyContent translation={translation} isMobile={isMobile} />

        {/* Header Mobile 'For Who' */}
        <div className='md:hidden yellow-gradient-to-dark w-full py-3 flex justify-center items-center rounded-full relative'>
          <div className='absolute w-[24px] h-[24px] rounded-full top-[50%] -left-[15px] -translate-y-[50%] bg-[#FBBC67]' />
          <span className='uppercase text-white sm:text-xl text-lg'>{translation?.forWho?.title}</span>
          <div className='absolute w-[24px] h-[24px] rounded-full top-[50%] -right-[15px] -translate-y-[50%] bg-[#FAA32C]' />
        </div>
        
        {/* Who Content */}
        <ForWhoContent translation={translation} isMobile={isMobile} />
      </div>
    </div>
  )
}
const MemorizedWhyForWho = memo(WhyForWho);
export default MemorizedWhyForWho;