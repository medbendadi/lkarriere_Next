import React, { memo } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

// Scroll Link
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
// Logo
import FooterLogo from '../public/images/Assets/IMG SVG/Section Footer/Logo White.svg'
import FooterLogo_ar from '../public/images/Assets/IMG SVG/Section Footer/Logo Arabe.svg'

// Social Media
import facebookLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 6.svg'
import instaLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 7.svg'
import whatsLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 5.svg'
import linkdenLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 4.svg'

import phoneLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 3.svg'
import mailLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 2.svg'
import locationLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 1.svg'

const Footer = ({ translation, isRTL }) => {
   const router = useRouter();
   const isHomePage = router.pathname === '/';
   
   // List menu
   const menu = [
      {"title": translation?.nav?.Coaches, "navigate": "/", ReferenceId: 'Coaches'},
      {"title": translation?.nav?.Events, "navigate": "/", ReferenceId: 'Events'},
      {"title": translation?.nav?.About, "navigate": "/", ReferenceId: 'About'},
      {"title": translation?.nav?.Contact, "navigate": "/", ReferenceId: 'Home-Contact'}
   ]
   
   return (
      <div className='w-full md:h-[40vh] h-auto min-h-[300px] max-h-[500px]'>
         <div className={`${styles.footerUp} w-full h-[85%] flex ${isRTL ? 'md:flex-row-reverse' : "md:flex-row"} flex-col items-center`}>
            <div className={`md:w-[55%] w-full h-full flex ${isRTL ? 'flex-row-reverse purple-gradient-to-light' : "flex-row purple-gradient-to-dark"} items-center`}>
               <div className={`${styles.footerLogo_container} xl:px-[5rem] px-[1.5rem] py-6 md:block hidden`}>
                  <div className={`${styles.footerLogo} lg:w-[320px] min-[866px]:w-[250px] w-[200px] object-contain`}>
                     <Image src={isRTL ? FooterLogo_ar : FooterLogo} alt="Logo" />
                  </div>
               </div>

               <div className={`${styles.footerList} w-full xl:px-10 px-8 py-6 text-center ${isRTL ? 'md:text-end' : 'md:text-start'}`}>
                  <ul className='text-white font-light text-base'>
                     {
                        isHomePage ? (
                           menu.map((item, key) => (
                              <li key={key}>
                                 <ScrollLink
                                    to={item.ReferenceId}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    className='cursor-pointer'
                                 >
                                    {item.title}
                                 </ScrollLink>
                              </li>
                           ))
                        ) : (
                           menu.map((item, key) => (
                              <li key={key}>
                                 <Link href={item.navigate}>{item.title}</Link>
                              </li>
                           ))
                        )
                        
                     }
                     <li>
                        <Link href=''>{translation?.nav?.Privacy}</Link>
                     </li>
                     <li>
                        <Link href=''>{translation?.nav?.Terms}</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={`${styles.footerRight} md:w-[45%] w-full h-full relative flex justify-center flex-col xl:px-16 px-8 md:py-0 py-5`}>
               <div className='w-full sm:text-sm text-xs'>
                  <div className={`flex ${isRTL ? 'flex-row-reverse' : "flex-row"} items-start gap-2 text-white mb-[10px] font-light w-full`}>
                     <div className='min-w-[16px] max-w-[16px] object-contain sm:pt-[2px] pt-0'>
                        <Image src={locationLogo} alt="" />
                     </div>
                     {translation?.address}
                  </div>
                  <div className={`flex ${isRTL ? 'flex-row-reverse' : "flex-row"} items-start gap-2 text-white mb-[10px] font-light w-full`}>
                     <div className='min-w-[16px] max-w-[16px] object-contain sm:pt-[2px] pt-0'>
                        <Image src={mailLogo} alt="" />
                     </div>
                     STEAJICOD@GMAIL.COM
                  </div>
                  <div className={`flex ${isRTL ? 'flex-row-reverse' : "flex-row"} items-start gap-2 text-white mb-[10px] font-light w-full`}>
                     <div className='min-w-[16px] max-w-[16px] object-contain sm:pt-[2px] pt-0'>
                        <Image src={phoneLogo} alt="" />
                     </div>
                     06 89 55 85 73
                  </div>
               </div>
               <div className='w-full justify-end'>
                  <ul className={`flex items-center ${isRTL ? 'md:justify-start' : "md:justify-end"}  justify-center space-x-4`}>
                     <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150' >
                        <Link href='' className='w-full object-contain'>
                           <Image src={linkdenLogo} alt="Linkedin" />
                        </Link>
                     </li>
                     <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150'>
                        <Link href='' className='w-full object-contain'>
                           <Image src={whatsLogo} alt="Whatsapp" />
                        </Link>
                     </li>
                     <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150'>
                        <Link href='' className='w-full object-contain'>
                           <Image src={facebookLogo} alt="Facebook" />
                        </Link>
                     </li>
                     <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150'>
                        <Link href='' className='w-full object-contain'>
                           <Image src={instaLogo} alt="Instagram" />
                        </Link>
                     </li>
                  </ul>
               </div>
               
            </div>

         </div>
         <div className={`${styles.footerDown} w-full min-h-[50px] py-[15px] font-light text-sm text-white text-center flex ${isRTL ? 'flex-row-reverse' : "flex-row"} justify-center items-center gap-2`}>
            &copy; <span>{translation?.logo}</span>
         </div>
      </div>
   )
}
const MemorizedFooter = memo(Footer);
export default MemorizedFooter;