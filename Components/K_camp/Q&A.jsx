import React, { useState, memo } from 'react';

// Feather icons
import { ChevronDown, ChevronUp } from 'react-feather';
import styles from '../../styles/K-camp/Q&A.module.css';

const QAndA = ({ questionAndAnswers, isRTL, translation, lang }) => {

   const [activeItems, setActiveItems] = useState([])

   const handleActive = async (item) => {
      if (await activeItems.find((i) => i === item)) {
         const news = await activeItems.filter((i) => i !== item)
         setActiveItems(news)
      } else {
         setActiveItems(prev => [...prev, item])
      }
   }
   return (
      <div className="max-w-[1200px] layout wrap row justify-center pb-[68px] gap-10">
         {/* Title */}
         <div className='w-full text-center'>
            <span className='capitalize lg:text-4xl min-[570px]:text-3xl min-[450px]:text-2xl text-xl font-bold text-[#5358A6]'>{translation?.title}</span>
         </div>
         <div id="introduction" className={`${styles.introduction} flex flex-col text-xs items-center rounded-[35px]`}>
            {
               questionAndAnswers?.map((item, index) => (
                  <div
                     key={index} className={`${styles.introduction} w-full`}>
                     <div className={`${styles.introduction_content} w-full`} onClick={() => handleActive(index+1)}>
                        <div className={`${styles.introduction_content_text} row w-full flex ${isRTL ? ( 'flex-row-reverse' ) : ( 'flex-row' )} justify-between items-center`}>
                           <div className={`row flex items-center text-[var(--main-purple)] font-normal ${isRTL ? ( 'text-end' ) : ( 'text-start' )}`}>
                              <h2 className='min-[795px]:text-lg min-[450px]:text-base text-sm'>{lang === 'en' ? item?.question?.en: lang === 'fr' ?item?.question?.fr : lang === 'ar' && item?.question?.ar}</h2>
                           </div>
                           {
                              activeItems.find((i) => i === index+1) ? (<ChevronUp color='var(--second-yellow)' size={24} />) : (<ChevronDown color='var(--second-yellow)' size={24} />)
                           }
                        </div>

                     </div>
                     <div className={activeItems.find((i) => i === index+1) ? `${styles.introduction_content_dropdown} ${styles.active_dropdown} relative` : `${styles.introduction_content_dropdown}`}>
                        <div className={`${styles.introduction_content_dropdown_inner}`}>
                           <div className={`flex ${isRTL ? ( 'justify-end' ) : ( 'justify-start' )} items-center row`} style={isRTL ? { textAlign: 'right' } : { textAlign: 'left' }}>
                              <p style={isRTL? { direction: 'rtl'} : {direction: 'ltr'}} className={`min-[795px]:text-base min-[450px]:text-sm text-xs font-extralight`}>
                                 {lang === 'en' ? item?.answer?.en: lang === 'fr' ?item?.answer?.fr : lang === 'ar' && item?.answer?.ar}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}
const MemorizedQANDA = memo(QAndA);
export default MemorizedQANDA;