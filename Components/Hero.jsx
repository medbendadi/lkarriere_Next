import React, { memo } from 'react'
import {m} from 'framer-motion'
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Hero.module.css'


import textSvg from '../public/images/Assets/IMG SVG/Section Bar/Text.svg';
import personSvg from '../public/images/Assets/IMG SVG/Section Bar/Person 1.svg';
import barSvg from '../public/images/Assets/IMG SVG/Section Bar/Sign 1.svg';
import sign1Svg from '../public/images/Assets/IMG SVG/Section Bar/Sign P1.svg';
import sign1SvgAr from '../public/images/Assets/IMG SVG/Section Bar/Sign 1 AR.svg';
import sign4SvgAr from '../public/images/Assets/IMG SVG/Section Bar/Sign 4 AR.svg';
import sign2Svg from '../public/images/Assets/IMG SVG/Section Bar/Sign P2.svg';
import sign3Svg from '../public/images/Assets/IMG SVG/Section Bar/Sign P3.svg';
import sign4Svg from '../public/images/Assets/IMG SVG/Section Bar/Sign P4.svg';
import { useEffect } from 'react';
import useMobileOrResponsive from '../hooks/useMobileOrResponsive';
import { useState } from 'react';


const container = {
   visible: {
      transition: {
         delay: 0.5,
         delayChildren: .9,
         staggerChildren: 0.5
      }
   }
};

const itemAnimation = {
   hidden: (custom) => (custom.y ? { y: 200, opacity: 0 } : { x: custom.x, opacity: 0 }),
   visible: (custom) => (custom.y ? {
      y: 0, opacity: 1, transition: {
         duration: 0.8
      }
   } : {
      x: 0,
      opacity: 1,
      transition: {
         duration: 0.8
      }
   })
};
const Hero = ({ translation }) => {
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

   const router = useRouter()
  const lang = router.query.lang || 'en-EN';
   const isRTL = lang?.split('-')[0] === 'ar' || false;

   return (
      <div id='Home-Hero' className={`${styles.hero} max-w-[2000px] w-full flex justify-center relative shadow-2xl shadow-black/20 ${isRTL ? 'justify-end' : ''} `}>
         <m.div
            initial={!isMobile ? undefined : { opacity: 0 }}
            animate={!isMobile ? undefined : { opacity: 1 }}
            transition={!isMobile ? {duration: 0} : {
               duration: 0.8,
               delay: 0.8
            }}
            className={`${styles.hero_content} flex flex-col items-center ${isRTL ? 'md:items-end md:text-right text-center w-fit md:mr-[300px]' : 'md:items-start md:text-start text-center w-full'}`}>
            <h1>{translation?.title1} </h1>
            <div className={`${styles.hero_img_container}`}>
               <Image fill src={textSvg} alt="" loading='lazy' />
            </div>
            <h1>{translation?.title2} <br /> {translation?.title3}</h1>
         </m.div>
         <m.div
            initial={isMobile? undefined : { y: 400 }}
            animate={isMobile? undefined : { y: 0 }}
            transition={isMobile? {duration: 0} : {
               duration: 0.8,
               delay: 0.8
            }}
            className={`${styles.hero_person} md:block hidden`}>
            <Image fill src={personSvg} alt="" loading="eager" />
         </m.div>
         <m.div
            variants={isMobile? {} : container}
            initial="hidden"
            animate="visible"
            className={`${styles.hero_sign_container} absolute md:block hidden`}>
            <m.div
               variants={isMobile? {} : itemAnimation}
               custom={{ x: 200, y: true }}
               className={`${styles.hero_sign_bar}`} >
               <Image fill src={barSvg} alt="" loading='lazy' />
            </m.div>
            <m.div
               variants={isMobile? {} : itemAnimation}
               custom={{ x: 200, y: false }}
               className={`${styles.hero_sign_1}`}>
               <Image fill src={isRTL ? sign1SvgAr:sign1Svg} alt="" loading='lazy' />
            </m.div>
            <m.div
               variants={isMobile? {} : itemAnimation}
               custom={{ x: -200, y: false }}
               className={`${styles.hero_sign_2}`}>
               <Image fill src={sign2Svg} alt="" loading='lazy' />
            </m.div>
            <m.div
               variants={isMobile? {} : itemAnimation}
               custom={{ x: -200, y: false }}
               className={`${styles.hero_sign_3}`}>
               <Image fill src={sign3Svg} alt="" loading='lazy' />
            </m.div>
            <m.div
               variants={isMobile? {} : itemAnimation}
               custom={{ x: -200, y: false }}
               className={`${styles.hero_sign_4}`}>
               <Image fill src={isRTL ? sign4SvgAr:sign4Svg} alt="" loading='lazy' />
            </m.div>

         </m.div>
      </div>
   )
}
const MemorizedHero = memo(Hero);
export default MemorizedHero;