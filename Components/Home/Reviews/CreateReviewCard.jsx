import React, { memo } from 'react'
import { m } from 'framer-motion'
import styles from '../../../styles/ReviewCard.module.css'


import plusIcon from '../../../public/images/Assets/Icones/Icobes Section Reviews/icon 6.svg'
import starIcon from '../../../public/images/Assets/Icones/Icobes Section Reviews/icon 4.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
const CreateReviewCard = ({translation}) => {
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
         className={`${styles.reviews_card} flex justify-center items-center min-[518px]:px-10 min-[370px]:px-5 px-1 space-x-5 relative ${isRTL ? 'ar' : ''}`}>
         <div className={`${styles.reviews_card_image_container} h-fit flex items-center relative`}>
            <div className={`${styles.reviews_card_image_plus} relative`}>
               {/* <div className='w-[90px] h-[90px] object-contain'> */}
               <Image fill src={plusIcon} alt="" />
               {/* </div> */}
            </div>
            <div className={`${styles.reviews_card_star} absolute`}>
               <Image fill src={starIcon} alt="" />
            </div>

         </div>
         <div className={`${styles.reviews_card_content_plus} flex flex-col items-center py-14 text-center`}>
            <h1 className='uppercase'>{translation?.home?.reviews?.You}</h1>
            <p>{translation?.home?.reviews?.Share1}<br />{translation?.home?.reviews?.Share2}</p>
            <button>
            {
               translation?.buttons?.add
            }
            </button>
            {/* <p>{`${item.comment.split(' ').slice(0, 15).join(' ')} ....`}</p> */}
         </div>
      </m.div>
   )
}
const MemorizedCreateReviewCard = memo(CreateReviewCard);
export default MemorizedCreateReviewCard;