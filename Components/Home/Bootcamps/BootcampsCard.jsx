import React, { memo } from 'react';
import styles from '../../../styles/BootcampsCard.module.css'
import Link from 'next/link';


// Feather icons
import { ChevronRight } from 'react-feather'

// Framer Motion
import { m } from 'framer-motion'

// Icons
import BootcampsCardIcon from '../../../public/images/Assets/Icones/Icones Setion Bootcamps/icon 2.svg';
import LevelIcon from '../../../public/images/Assets/Icones/Icones Setion Bootcamps/icon 3.svg';
import DurationIcon from '../../../public/images/Assets/Icones/Icones Setion Bootcamps/icon 4.svg';
import JoinIcon from '../../../public/images/Assets/Icones/Icones Setion Bootcamps/icon 5.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';



function BootcampsCard({ item, translation }) {
    const router = useRouter()
    const lang = router.query.lang;
    
    const isRTL = lang === 'ar' || lang === 'ma';
    

    const itemAnimation = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };
    return (
        <m.div
            whileInView="visible"
            initial="hidden"
            variants={itemAnimation}
            viewport={{ once: true }}
            className='w-full flex justify-center items-center'>
            <div className={`${styles.BootcampsCard} w-[380px] min-w-[300px] h-[500px] bg-white rounded-[50px] flex flex-col justify-between items-center gap-1 shadow-xl shadow-black/20 py-4 relative overflow-y-auto`}>
                {/* icon */}
                <div className='w-[120px] h-[120px] object-cover relative'>
                    <Image fill src={BootcampsCardIcon} alt="icon" loading='lazy' />
                </div>

                {/* Titles */}
                <div className={`${styles.BootcampsCardTitles} w-full flex flex-col items-center gap-1 text-white`}>
                    <div className={`${styles.BootcampsCardTitle} purple-gradient-to-light w-[80%] py-3 flex justify-center items-center rounded-t-full text-cente`}>
                        <span className='uppercase text-lg'>{lang === 'en' ? item?.title.en: lang === 'fr' ?item?.title.fr : lang === 'ar' && item?.title.ar}</span>
                    </div>
                    <div className={`${styles.BootcampsCardSemiTitles} w-[85%] flex gap-1`}>
                        {/* First item */}
                        <div className='yellow-gradient-to-dark w-[50%] py-2 rounded-tl-lg rounded-bl-3xl pr-4 pl-5'>
                            <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                                {/* Title */}
                                <div>
                                    <span className='capitalize font-light text-sm'>{translation?.levelTitle}</span>
                                </div>
                                {/* icon */}
                                <div className={`w-[16px] h-[16px] relative ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                                    <Image fill src={LevelIcon} alt="icon" />
                                </div>
                            </div>
                            <div className={`${isRTL ? 'text-end' : 'text-start'}`}>
                                <span className='text-lg capitalize'>{lang === 'en' ? item?.level.en: lang === 'fr' ?item?.level.fr : lang === 'ar' && item?.level.ar}</span>
                            </div>
                        </div>
                        {/* Second item */}
                        <div className='yellow-gradient-to-light w-[50%] py-2 rounded-tr-lg rounded-br-3xl px-5'>
                            <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                                {/* Title */}
                                <div>
                                    <span className='capitalize font-light text-sm'>{translation?.durationTitle}</span>
                                </div>
                                {/* icon */}
                                <div className={`w-[16px] h-[16px] relative ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                                    <Image fill src={DurationIcon} alt="icon" />
                                </div>
                            </div>
                            <div className={`${isRTL ? 'text-end' : 'text-start'}`}>
                                <span className='text-lg capitalize'>{item?.duration} {translation?.month}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className={`${styles.BootcampsCardDescription} w-[90%] text-center`}>
                    <p style={isRTL? { direction: 'rtl'} : {direction: 'ltr'}} className='text-sm text-[#5357A6]'>{lang === 'en' ? item?.description.en: lang === 'fr' ?item?.description.fr : lang === 'ar' && item?.description.ar}</p>
                </div>

                {/* Links */}
                <div className={`${styles.BootcampsCardLinks} sm:w-[90%] w-full flex justify-center items-center text-xs ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                    {/* First Button */}
                    <Link href='/'
                        className={`
                        ${styles.first_button} yellow-gradient-to-dark uppercase flex justify-center items-start gap-2 w-[45%] py-4 pe-[20px] rounded-full text-white -mr-2 relative 
                        before:content-[""] before:absolute before:w-[28px] before:h-[28px] before:rounded-full before:bg-white before:right-1 before:top-[50%] before:-translate-y-[50%] hover:opacity-[.9] duration-300`}
                    >
                        <div className={`w-[14px] h-[14px] relative ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                        <Image fill src={JoinIcon} alt="icon" />
                        </div>
                        <span className={`${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>{translation?.join}</span>
                    </Link>

                    {/* Second Button */}
                    <Link href={`k-camp/`+item.label}
                        className={`${styles.second_button} uppercase flex justify-center items-center w-[45%] py-4 rounded-full relative -ml-1 hover:opacity-[.9] duration-300 bg-[#ececec] text-[#5357A6]`}>
                        <span className="sr-only">{lang === 'en' ? item?.title.en: lang === 'fr' ?item?.title.fr : lang === 'ar' && item?.title.ar}</span>
                        <span className={`${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>{translation?.learn}</span>
                        <ChevronRight size={16} />
                    </Link>
                </div> 
            </div>
            
        </m.div>
    )
}
const MemorizedBootcampsCard = memo(BootcampsCard);
export default MemorizedBootcampsCard;