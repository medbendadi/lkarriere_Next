import React, { useState, memo } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/FeaturesPipe.module.css';

import tip from '../../public/images/Assets/IMG SVG/tip.svg'
import puzzle1 from '../../public/images/Assets/IMG SVG/Section Video/Puzzle 1.svg'
import puzzle2 from '../../public/images/Assets/IMG SVG/Section Video/Puzzle 2.svg'
import puzzle3 from '../../public/images/Assets/IMG SVG/Section Video/Puzzle 3.svg'
import checkIcon from '../../public/images/Assets/Icones/Icones Section Infos/check.svg'


const Features = ({ features, isRTL, lang }) => {
   console.log(lang);
   const [active, setActive] = useState(1)

   const handleActive = (item) => {
      if (item === active) {
         setActive(0)
      } else {
         setActive(item)
      }
   }

   const variants = {
      hidden: isRTL ? { x: 50, opacity: 0 } : { x: -50, opacity: 0 },
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
      <div className='w-full h-auto flex justify-center py-10'>
         <div className={`lg:w-[80%] min-[450px]:w-[90%] w-[95%] max-w-[1200px] ${styles.features_cards} space-y-2 overflow-x-hidden`}>
            {
               features?.map((item, index) => (
                  <motion.div
                     whileInView="visible"
                     initial="hidden"
                     variants={variants}
                     custom={index === 0 ? 0.3 : (index + 9) / 10}
                     className={`w-full ${styles.features_card} flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} row`} key={index}>
                     <div className={`${styles.features_card_shape}`} style={isRTL ? { transform: 'scaleX(-1)' } : { transform: 'initial' }}>
                        <Image src={index+1 === 1 ? puzzle1 : index+1 === features?.length ? puzzle3 : puzzle2} alt="puzzle picture" loading='lazy' />
                     </div>
                     <div className={`w-full ${isRTL ? 'mr-[10px]' : 'ml-[8px]'} `}>
                        <div className={`${styles.features_card_content} w-full`} onClick={() => handleActive(index+1)}
                           style={isRTL ? { borderRadius: '30px 0 0 30px', width: '100%', background: 'var(--purple-linear-gradient-dark)' } : { width: '100%', borderRadius: '0 30px 30px 0' }}>
                           {
                              (index === 0 || index === features?.length-1) && (
                                 <div className={`${styles.features_card_content_tip}`}
                                    style={isRTL ? { right: ' -21px', left: 'initial', top: '50%' } : { left: ' -21px', right: 'initial' }}>
                                    <Image src={isRTL ? tip : require('../../public/images/Assets/tip.png')} alt="tip icon" loading='lazy' />
                                 </div>
                              )
                           }

                           <div className={`${styles.features_card_content_text} flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center justify-between`}>
                              <div className='space-x-4 flex items-center'>
                                 <h2 className='min-[795px]:text-lg text-base'>{lang === 'en' ? item?.title?.en: lang === 'fr' ?item?.title?.fr : lang === 'ar' && item?.title?.ar}</h2>
                              </div>
                              {
                                 active === index+1 ? (<ChevronUp size={24} />) : (<ChevronDown size={24} />)
                              }
                           </div>

                        </div>
                        <div className={active === index+1 ? `${styles.features_card_content_dropdown} ${styles.active_dropdown} relative min-[570px]:py-[20px] py-[20px] px-[20px] ${isRTL ? 'after:left-0 after:right-[initial]' : 'after:right-0 after:left-[initial]'}` : `${styles.features_card_content_dropdown}`} style={{ width: '100%' }}>
                           <p className='text-[#5358A6]'>
                              {
                                 item?.weekElement?.map((line, index) => (
                                    <span className={`flex items-start gap-2 row mb-3 last:mb-0 min-[795px]:text-base min-[570px]:text-sm text-xs ${isRTL ? 'flex-row-reverse text-end' : 'flex-row text-start'}`} key={index}>
                                       <Image src={checkIcon} alt="Check icon" className={`${isRTL ? 'ml-2' : "mr-2"} min-[570px]:w-[20px] w-[15px]`} loading='lazy' />
                                       <span>{lang === 'en' ? line?.en: lang === 'fr' ?line?.fr : lang === 'ar' && line?.ar}</span>
                                    </span>
                                 ))
                              }
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))
            }
         </div>
      </div>
   )
}
const MemorizedFeatures = memo(Features);
export default MemorizedFeatures ;