import { useRouter } from 'next/router';
import styles from '../styles/Bootcamps.module.css'

// Icons

// Feather icons

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {m} from 'framer-motion'
import { ChevronDown, ChevronUp } from 'react-feather';

// const BootcampsCard = (await import('../../../../Components/BootcampsCard/BootcampsCard')).default;

function Bootcamps({ data, translation }) {
    const { locale } = useRouter();

    const [countBootcampCards, setCountBootcampCards] = useState(6);
    const [showBootcampCards, setShowBootcampCards] = useState(false);

    const isRTL = locale === 'ar_AR' || locale === 'ar_MA';


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
        <div id='Home-Bootcamps' className={`${styles.Bootcamps} ${styles.BootcampsBg} w-full h-auto py-16 flex flex-col items-center gap-10 relative`}>
            {/* Header */}
            <m.div
                whileInView="visible"
                initial="hidden"
                variants={itemAnimation}
                viewport={{ once: true }}
                className={`${styles.Bootacamps_bg_header} lg:w-full w-[80%] max-w-[1600px] h-[100px] flex justify-center items-center`}>
                <div className={`h-full flex gap-3 items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <img className='lg:w-[45px] md:w-[35px] w-[45px]' src={HeaderIcon} alt="" />
                    <span className='capitalize lg:text-4xl md:text-3xl text-4xl text-white'>{(t('home', { returnObjects: true })?.bootcamps?.title ? t('home', { returnObjects: true })?.bootcamps?.title : 'bootcamp')}</span>
                </div>
            </m.div>

            {/* Content */}
            <div className='w-full max-w-[1600px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center md:px-10 px-5 gap-5 gap-y-16'>
                {
                    data?.slice(0, countBootcampCards).map((item, key) => {
                        return (
                            <BootcampsCard item={item} key={key} />
                        )
                    })
                }
            </div>

            {
               !showBootcampCards && (
                  <button onClick={() => {setCountBootcampCards(data.length);  setShowBootcampCards(true)}} className='sm:hidden w-[80%] py-3 yellow-gradient-to-dark rounded-2xl text-white flex justify-center items-center gap-2' type='button'>
                    <span className='capitalize text-base'>Show more</span>
                    <ChevronDown size={20} />
                  </button>
               )
            }
            {
               showBootcampCards && (
                  <button onClick={() => {setCountBootcampCards(6); setShowBootcampCards(false)}} className='sm:hidden w-[80%] py-3 yellow-gradient-to-dark rounded-2xl text-white flex justify-center items-center gap-2' type='button'>
                    <span className='capitalize text-base'>Show less</span>
                    <ChevronUp size={20} />
                  </button>
               )  
            }
        </div>
    )
}


export const getStaticProps = async (context) => {
    const query = encodeURIComponent(`*[_type == "bootcamps"]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    const data = res.result;
    if (!data || !data.length === 0) {
       return {
          props: {
             data: [],
          }
       };
    } else {
       return {
          props: {
             data
          },
       }
    }
 };

const MemorizedBootcamps = memo(Bootcamps);
export default MemorizedBootcamps;