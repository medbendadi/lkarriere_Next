import React, { memo } from 'react';
import { m } from 'framer-motion'
import styles from '../styles/WhyForWhoStyle.module.css';

// Icons
import iconWhyBox5 from '../public/images/Assets/Icones/Icones Section Why_who/icon 5.svg';
import iconWhyBox6 from '../public/images/Assets/Icones/Icones Section Why_who/icon 6.svg';
import iconWhyBox7 from '../public/images/Assets/Icones/Icones Section Why_who/icon 7.svg';
import iconWhyBox8 from '../public/images/Assets/Icones/Icones Section Why_who/icon 8.svg';
import Image from 'next/image';


function ForWhoContent({translation, isMobile}) {

    return (
        <m.div
            className={`${styles.ForWhoContent} lg:w-[600px] w-auto sm:h-[550px] h-[450px] rounded-[25px]`}>

            {/* First Line */}
            <m.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={isMobile ? undefined :{ y: 100, opacity: 0 }}
                transition={isMobile ? {duration: 0} :{
                    duration: .5,
                }}
                className='w-full h-[275px] flex justify-between'>

                {/* Box 1 */}
                <div className='w-[50%] h-full relative z-10 hover:drop-shadow-xl hover:drop-shadow-black/20 hover:scale-120 hover:-translate-x-1 hover:-translate-y-1 duration-300'>
                    <div className={`sm:w-[305px] w-[205px] sm:h-[338px] h-[238px] ${styles.puzzleWhyWhoPage} ${styles.puzzleWhyWhoPage_yellow_tl} ${styles.puzzleWhyWhoPageBox1} absolute sm:-right-[10px] -right-[5px] sm:-bottom-[28px] flex flex-col justify-start items-center sm:gap-5 gap-2 sm:pt-7 pt-5 pe-10 ps-10`}>
                    <div className='sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] relative'>
                            <Image fill className={`${styles.iconWhyWhoPage}`} src={iconWhyBox5} alt="" />
                            </div>
                        <div className='w-[50%] border-b-2 border-solid border-white' />
                        <div className={`${styles.description} sm:w-[80%] w-full sm:text-xs text-[9px] text-white text-center`}>
                            <p>{translation?.forWho?.data[0]?.description}</p>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className='w-[50%] h-full relative z-20 hover:drop-shadow-xl hover:drop-shadow-black/20 hover:scale-120 hover:translate-x-1 hover:-translate-y-1 duration-300'>
                    <div className={`sm:w-[300px] w-[212px] sm:h-[320px] h-[220px] ${styles.puzzleWhyWhoPage} ${styles.puzzleWhyWhoPage_yellow_tr} ${styles.puzzleWhyWhoPageBox2} absolute sm:-left-[37px] -left-[22px] sm:-bottom-[.5px] bottom-[59px] flex flex-col justify-start items-center sm:gap-5 gap-2 sm:pt-10 pt-6 ms:ps-10 ps-5`}>
                        <div className='sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] relative'>
                        <Image fill className={`${styles.iconWhyWhoPage}`} src={iconWhyBox6} alt="" />
                        </div>
                        <div className='w-[50%] border-b-2 border-solid border-white' />
                        <div className={`${styles.description} w-[80%] sm:text-xs text-[9px] text-white text-center`}>
                            <p>{translation?.forWho?.data[1]?.description}</p>
                        </div>
                    </div>
                </div>
            </m.div>

            {/* Second Line */}
            <m.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={isMobile ? undefined :{ y: 100, opacity: 0 }}
                transition={isMobile ? {duration:0} :{
                    duration: .5,
                }}
                className={`${styles.secondLineWhyForWhoPage} w-full h-[275px] flex justify-between sm:-mt-[10px] -mt-[55px]`}>

                {/* Box 3 */}
                <div className='w-[50%] h-full relative z-0 hover:drop-shadow-xl hover:drop-shadow-black/20 hover:scale-120 hover:-translate-x-1 hover:translate-y-1 duration-300'>
                    <div className={`sm:w-[300px] w-[210px] sm:h-[320px] h-[220px] ${styles.puzzleWhyWhoPage} ${styles.puzzleWhyWhoPage_yellow_bl} ${styles.puzzleWhyWhoPageBox3} absolute sm:-right-[25px] -right-[20px] sm:-top-0 -top-[5px] flex flex-col justify-start items-center sm:gap-5 gap-2 sm:pt-[60px] pt-[40px] pe-[30px] pb-3 `}>
                    <div className='sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] relative'>
                            <Image fill className={`${styles.iconWhyWhoPage}`} src={iconWhyBox7} alt="" />
                            </div>
                        <div className='w-[50%] border-b-2 border-solid border-white' />
                        <div className={`${styles.description} w-[80%] sm:text-xs text-[9px] text-white text-center`}>
                            <p>{translation?.forWho?.data[2]?.description}</p>
                        </div>
                    </div>
                </div>

                {/* Box 4 */}
                <div className='w-[50%] h-full relative -z-0 hover:drop-shadow-xl hover:drop-shadow-black/20 hover:scale-120 hover:translate-x-1 hover:translate-y-1 duration-300'>
                    <div className={`sm:w-[300px] w-[200px] sm:h-[335px] h-[235px] ${styles.puzzleWhyWhoPage} ${styles.puzzleWhyWhoPage_yellow_br} ${styles.puzzleWhyWhoPageBox4} absolute sm:-left-[20px] -left-[4px] -top-[25px] flex flex-col justify-start items-center sm:gap-5 gap-2 sm:pt-[80px] pt-[50px] ps-[30px] pe-4`}>
                    <div className='sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] relative'>
                            <Image fill className={`${styles.iconWhyWhoPage}`} src={iconWhyBox8} alt="" />
                            </div>
                        <div className='w-[50%] border-b-2 border-solid border-white' />
                        <div className={`${styles.description} sm:w-[80%] w-full sm:text-xs text-[9px] text-white text-center`}>
                            <p>{translation?.forWho?.data[3]?.description}</p>
                        </div>
                    </div>
                </div>
            </m.div>
        </m.div>
    )
}
const MemorizedForWhoContent = memo(ForWhoContent);
export default MemorizedForWhoContent;