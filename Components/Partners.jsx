import React, { memo } from 'react'
import headerIcon from '../public/images/Assets/Icones/Icones Section Our Partners/icon 1.svg'
import styles from '../styles/Partners.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";



import Logo1 from '../public/images/Assets/IMG SVG/Section Our Partners/Logo-YouCan.svg'
import Logo2 from '../public/images/Assets/IMG SVG/Section Our Partners/Logo-Ameex.svg'
import Logo3 from '../public/images/Assets/IMG SVG/Section Our Partners/Logo-MediaMan.svg'
import { ChevronDown } from 'react-feather'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
const Partners = ({translation}) => {
   const router = useRouter()
   const lang = router.query.lang;
   
   const isRTL = lang === 'ar' || lang === 'ma';   

   return (
      <div className={`${styles.partners} w-full flex flex-col items-center justify-center gap-10 pt-4 pb-2 px-5`}>
         <div className={` w-full flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-5 mb-8`}>
            <div className='sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] relative'>
            <Image fill src={headerIcon} alt='icon' />
            </div>
            <span className='capitalize sm:text-6xl text-4xl' style={{ color: '#5357A6' }}>{translation?.title}</span>
         </div>

         <div className='max-w-[1200px] w-full sm:block hidden'>
            <Carousel
               breakpoints={[
                  {
                     breakpoint: 500,
                     settings: {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                     },
                  },
                  {
                     breakpoint: 768,
                     settings: {
                        itemsToShow: 2,
                        itemsToScroll: 2,
                     },
                  },
               ]}
               dots={false}
               showSides={true}
               sidesOpacity={1}
               sideSize={.1}
               selectedItem={3}
               centerMode
               centerSlidePercentage={33}
               scrollOnDevice={true}
               showThumbs={false}
               showStatus={false}
               showIndicators={false}
            >
               <div className='relative w-[350px] h-[130px]'>
                  <Image fill
                     alt=''
                     src={Logo1}
                     loading="lazy"
                  />
               </div>
               <div className='relative w-[350px] h-[130px]'>
                  <Image fill
                     alt=''
                     src={Logo2}
                     loading="lazy"
                  />
               </div>
               <div className='relative w-[350px] h-[130px]'>
                  <Image fill
                     alt=''
                     src={Logo3}
                     loading="lazy"
                  />
               </div>
               <div className='relative w-[350px] h-[130px]'>
                  <Image fill
                     alt=''
                     src={Logo1}
                     loading="lazy"
                  />
               </div>
               <div className='relative w-[350px] h-[130px]'>
                  <Image fill
                     alt=''
                     src={Logo2}
                     loading="lazy"
                  />
               </div>
               <div className='relative w-[90px] h-[90px]'>
                  <Image fill
                     alt=''
                     src={Logo3}
                     loading="lazy"
                  />
               </div>
            </Carousel>
         </div>
         <ul className='sm:hidden flex justify-center items-center flex-col' >
            <li className='w-[70%] relative'>
               <Image fill src={Logo1} alt="" loading="lazy" />
            </li>
            <li className='w-[70%] mt-10' relative>
               <Image fill src={Logo2} alt="" loading="lazy" />
            </li>
            <li className='w-[70%] mt-10' relative>
               <Image fill src={Logo3} alt="" loading="lazy" />
            </li>
         </ul>

         <button className='sm:hidden flex items-center justify-center w-full py-[15px] rounded-2xl text-white' style={{ background: 'var(--purple-linear-gradient-dark)' }}>
            Show More
            <ChevronDown />
         </button>

      </div>
   )
}
const MemorizedPartners = memo(Partners);
export default MemorizedPartners;