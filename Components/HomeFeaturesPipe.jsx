import React from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import styles from '../styles/HomeFeaturesPipe.module.css'
import { m } from 'framer-motion'

// Icons
import checkIcon from '../public/images/Assets/Icones/Icones Section Infos/check.svg'

import puzzle1 from '../public/images/Assets/IMG SVG/Section Video/Puzzle 1.svg'
import puzzle2 from '../public/images/Assets/IMG SVG/Section Video/Puzzle 2.svg'
import puzzle3 from '../public/images/Assets/IMG SVG/Section Video/Puzzle 3.svg'
import tip from '../public/images/Assets/IMG SVG/tip.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'

const HomeFeaturesPipe = ({ item, index, active, handleActive, variants, custom, isMobile }) => {
   const router = useRouter()
    const  lang  = router.query.lang || 'en';
    const isRTL = lang === 'ar' || lang === 'ma';

   return (
      <m.div
         whileInView="visible"
         initial="hidden"
         variants={isMobile ? undefined : variants}
         custom={custom}
         key={index} className={`${styles.features_card} flex row`}>
         <div className={`${styles.features_card_shape} relative w-[80px] h-[80px]`} style={isRTL ? { transform: 'scaleX(-1)' } : { transform: 'initial' }}>
            <Image fill src={item.shape === 1 ? puzzle1 : item.shape === 2 ? puzzle2 : puzzle3} alt="" loading='lazy' />
         </div>
         <div className={`w-full ${isRTL ? 'mr-[10px]' : 'ml-[8px]'}`}>
            <div className={`${styles.features_card_content}`}
               style={isRTL ? { borderRadius: '30px 0 0 30px', width: '100%', background: 'var(--purple-linear-gradient-dark)' } : { width: '100%', borderRadius: '0 30px 30px 0' }}
               onClick={() => handleActive(item.id)}>
               {
                  item.tip && (
                     <div className={`${styles.features_card_content_tip}  h-[38px] w-[38px]`}
                        style={isRTL ? { right: ' -21px', left: 'initial', top: '50%' } : { left: ' -21px', right: 'initial' }}>
                        <Image fill src={isRTL ? tip : require('../public/images/Assets/tip.png')} alt="" loading='eager' />
                     </div>
                  )
               }

               <div className="row flex items-center justify-between">
                  <div className={`flex items-center row`}>
                     <div className='w-[40px] h-[35px] relative'>
                     <Image fill src={require(`../public/images/Assets/Icones/Icobes Section Features/${item.icon}`)} alt="" />
                     </div>
                     <h2 className={`${isRTL ? 'mr-[8px]' : 'ml-[8px]'}`}>{item.title}</h2>
                  </div>
                  {
                     active === item.id ? (<ChevronUp size={24} />) : (<ChevronDown size={24} />)
                  }
               </div>

            </div>
            <div className={active === item.id ? `${styles.features_card_content_dropdown} w-full ${styles.active_dropdown} relative p-[20px] ${isRTL ? 'after:left-0 after:right-[initial]' : 'after:right-0 after:left-[initial]'}` : `${styles.features_card_content_dropdown}`}>
               <div className='text-[#5358A6]'>
                  {
                     item?.description?.map((line, index) => (
                        <span className={`flex items-start gap-2 row mb-3 last:mb-0 min-[795px]:text-base min-[570px]:text-sm text-xs ${isRTL ? 'text-end' : 'text-start'}`} key={index}>
                           <div className={`w-[15px] h-[15px] pt-1 relative`}>
                           <Image fill src={checkIcon} alt="" loading='lazy'/>
                           </div>
                           <span className={`${isRTL ? 'text-sm' : 'text-base'}`}>{line}</span>
                        </span>
                     ))
                  }
               </div>
            </div>

         </div>


      </m.div>
   )
}

export default HomeFeaturesPipe