import React from 'react';
import styles from '../../../styles/HowItWorksStyle.module.css';

// Framer Motion
import { m } from 'framer-motion';
import { useRouter } from 'next/router';


function HowItWorksCard(props) {
    const { index, content, content_bold, id, variants } = props;
    const router = useRouter()
    const lang = router.query.lang;
    
    const isRTL = lang === 'ar' || lang === 'ma';
    return (
        <m.div
            variants={variants}
            initial='hidden'
            whileInView='visible'
            custom={(index + 3) / 10} className={`${styles.HowItWorksPuzzle} ${styles.HowItWorksPuzzle_rotate} ${index % 2 !== 0 ? `${styles.HowItWorksPuzzle2}` : `${styles.HowItWorksPuzzle3}`} min-w-[350px] h-[300px] flex justify-start items-center sm:-ml-10 -ml-0 relative`}>
            <div className={`w-full h-full flex flex-col justify-center items-center text-center ${isRTL ? 'sm:pe-0 sm:ps-[5%] -rotate-[90deg] sm:rotate-[180deg] pb-[25px] sm:pb-0' : 'sm:pe-[5%] -rotate-[90deg] sm:rotate-0 pb-[25px] sm:pb-0'}`}>
                <span className='text-white text-3xl'>{content}</span>
                <span className='text-white text-3xl font-extrabold'>{content_bold ? content_bold : ''}</span>
            </div>
            {
                id ? (
                    <div className='absolute right-2 top-[50%] -translate-y-[50%] w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#ECECEC]'>
                        <span className={`text-3xl sm:text-2xl ${isRTL ? '-rotate-[90deg] sm:rotate-[180deg]' : '-rotate-[90deg] sm:rotate-0'}`} style={{ color: '#5357A6' }}>{id}</span>
                    </div>
                ) : <></>
            }
        </m.div>
    )
}
export default HowItWorksCard;