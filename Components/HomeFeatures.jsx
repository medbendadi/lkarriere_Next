import React, { useState, memo } from 'react'
import styles from '../styles/HomeFeatures.module.css'
import { m } from 'framer-motion'
import dynamic from "next/dynamic";

import bg1 from '../public/images/Assets/IMG SVG/Section Video/BG Effect 1.svg'
import bg2 from '../public/images/Assets/IMG SVG/Section Video/BG Effect 2.svg'

// icons
import iconVideo from '../public/images/Assets/Icones/Icones Section Video/icon 4.svg'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';

const FeaturesPipe = dynamic(() => import('./HomeFeaturesPipe'))

const HomeFeatures = ({translation}) => {
   const [active, setActive] = useState(0)

   const handleActive = (item) => {
      if (item === active) {
         setActive(0)
      } else {
         setActive(item)
      }
   }

   const router = useRouter()
   const  lang  = router.query.lang || 'en';
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


   const itemAnimation = {
      hidden: isRTL ? { x: 20, opacity: 0 } : { x: -20, opacity: 0 },
      visible: (custom) => ({
         x: 0,
         opacity: 1,
         transition: {
            type: "spring",
            bounce: 0.4,
            duration: custom
         }
      })
   };

   const [domLoaded, setDomLoaded] = useState(false);

   useEffect(() => {
       setDomLoaded(true);
   }, []);

   if(!domLoaded) return null 
   return (
      <div id='Home-Features' className={`w-full h-auto flex justify-center items-center`}>
         <div className={`w-full max-w-[1600px] ${styles.features} flex  ${isRTL ? 'md:flex-row-reverse flex-col-reverse' : 'md:flex-row flex-col-reverse'} items-center justify-between xl:gap-10 md:gap-5 gap-10 lg:space-x-4 relative xl:px-[10rem] sm:px-[2rem] px-[1rem] py-[4rem]`}>
            <div
               className={`space-y-2 w-full ${isRTL ? 'ar' : ''}`}>
               {
                  translation?.map((item, index) => (
                     <FeaturesPipe key={index} isMobile={isMobile} item={item} index={index} variants={itemAnimation} custom={index === 0 ? 0.3 : (index + 9) / 10} handleActive={handleActive} active={active} />
                  ))
               }
            </div>
            <m.div
               whileInView={{ x: 0, opacity: 1 }}
               initial={isMobile ? undefined : isRTL ? { x: -100, opacity: 0 }: { x: 100, opacity: 0 }}
               transition={isMobile ? {duration: 0} : {
                  duration: .5,
               }}
               className="features_video xl:w-[600px] lg:w-[550px] min-[475px]:w-[450px] w-full lg:h-[350px] h-[250px]" >
               <div className={`${styles.features_video_container} purple-gradient-to-light xl:w-[600px] lg:w-[550px] min-[475px]:w-[450px] w-full lg:h-[350px] h-[250px] relative`}>
                  <button aria-label='play' className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[110px] h-[110px]'>
                     <Image fill className='w-[80px]' src={iconVideo} alt="" loading='lazy' />
                  </button>
               </div>
            </m.div>

            <div className={`${styles.features_bg} ${styles.bg1} absolute sm:block hidden w-[100px] h-[100px]`}>
               <Image fill src={bg1} alt="" loading='lazy' />
            </div>
            <div className={`${styles.features_bg} ${styles.bg2} absolute sm:block hidden w-[100px] h-[100px]`}>
               <Image fill src={bg2} alt="" loading='lazy' />
            </div>
         </div>
      </div>
   )
}
const MemorizedFeatures = memo(HomeFeatures);
export default MemorizedFeatures