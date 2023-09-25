import React, { memo, useEffect, useState } from 'react'
import styles from  '../styles/Reviews.module.css'
import headerIcon from '../public/images/Assets/Icones/Icobes Section Reviews/icon 1.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'


const ReviewCard = dynamic(() => import('./ReviewCard'))
const CreateReviewCard = dynamic(() => import('./CreateReviewCard'))
const MoreBigBtn = dynamic(() => import('./MoreBigBtn'))


const Reviews = ({ icon, bootcamp, reviews, translation }) => {
   const router = useRouter()
    const lang = router.query.lang;
    console.log(reviews)
    const isRTL = lang === 'ar' || lang === 'ma';
   const [filteredData, setFilteredData] = useState([])

   useEffect(() => {
      async function getData() {
         if (typeof(bootcamp) != 'undefined') {
            const filtredData = reviews.filter((item) => item.bootcamp.title.en === bootcamp.en)
            setFilteredData(filtredData?.slice(0, 3))
         } else {
            setFilteredData(reviews?.slice(0, 3))
         }
      }
      getData()
   }, [bootcamp])


   const handleExpandData = () => {
      if (filteredData?.length === 3) {
         setFilteredData(reviews)
      } else {
         const newData = [...reviews]
         setFilteredData(newData?.slice(0, 3))
      }
   }

   return (
      <div className={`${styles.reviews} h-auto w-full flex flex-col items-center justify-center gap-16 py-4`}>
         <div className={`w-full flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-5`}>
            {
               icon && (
                  <div className='sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] relative'>
                     <Image fill src={headerIcon} alt='icon' />
                  </div>
               )
            }
            <span className='capitalize sm:text-6xl text-4xl' style={{ color: '#5357A6' }}>{translation?.home?.reviews?.title}</span>
         </div>
         <div className={`${styles.reviews_cards} w-full grid justify-center gap-5 xl:gap-2 p`}>
            {
               reviews && (
                  filteredData.map((review, index) => (
                     <ReviewCard translation={translation} key={index} item={review} />
                  ))
               )
            }
            <CreateReviewCard translation={translation} />
         </div>

         {/* Button */}
         <div className='w-full max-w-[1200px]'>
            <MoreBigBtn isExpanded={filteredData?.length === 3 ? false : true} content={{more: translation?.buttons?.more , less: translation?.buttons?.less}} onClick={handleExpandData} />
         </div>
         
      </div>
   )
}
const MemorizedReviews = memo(Reviews);
export default MemorizedReviews;