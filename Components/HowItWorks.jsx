import React, { memo } from 'react';
import styles from '../styles/HowItWorksStyle.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Framer Motion
import { m } from 'framer-motion'


// Icons
import headerIcon from "../public/images/Assets/Icones/Icones Sction How it Works/icon 1.svg";

const HowItWorksCard = dynamic(() => import('./HowItWorksCard'))

function HowItWorks({translation}) {
    const router = useRouter()
    const lang = router.query.lang;
    
    const isRTL = lang === 'ar' || lang === 'ma';
    
    const variants = {
      hidden: { x: 100, opacity: 0 },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: custom
            }
        })
    };

    return (
        <div className='w-full h-auto flex flex-col justify-center gap-10 py-16' style={{ background: 'rgb(236, 236, 236, 1)' }}>
            {/* Header */}
            <div className={`w-full flex ${isRTL ? 'flex-row-reverse' : 'rlex-row'} justify-center items-center gap-5`}>
                <div className='sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] relative'>
                <Image fill src={headerIcon} alt='icon' />
                </div>
                <span className='capitalize sm:text-6xl text-4xl' style={{ color: '#5357A6' }}>{translation?.title ?translation?.title : 'How it works'}</span>
            </div>

            {/* Line Steps */}

            <div 
                className={`w-full flex sm:flex-row flex-col min-[1450px]:justify-center sm:justify-start justify-center items-center sm:gap-2 gap-5 min-[1450px]:overflow-hidden sm:overflow-x-auto
                ${isRTL ? 'sm:scale-[-1]' : 'scale-1'}`}
            >

                {
                   translation?.data.map((item, key) => (
                        (
                            key === 0 ? (
                                <div key={key}>
                                    <m.div
                                        variants={variants}
                                        whileInView="visible"
                                        initial="hidden"
                                        custom={key}
                                        key={(key + 3) / 10} 
                                        className={`hidden sm:block ${styles.HowItWorksPuzzle} ${styles.HowItWorksPuzzle1_right} min-w-[180px] h-[300px] relative`}>
                                        {/* First Puzzle */}
                                        <div className='absolute right-2 top-[50%] -translate-y-[50%] w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#ECECEC]'>
                                            <span className={`text-2xl ${isRTL ? 'rotate-[180deg]' : 'rotate-0'}`} style={{ color: '#5357A6' }}>{item.id}</span>
                                        </div>
                                    </m.div>
                                    <div className='sm:hidden w-[60px] h-[60px] rounded-full flex justify-center items-center -mb-[20px]'>
                                        <span className='text-3xl sm:text-2xl' style={{ color: '#5357A6' }}>{item.id}</span>
                                    </div>
                                </div>
                            ) : (
                                (key ===translation?.data.length - 1 ? (
                                    <m.div
                                            variants={variants}
                                            initial='hidden'
                                            whileInView='visible'
                                            custom={(key + 3) / 10} key={key}
                                            id='lastHowItWorksPuzzle'
                                            className={`hidden sm:block ${styles.HowItWorksPuzzle} ${styles.HowItWorksPuzzle1_left} min-w-[155px] h-[300px] -ml-10 relative`}>
                                        {/* Last Puzzle */}
                                    </m.div>
                                ) : (
                                    <HowItWorksCard variants={variants} key={key} index={key} content={item.title} content_bold={item.titleBold} id={item.id} />
                                ))
                            )
                        )
                    ))
                }

            </div>
        </div>
    )
}
const MemorizedHowItWorks = memo(HowItWorks);
export default MemorizedHowItWorks;