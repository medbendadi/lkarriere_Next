import React, { memo } from 'react';
import styles from  '../../../styles/CoacheCardStyle.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';


function CoacheCard({ isActive, picture, name, title }) {
    const router = useRouter()
    const lang = router.query.lang;
    
    const isRTL = lang === 'ar' || lang === 'ma';
   
    if(isActive){
        return (
            <div className={`${styles.coache_card} ${styles.active} min-h-[400px] h-[400px] min-w-[450px] w-[450px] ${styles.CoacheCardBgColor} flex flex-col justify-center items-center gap-8 py-5 rounded-[50px] relative z-10 my-5`}>
                
                {/* Photo */}
                <div className={`${styles.picture_container}`}>
                    <div className='min-w-[165px] min-h-[165px] max-w-[165px] max-h-[165px] rounded-full border-4 border-solid border-white relative overflow-hidden'>
                    <Image fill className='object-cover' src={picture} alt="user pic" loading='lazy' />

                    </div>
                </div>

                <div className='w-full px-8 text-center'>
                    {/* Name */}
                    <div>
                        <span className={`${styles.coacheName} uppercase text-white ${isRTL ? 'text-xl' : 'text-2xl'}`}>{name}</span>
                    </div>

                    {/* Title */}
                    <div>
                        <span className={`${styles.coacheTitle} capitalize text-white ${isRTL ? 'text-base' : 'text-xl'} font-extralight`}>{title}</span>
                    </div>
                </div>
            </div>
        )
        
    }
  return (
    <div className={`${styles.coache_card} min-h-[400px] h-[400px] min-w-[350px] w-[350px] ${styles.CoacheCardBgWhite} flex flex-col justify-center items-center gap-8 py-5 rounded-[50px] relative z-0 my-5`}>
        
        {/* Photo */}
          <div className={`${styles.picture_container} min-w-[175px] min-h-[175px] max-w-[175px] max-h-[175px] border-[.1px] border-solid border-slate-100 rounded-full relative flex justify-center items-center`}>
              <div className='min-w-[165px] min-h-[165px] max-w-[165px] max-h-[165px] rounded-full overflow-hidden relative'>
            <Image fill className='object-cover' src={picture} alt="" loading='lazy' />
              </div>
            <div className='absolute inset-0 bg-white/70 rounded-full'></div>
        </div>

        <div className='w-full px-1 text-center'>
            {/* Name */}
            <div>
                <span className={`${styles.coacheName} uppercase text-[#b1b1b1] ${isRTL ? 'text-xl' : 'text-2xl'}`}>{name}</span>
            </div>

            {/* Title */}
            <div>
                <span className={`${styles.coacheTitle} capitalize text-[#b1b1b1] ${isRTL ? 'text-base' : 'text-xl'} font-extralight`}>{title}</span>
            </div>
        </div>
    </div>
  )
}
const MemorizedCoacheCard = memo(CoacheCard);
export default MemorizedCoacheCard;