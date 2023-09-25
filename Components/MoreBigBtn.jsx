import React, { memo } from 'react'
import styles from '../styles/MoreBigBtnStyle.module.css';
import { Link } from 'next/link';
import { ChevronLeft, ChevronRight } from 'react-feather'

const MoreBigBtn = ({ to, content, onClick, isExpanded, isRTL }) => {
   return (
      <div className={`w-full flex items-center justify-center px-5 ${isRTL ? "ar" : ''}`} onClick={onClick}>
         <Link href={to || ''} className={`${styles.moreBigBtn} w-full flex text-center items-center gap-1 justify-center bg-transparent py-4 row rounded-2xl`}>
            <p className='lg:text-lg md:text-base text-sm'>
            {isExpanded ? content.less : content.more}
            </p>
            {
               isRTL ? (<ChevronLeft size={20} />) : <ChevronRight size={20}  />
            }
         </Link>
      </div>
   )
}
const MemorizedButton = memo(MoreBigBtn);
export default MemorizedButton;