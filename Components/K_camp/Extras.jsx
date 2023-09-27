import React, { memo } from 'react'
import Image from 'next/image';

// Framer Motion
import { m } from 'framer-motion';

// icons
import purplePlusIcon from '../../public/images/Assets/Icones/Icones Section Extras/plus purple.svg';
import yellowPlusIcon from '../../public/images/Assets/Icones/Icones Section Extras/plus yellow.svg';
import checkIcon from '../../public/images/Assets/Icones/Icones Section Infos/check.svg';

function Extras({ extraSection, guarantee, subscriptionSection, paymentOptionSection, translationExtras, translationGuarantee, translationSubscription, translationPaymentOption, translationButton, isRTL, lang }) {

  return (
    <div className='w-full h-auto flex flex-col items-center gap-5 py-16 overflow-hidden'>
        {/* Title */}
        <div className='max-w-[1200px] text-center leading-9'>
            <span className='lg:text-4xl min-[570px]:text-3xl sm:text-2xl text-xl text-[#5358A6] font-bold'>{translationExtras?.title1}<br />{translationExtras?.title2}</span>
        </div>

        <div className='lg:w-[80%] sm:w-[90%] w-[98%] max-w-[1200px] h-auto flex flex-col gap-5'>
            <ul className={`w-full h-auto flex flex-col gap-2 py-10 min-[570px]:px-12 px-5 bg-[#ececec] rounded-[35px] text-[#5358A6] relative ${isRTL ? ( ' text-end ' ) : ( ' text-start ' )}`}>

                <div className={`absolute  sm:-top-[35px] -top-[25px] ${isRTL ? 'sm:-right-4 -right-0' : 'sm:-left-4 -left-0'}`}>
                    <m.div
                        whileInView={{scale: 1}}
                        initial={{scale: 1.7}}
                        transition={{
                            type: "spring"
                        }}
                    >
                        <Image className='sm:w-[70px] w-[50px]' src={purplePlusIcon} alt="" loading='lazy' />
                    </m.div>
                </div>
                
                {
                    extraSection?.list?.map((item, key) => (
                        <li key={key} className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-start gap-2`}>
                            <Image className='w-[16px] sm:pt-2 pt-1' src={checkIcon} alt="" loading='lazy' />
                            <span className='min-[570px]:text-lg sm:text-base text-sm'>{lang === 'en' ? item?.en: lang === 'fr' ?item?.fr : lang === 'ar' && item?.ar}</span>
                        </li>
                    ))
                }
            </ul>

            <div className='w-full h-auto flex justify-center items-center py-6 sm:px-16 px-7 purple-gradient-to-light rounded-3xl text-white text-center relative'>
                <div className={`absolute sm:-top-[35px] -top-[25px] ${isRTL ? 'sm:-right-4 -right-0' : 'sm:-left-4 -left-0'}`}>
                    <m.div
                        whileInView={{scale: 1}}
                        initial={{scale: 1.7}}
                        transition={{
                            type: "spring"
                        }}
                    >
                        <Image className='sm:w-[70px] w-[50px]' src={yellowPlusIcon} alt="" loading='lazy' />
                    </m.div>
                </div>
                <span className='sm:text-base text-xs'>{translationGuarantee?.description}</span>
            </div>

            <div className='w-full h-auto flex justify-center items-center py-10'>
                <div className='flex flex-col gap-10 text-[#5358A6] text-center'>
                    <div className='flex flex-col gap-3 text-center'>
                        {/* Title */}
                        <div>
                            <span className='lg:text-3xl min-[570px]:text-2xl sm:text-xl text-lg font-bold'>{translationSubscription?.title1}</span>
                        </div>

                        {/* Description */}
                        <div>
                            <p className='lg:text-lg min-[570px]:text-base sm:text-sm text-xs'>{translationSubscription?.title2}</p>
                        </div>
                    </div>

                    <div className='w-full h-auto flex justify-center items-center'>
                        <div className='w-fit h-auto flex justify-center items-start bg-[#ececec] rounded-[45px] py-10 px-16 gap-2'>
                            <div className='h-full'>
                                <div>
                                    <span className='sm:text-7xl text-5xl font-extrabold text-[#FBBC67]'>00</span> 
                                </div>
                                <div>
                                    <span className='capitalize sm:text-2xl text-lg'>{translationSubscription?.hour}</span>
                                </div>
                            </div>
                            <div className='sm:pt-4 pt-2'>
                                <span className='sm:text-3xl text-xl font-extrabold'>:</span>
                            </div>
                            <div>
                                <div>
                                    <span className='sm:text-7xl text-5xl font-extrabold text-[#FBBC67]'>00</span> 
                                </div>
                                <div>
                                    <span className='capitalize sm:text-2xl text-lg'>{translationSubscription?.minute}</span>
                                </div>
                            </div>
                            <div className='sm:pt-4 pt-2'>
                                <span className='sm:text-3xl text-xl font-extrabold'>:</span>
                            </div>
                            <div>
                                <div>
                                    <span className='sm:text-7xl text-5xl font-extrabold text-[#FBBC67]'>00</span> 
                                </div>
                                <div>
                                    <span className='capitalize sm:text-2xl text-lg'>{translationSubscription?.second}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto flex justify-center items-center py-6 sm:px-16 px-7 purple-gradient-to-light rounded-3xl text-white text-center relative'>
                <div className={`absolute sm:-top-[35px] -top-[25px] ${isRTL ? 'sm:-right-4 -right-0' : 'sm:-left-4 -left-0'}`}>
                    <m.div
                        whileInView={{scale: 1}}
                        initial={{scale: 1.7}}
                        transition={{
                            type: "spring"
                        }}
                    >
                        <Image className='sm:w-[70px] w-[50px]' src={yellowPlusIcon} alt="" loading='lazy' />
                    </m.div>
                </div>
                <span className='sm:text-base text-xs'>{translationPaymentOption?.description} <a href='/' className='text-[#FBBC67]'>{translationPaymentOption?.link}</a></span>
            </div>

            {/* button */}
            <div className='w-full flex justify-center items-center'>
                <button className='min-[795px]:w-[50%] w-[70%] min-w-[250px] py-4 rounded-full yellow-gradient-to-light flex justify-center items-center text-white min-[570px]:text-lg sm:text-base text-sm shadow-[0_0_16px_rgba(0,0,0,0.19)] hover:opacity-[.9] duration-300' >
                {
                    translationButton?.join
                }
                </button>
            </div>
        </div>
    </div>
  )
}
const MemorizedExtras = memo(Extras);
export default MemorizedExtras;