import React, { memo } from 'react';
import styles from '../styles/BootcampsCard.module.css'
import Link from 'next/link';


// Feather icons
import { ChevronRight } from 'react-feather'

// Framer Motion
import { motion } from 'framer-motion'

// Icons
import BootcampsCardIcon from '/images/Assets/Icones/Icones Setion Bootcamps/icon 2.svg';
import LevelIcon from '/images/Assets/Icones/Icones Setion Bootcamps/icon 3.svg';
import DurationIcon from '/images/Assets/Icones/Icones Setion Bootcamps/icon 4.svg';
import JoinIcon from '/images/Assets/Icones/Icones Setion Bootcamps/icon 5.svg';


// Translation
import { useTranslation } from 'react-i18next';

function BootcampsCard({ item, translation }) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar' || i18n.language === 'dr';

    const lang = localStorage.getItem('lang') || i18n.language
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
        <motion.div
            whileInView="visible"
            initial="hidden"
            variants={itemAnimation}
            viewport={{ once: true }}
            className='w-full flex justify-center items-center'>
            <div className='BootcampsCard w-[380px] min-w-[300px] h-[500px] bg-white rounded-[50px] flex flex-col justify-between items-center gap-1 shadow-xl shadow-black/20 py-4 relative overflow-y-auto'>
                {/* icon */}
                <div>
                    <img className='w-[120px] object-cover' src={BootcampsCardIcon} alt="icon" loading='lazy' />
                </div>

                {/* Titles */}
                <div className='BootcampsCardTitles w-full flex flex-col items-center gap-1 text-white'>
                    <div className='BootcampsCardTitle purple-gradient-to-light w-[80%] py-3 flex justify-center items-center rounded-t-full text-center'>
                        <span className='uppercase text-lg'>{lang === 'en' ? item?.title.en: lang === 'fr' ?item?.title.fr : lang === 'ar' && item?.title.ar}</span>
                    </div>
                    <div className='BootcampsCardSemiTitles w-[85%] flex gap-1'>
                        {/* First item */}
                        <div className='yellow-gradient-to-dark w-[50%] py-2 rounded-tl-lg rounded-bl-3xl pr-4 pl-5'>
                            <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                                {/* Title */}
                                <div>
                                    <span className='capitalize font-light text-sm'>{t('home', { returnObjects: true })?.bootcamps?.levelTitle}</span>
                                </div>
                                {/* icon */}
                                <div>
                                    <img className={`w-[16px] ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`} src={LevelIcon} alt="icon" />
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
                                    <span className='capitalize font-light text-sm'>{t('home', { returnObjects: true })?.bootcamps?.durationTitle}</span>
                                </div>
                                {/* icon */}
                                <div>
                                    <img className={`w-[16px] ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`} src={DurationIcon} alt="icon" />
                                </div>
                            </div>
                            <div className={`${isRTL ? 'text-end' : 'text-start'}`}>
                                <span className='text-lg capitalize'>{item?.duration} {t('home', { returnObjects: true })?.bootcamps?.month}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className='BootcampsCardDescription w-[90%] text-center'>
                    <p className='text-sm text-[#5357A6]'>{lang === 'en' ? item?.description.en: lang === 'fr' ?item?.description.fr : lang === 'ar' && item?.description.ar}</p>
                </div>

                {/* Links */}
                <div className={`BootcampsCardLinks sm:w-[90%] w-full flex justify-center items-center text-xs ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                    {/* First Button */}
                    <Link href='/'
                        className={`
                        first-button yellow-gradient-to-dark uppercase flex justify-center items-start gap-2 w-[45%] py-4 pe-[20px] rounded-full text-white -mr-2 relative 
                        before:content-[""] before:absolute before:w-[28px] before:h-[28px] before:rounded-full before:bg-white before:right-1 before:top-[50%] before:-translate-y-[50%] hover:opacity-[.9] duration-300`}
                    >
                        <img className={`w-[14px] ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`} src={JoinIcon} alt="icon" />
                        <span className={`${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>{t('home', { returnObjects: true })?.bootcamps?.join}</span>
                    </Link>

                    {/* Second Button */}
                    <Link href={`K-camp/`+item.label} target='_blank'
                    className='second-button uppercase flex justify-center items-center w-[45%] py-4 rounded-full relative -ml-1 hover:opacity-[.9] duration-300 bg-[#ececec] text-[#5357A6]'>
                        <span className={`${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>{t('home', { returnObjects: true })?.bootcamps?.learn}</span>
                        <ChevronRight size={16} />
                    </Link>
                </div> 
            </div>
            
        </motion.div>
    )
}
const MemorizedBootcampsCard = memo(BootcampsCard);
export default MemorizedBootcampsCard;