import React from 'react'
import styles from '../styles/MoreBigBtnStyle.module.css'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MoreBigBtn = ({ to, content, onClick, isExpanded }) => {
   const router = useRouter()
   const lang = router.query.lang;
   const isRTL = lang === 'ar' || lang === 'ma';
   return (
      <div className={`w-full flex items-center justify-center px-5 ${isRTL ? "ar" : ''}`} onClick={onClick}>
         <button className={`${styles.moreBigBtn} w-full flex text-center items-center gap-1 justify-center bg-transparent py-4 row rounded-2xl`}>
            <span className='lg:text-lg md:text-base text-sm'>
            {isExpanded ? content.less : content.more}
            </span>
            {
               isRTL ? (<ChevronLeft size={20} />) : <ChevronRight size={20}  />
            }
         </button>
      </div>
   )
}

export default MoreBigBtn
