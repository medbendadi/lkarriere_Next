import React, { useState, memo } from 'react'
import styles from '../../../styles/ReviewCard.module.css'
import { AnimatePresence, m } from 'framer-motion'

// icons //
import defaultImg from '../../../public/images/Assets/Icones/Icobes Section Reviews/icon 3.svg'
import starImg from '../../../public/images/Assets/Icones/Icobes Section Reviews/icon 4.svg'
import videoIcon from '../../../public/images/Assets/Icones/Icobes Section Reviews/icon 2.svg'
import noVideoIcon from '../../../public/images/Assets/Icones/Icobes Section Reviews/6.svg'
import closeIcon from '../../../public/images/Assets/Icones/Icobes Section Reviews/icon 5.svg'
import urlFor from '../../../handlers/ImageHandler'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import { useRouter } from 'next/router'


const ReviewCard = ({ item, translation }) => {
   const [videoActive, setVideoActive] = useState(false)
   const [playIcon, setPlayIcon] = useState(true)
   const router = useRouter()
    const lang = router.query.lang;
    const isRTL = lang === 'ar' || lang === 'ma';
   return (
      <m.div
         whileInView={{ y: 0, opacity: 1 }}
         initial={{ y: 100, opacity: 0 }}
         transition={{
            duration: .5,
         }}
         className={`${styles.reviews_card} flex  ${isRTL ? 'flex-row-reverse ar' : 'flex-row'} items-center gap-5 min-[370px]:px-5 px-1 relative overflow-hidden`}>
         <div className={`${styles.reviews_card_image_container} h-fit flex items-center relative`}>
            <div className={`${styles.reviews_card_image} relative`}>
               <Image fill className='object-cover w-full h-full' src={item.image ? urlFor(item.image) : defaultImg} alt="" loading='lazy' />
            </div>
            <div className="reviews_card_star absolute">
               <Image fill src={starImg} alt="" />
            </div>
         </div>
         <div className={`${styles.reviews_card_content} flex flex-col items-start sm:py-14 py-5 ${isRTL ? 'text-end' : 'text-start'}`}>
            <div className={`${styles.reviews_card_content_title}`}>
               <h1 className='text-2xl font-medium'>{lang === 'en' ? item.name.en: lang === 'fr' ? item.name.fr : lang === 'ar' && item.name.ar}</h1>
               <h3>{lang === 'en' ? item.bootcamp?.title?.en: lang === 'fr' ?item.bootcamp?.title?.fr : lang === 'ar' && item.bootcamp?.title?.ar}</h3>
            </div>
            <p>{lang === 'en' ? `${item.comment.en?.split(' ').slice(0, 15).join(' ')} ....` : lang === 'fr' ? `${item.comment.fr?.split(' ').slice(0, 15).join(' ')} ....` : lang === 'ar' && `${item.comment.ar?.split(' ').slice(0, 15).join(' ')} ....`}</p>
         </div>

         <div onClick={() => {
            item.video && setVideoActive(true)
         }} className={`${styles.reviews_card_video} flex items-center absolute space-x-2 ${!item.video && `${styles.disabled}`}`} style={isRTL ? {left: '14px', right: 'initial'} : null}>
            {
               item.video != null ? (
                  <div className={`${styles.reviews_card_video_icon} relative w-[15px] h-[15px]`}>
                     <Image fill src={videoIcon} alt="" />
                  </div>
               ) : (
                  <div className={`${styles.reviews_card_video_icon} relative w-[15px] h-[15px]`}>
                     <Image fill src={noVideoIcon} alt="" />
                  </div>
               )
            }

            <h2 className={`max-[470px]:text-xs`}>
            {
               translation?.buttons?.video
            }
            </h2>
         </div>
         <div className={`${styles.reviews_card_more} flex items-center space-x-2 absolute`} style={isRTL ? {left: '14px', right: 'initial'} : null}>
            <h2 className='max-[470px]:text-xs'>
            {
               translation?.buttons?.read
            }
            </h2>
         </div>


         {
            videoActive ? (
               <AnimatePresence>
                  <m.div
                     initial={{
                        opacity: 0,
                        scale: 0.8,
                     }}
                     animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                           ease: "easeOut",
                           duration: 0.15,
                        },
                     }}
                     exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: {
                           ease: "easeIn",
                           duration: 0.15,
                        },
                     }}
                     className={`${styles.reviews_card_video_box} absolute top-0 left-0 bottom-0 right-0 bg-orange-600 z-30 `}>
                     <ReactPlayer url={item?.video} width={499} height={247} controls={true} onReady={() => setPlayIcon(false)} />
                     {
                        playIcon ? (
                           <div className={`${styles.reviews_card_video_box_video_icon} absolute pointer-events-none w-[15px] h-[15px]`}>
                              <Image fill src={videoIcon} alt="" />
                           </div>
                        ) : null
                     }
                     <div onClick={() => setVideoActive(false)} className={`${styles.reviews_card_video_box_close_icon} absolute`}>
                        <Image fill src={closeIcon} alt="" />
                     </div>
                  </m.div>
               </AnimatePresence>
            ) : null
         }
      </m.div>

   )
}
const MemorizedReviewCard = memo(ReviewCard);
export default MemorizedReviewCard;