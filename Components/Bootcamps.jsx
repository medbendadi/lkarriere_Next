import { memo } from 'react';
import Image from 'next/image';
import styles from '../styles/Bootcamps.module.css'

// Icons
import HeaderIcon from '../public/images/Assets/Icones/Icones Setion Bootcamps/icon 1.svg';

// Feather icons

import { useState } from 'react';
import {m} from 'framer-motion'
import { ChevronDown, ChevronUp } from 'react-feather';
import dynamic from 'next/dynamic';

const BootcampsCard = dynamic(() => import('../Components/BootcampsCard'), {
    loading: () => <p></p>,
});

function Bootcamps({ Bootcamps, translation, isRTL, lang }) {
    const [countBootcampCards, setCountBootcampCards] = useState(6);
    const [showBootcampCards, setShowBootcampCards] = useState(false);

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
                    <Image className='lg:w-[45px] md:w-[35px] w-[45px]' src={HeaderIcon} alt="" />
                    <span className='capitalize lg:text-4xl md:text-3xl text-4xl text-white'>{translation?.title}</span>
                </div>
            </m.div>

            {/* Content */}
            <div className='w-full max-w-[1600px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center md:px-10 px-5 gap-5 gap-y-16'>
                {
                    Bootcamps?.slice(0, countBootcampCards).map((item, key) => {
                        return (
                            <BootcampsCard translation={translation} item={item} key={key} isRTL={isRTL} lang={lang} />
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

const MemorizedBootcamps = memo(Bootcamps);
export default MemorizedBootcamps;

export const getStaticProps = async () => {
    try{
        const query = encodeURIComponent(`*[_type == "bootcamps"]`);
        const url = `${process.env.SANITY_URL}query=${query}`;
        console.log(url);
        const res = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
    
        const data = await res.json();
        const Bootcamps = data.result;
        if (!Bootcamps || !Bootcamps.length === 0) {
        return {
            props: {
                Bootcamps: [],
            }
        };
        } else {
        return {
            props: {
                Bootcamps
            },
        }
        }
    }catch(error) {
        console.log("Error: ", error)
    }
 };