import React, { useState, memo } from 'react';
import styles from '../../../styles/CoachesStyle.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Icons
import headerIcon from '../../../public/images/Assets/Icones/Icones Section Coaches/icon 2.svg';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';


const CoacheCard = dynamic(() => import('./CoacheCard'))

function Coaches({translation}) {
  const router = useRouter()
   const lang = router.query.lang;
   
   const isRTL = lang === 'ar' || lang === 'ma';
  
  const [swiper, setSwiper] = useState(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
      setActiveSlideIndex(swiper.realIndex);
  };


  return (
    <div id='Coaches' className={`${styles.CoachesContainer} h-auto w-full yellow-gradient-to-dark flex flex-col justify-center items-center gap-10 py-16 text-white`}>

        {/* Header */}
      <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'}  items-start gap-5`}>
        <div className='sm:w-[55px] w-[40px] sm:h-[55px] h-[40px] relative'>
            <Image fill src={headerIcon} alt="" />
        </div>
            <span className='capitalize sm:text-6xl text-4xl'>{translation?.title}</span>
        </div>

        {/* Coaches */}
        <div className={`${styles.coaches_slider_container} w-[1100px] h-auto relative`}>
          <Swiper
            className='h-full w-full relative z-0'
            spaceBetween={20}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            centeredSlides={true} 
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            onSwiper={(swiper) => setSwiper(swiper)}
            initialSlide={activeSlideIndex}
            breakpoints={{
              775: {
                slidesPerView: 3,
                spaceBetween: -5
              },
            }}
          >

            {
              translation?.data?.map((item, key) => (
                <SwiperSlide className='h-full' key={key}>
                  <CoacheCard isActive={item.id === activeSlideIndex ? true : false} picture={item.picture} name={item.name} title={item.title} />
                </SwiperSlide>
              ))
            }
          </Swiper>
          {
            swiper && (
              <div>
                <button aria-label='slide prev' onClick={() => swiper.slidePrev()} className={`${styles.coaches_button_prev} absolute -left-[45px] top-[50%] -translate-y-[50%] w-[90px] h-[90px] yellow-gradient-to-light rounded-full border-4 border-solid border-white flex justify-center items-center pe-[10px] z-10`}><ChevronLeft size={80} /></button>
                <button aria-label='slide next' onClick={() => swiper.slideNext()} className={`${styles.coaches_button_next} absolute -right-[45px] top-[50%] -translate-y-[50%] w-[90px] h-[90px] yellow-gradient-to-light rounded-full border-4 border-solid border-white flex justify-center items-center ps-[10px] z-10`}><ChevronRight size={80} /></button>
              </div>
              )
          }
          
        </div>
        

        {/* Button */}
      <div className={`${styles.coache_button_link_container} w-[1100px] md:h-[65px] h-[55px] flex justify-center items-center rounded-2xl hover:shadow-[0_0_16px_rgba(0,0,0,0.19)] duration-300`}>
            <button className={`${styles.coache_button_link} w-[1095px] md:h-[60px] h-[50px] flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-1 border-2 border-solid border-white rounded-2xl`}>  
                <span className='capitalize min-[975px]:text-2xl md:text-lg sm:text-base text-sm py-2'>{translation?.coacheButton ? translation?.coacheButton : 'More information About Coaches'}</span>
                {
                  isRTL ? (
                    <ChevronLeft />
                  ) : (
                    <ChevronRight />
                  )
                }
                
            </button>
        </div>
    </div>
  )
}
const MemorizedCoaches = memo(Coaches);
export default MemorizedCoaches;