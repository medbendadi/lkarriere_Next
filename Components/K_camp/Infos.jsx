import React, { memo } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import Link from 'next/link';
import Image from 'next/image';

import { m } from 'framer-motion'


// Icons
import iconVideo from '../../public/images/Assets/Icones/Icones Section Video/icon 5.svg';
import checkIcon from '../../public/images/Assets/Icones/Icones Section Infos/check.svg'

const Infos = ({ silverBoxes, goldenBox, isRTL, lang }) => {

   const fromLeftVariant = {
      hidden: { x: -100, opacity: 0 },
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

   const fromRightVariant = {
      hidden: { x: 100, opacity: 0 },
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

   return (
      <div className='w-full h-auto flex flex-col gap-10 py-10 overflow-hidden'>

         {
            silverBoxes?.map((item, key) => (
                  key === 0 ? (
                     <React.Fragment key={key}>
                        <m.div
                           whileInView="visible"
                           initial="hidden"
                           variants={fromLeftVariant}
                           custom={0.9}

                           className='w-full h-auto flex justify-center items-center'>
                           <div className={`lg:w-[80%] min-[450px]:w-[90%] w-[95%] max-w-[1200px] h-auto rounded-[35px] bg-[#ececec] flex ${isRTL ? ( ' md:flex-row  ' ) : ( ' md:flex-row-reverse ' )} flex-col-reverse justify-between items-center gap-10 min-[480px]:p-10 p-5`}>
                              {/* Video */}
                              <div className='
                              min-[880px]:min-w-[400px] min-[880px]:min-h-[250px] min-[880px]:h-[250px] 
                              min-[715px]:min-w-[250px] min-[715px]:min-h-[180px] min-[715px]:h-[180px]
                              min-[320px]:min-w-[300px] min-[320px]:w-[300px] min-[320px]:min-h-[200px] min-[320px]:h-[200px] 
                              min-w-[250px] w-[250px] min-h-[200px] h-[200px] 
                              bg-white rounded-[25px] relative'>
                                 <button className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'>
                                    <Image className='w-[60px]' src={iconVideo} alt="" loading='lazy' aria-label='run' />
                                 </button>
                              </div>

                              {/* Content */}
                              <div className='md:w-[55%] w-full text-[#5358A6] flex flex-col gap-5'>
                                 <div className='text-end' style={isRTL ? { textAlign: 'end' } : { textAlign: 'start' }}>
                                    <span className='min-[1260px]:text-3xl min-[880px]:text-2xl text-xl font-bold'>{lang === 'en' ?  item?.title?.en: lang === 'fr' ? item?.title?.fr : lang === 'ar' &&  item?.title?.ar}</span>
                                 </div>
                                 <ul>
                                    {
                                       item?.boxElement?.map((listItem, key) => (
                                          <li key={key} className='flex flex-row-reverse items-start text-end gap-2' style={isRTL ? { textAlign: 'end', flexDirection: 'row-reverse' } : { textAlign: 'start', flexDirection: 'row' }}>
                                             {/* icon */}
                                             <Image className='min-[1260px]:w-[16px] w-[14px] min-[880px]:pt-2 pt-1' src={checkIcon} alt="" loading='lazy' />

                                             {/* Description */}
                                             <span className='min-[1260px]:text-lg min-[880px]:text-base text-sm'>{lang === 'en' ? listItem?.en: lang === 'fr' ?listItem?.fr : lang === 'ar' && listItem?.ar}</span>
                                          </li>
                                       ))
                                    }
                                 </ul>
                              </div>
                           </div>
                        </m.div>
                        {
                           goldenBox ? (
                              <m.div
                                 whileInView="visible"
                                 initial="hidden"
                                 variants={fromRightVariant}
                                 custom={0.9}
                                 className='w-full h-auto flex justify-center items-center'>
                                 <div className='lg:w-[80%] min-[450px]:w-[90%] w-[95%] max-w-[1200px] h-auto rounded-[35px] yellow-gradient-to-dark flex flex-col items-center gap-10 min-[530px]:p-16 py-10 px-5 text-white text-center'>
                                    {/* Content */}
                                    <div className='min-[1260px]:w-[65%] min-[795px]:w-[80%] min-[530px]:w-[90%] w-full flex flex-col gap-5'>
                                       <div>
                                          <span className='min-[795px]:text-4xl sm:text-4xl text-3xl font-bold'>{lang === 'en' ? goldenBox?.title1?.en: lang === 'fr' ? goldenBox?.title1?.fr : lang === 'ar' && goldenBox?.title1?.ar}</span>
                                       </div>
                                       <div>
                                          <p className='min-[795px]:text-2xl sm:text-xl text-base font-light'>{lang === 'en' ? goldenBox?.title2?.en: lang === 'fr' ? goldenBox?.title2?.fr : lang === 'ar' && goldenBox?.title2?.ar}</p>
                                       </div>
                                    </div>
                                    <div className='min-[1260px]:w-[60%] min-[795px]:w-[80%] min-[530px]:w-[90%] w-full'>
                                       <Link href='/' className='w-full purple-gradient-to-light flex justify-center items-center gap-2 rounded-full py-4 shadow-[0_0_16px_rgba(0,0,0,0.19)] hover:opacity-[.9] duration-300' style={isRTL ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>
                                          {
                                             isRTL ? (
                                                <ChevronLeft size={20} />
                                             ) : (
                                                <ChevronRight size={20} />
                                             )
                                          }
                                          <span className='min-[570px]:text-lg min-[450px]:text-base text-sm'>مخيم أساسيات الكاريير</span>
                                       </Link>
                                    </div>
                                 </div>
                              </m.div>
                           ) : (
                              <></>
                           )
                        }
                        
                        
                     </React.Fragment>

                  ) : (
                        <m.div
                        key={key}
                        variants={key % 2 === 0 ? fromRightVariant : fromLeftVariant}
                        custom={key === 0 ? 0.3 : (key + 9) / 10}
                        whileInView="visible"
                        initial="hidden"
                        className='w-full h-auto flex justify-center items-center'>
                        <div className={`lg:w-[80%] min-[450px]:w-[90%] w-[95%] max-w-[1200px] h-auto rounded-[35px] bg-[#ececec] flex ${isRTL ? ( ' md:flex-row  ' ) : ( ' md:flex-row-reverse ' )} flex-col-reverse justify-between items-center gap-10 min-[480px]:p-10 p-5`}>
                           {/* Video */}
                           <div className='
                              min-[880px]:min-w-[400px] min-[880px]:min-h-[250px] min-[880px]:h-[250px] 
                              min-[715px]:min-w-[250px] min-[715px]:min-h-[180px] min-[715px]:h-[180px]
                              min-[320px]:min-w-[300px] min-[320px]:w-[300px] min-[320px]:min-h-[200px] min-[320px]:h-[200px] 
                              min-w-[250px] w-[250px] min-h-[200px] h-[200px] 
                              bg-white rounded-[25px] relative'>
                                 <button className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'>
                                    <Image className='w-[60px]' src={iconVideo} alt="" loading='lazy' aria-label='run' />
                                 </button>
                              </div>

                           {/* Content */}
                           <div className='md:w-[55%] w-full text-[#5358A6] flex flex-col gap-5'>
                              <div className='text-end' style={isRTL ? { textAlign: 'end' } : { textAlign: 'start' }}>
                                 <span className='min-[1260px]:text-3xl min-[880px]:text-2xl text-xl font-bold'>{lang === 'en' ?  item?.title?.en: lang === 'fr' ? item?.title?.fr : lang === 'ar' &&  item?.title?.ar}</span>
                              </div>
                              <ul>
                                 {
                                    item?.boxElement?.map((listItem, key) => (
                                       <li key={key} className='flex flex-row-reverse items-start text-end gap-2' style={isRTL ? { textAlign: 'end', flexDirection: 'row-reverse' } : { textAlign: 'start', flexDirection: 'row' }}>
                                          {/* icon */}
                                          <Image className='min-[1260px]:w-[16px] w-[14px] min-[880px]:pt-2 pt-1' src={checkIcon} alt="" loading='lazy' />

                                          {/* Description */}
                                          <span className='min-[1260px]:text-lg min-[880px]:text-base text-sm'>{lang === 'en' ? listItem?.en: lang === 'fr' ?listItem?.fr : lang === 'ar' && listItem?.ar}</span>
                                       </li>
                                    ))
                                 }
                              </ul>
                           </div>
                        </div>
                     </m.div>
                  )
               ))
         }
      </div>
   )
}
const MemorizedInfos = memo(Infos);
export default MemorizedInfos;