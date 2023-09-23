import React, { useState, memo } from 'react'
import styles from '../../styles/K-camp/CounterSection.module.css'

// Count up
import CountUp from 'react-countup';

// Scroll trigger
import ScrollTrigger from 'react-scroll-trigger';

// Framer Motion
import { motion } from 'framer-motion';

const CounterSection = ({ count, translation }) => {
   const [counterOn, setCounterOn] = useState(false);

   return (
      //   {/* Counter */}
      <div id='CounterSection' className='h-auto w-full flex flex-col items-center min-[795px]:py-16 py-10 min-[795px]:gap-16 gap-10 overflow-hidden'>
         {/* Title */}
         <div className='text-center'>
            <span className='text-[#5357A6] min-[795px]:text-4xl min-[570px]:text-2xl min-[450px]:text-xl text-lg font-bold'>{translation?.title1} <br />{translation?.title2}</span>
         </div>

         {/* Infos */}
         <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='flex justify-center items-center text-white'>
               {/* First Puzzle */}
               <motion.div
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{x: -100, opacity: 0}}
                  transition={{
                     duration: '.5',
                  }}
               >
                  <div 
                     className={`min-[1260px]:min-h-[250px] min-[1260px]:h-[350px] min-[1260px]:min-w-[400px] min-[1260px]:w-[400px]  
                     min-[795px]:min-h-[265px] min-[795px]:h-[265px] min-[795px]:min-w-[300px] min-[795px]:w-[300px] 
                     min-[570px]:min-h-[200px] min-[570px]:h-[200px] min-[570px]:min-w-[200px] min-[570px]:w-[200px] 
                     min-[450px]:min-h-[155px] min-[450px]:h-[155px] min-[450px]:min-w-[155px] min-[450px]:w-[155px] 
                     min-h-[120px] h-[120px] min-w-[120px] w-[120px] 
                     ${styles.CountCardBgYellowLeft} flex flex-col justify-center items-center gap-2 
                     min-[1260px]:-mr-[75px] min-[795px]:-mr-[55px] min-[570px]:-mr-[28px] min-[450px]:-mr-[22px] -mr-[17px]`}
                     style={{ filter: 'drop-shadow(0 0 16px rgb(0, 0, 0, .19))' }}
                  >
                     <span className='min-[795px]:text-8xl min-[450px]:text-5xl text-4xl font-extrabold'>
                        {
                           counterOn && (
                              <CountUp start={0} end={count?.hours} duration={5} />
                           )
                        }
                     </span>
                     <span className='capitalize min-[795px]:text-5xl min-[450px]:text-3xl text-xl'>{translation?.hour}</span>
                  </div>
               </motion.div>
               

               {/* Medium Puzzle */}
               <div className={`min-[1260px]:min-h-[400px] min-[1260px]:h-[400px] min-[1260px]:min-w-[400px] min-[1260px]:w-[400px]  
               min-[795px]:min-h-[300px] min-[795px]:h-[300px] min-[795px]:min-w-[300px] min-[795px]:w-[300px] 
               min-[570px]:min-h-[225px] min-[570px]:h-[225px] min-[570px]:min-w-[225px] min-[570px]:w-[225px] 
               min-[450px]:min-h-[175px] min-[450px]:h-[175px] min-[450px]:min-w-[175px] min-[450px]:w-[175px] 
               min-h-[135px] h-[135px] min-w-[135px] w-[135px] 
               ${styles.CountCardBgPurple} flex flex-col justify-center items-center gap-2`} 
               style={{ filter: 'drop-shadow(0 0 16px rgb(0, 0, 0, .19))' }}>
                  <span className='min-[795px]:text-8xl min-[450px]:text-5xl text-4xl font-extrabold'>+
                     {
                        counterOn && (
                           <CountUp start={0} end={count?.sessions} duration={5} />
                        )
                     }
                  </span>
                  <span className='capitalize min-[795px]:text-5xl min-[450px]:text-3xl text-xl'>{translation?.session}</span>
               </div>

               {/* Last Puzzle */}
               <motion.div
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{x: 100, opacity: 0}}
                  transition={{
                     duration: '.5',
                  }}
               >
                  <div 
                     className={`min-[1260px]:min-h-[250px] min-[1260px]:h-[350px] min-[1260px]:min-w-[400px] min-[1260px]:w-[400px] 
                     min-[795px]:min-h-[265px] min-[795px]:h-[265px] min-[795px]:min-w-[300px] min-[795px]:w-[300px] 
                     min-[570px]:min-h-[200px] min-[570px]:h-[200px] min-[570px]:min-w-[200px] min-[570px]:w-[200px] 
                     min-[450px]:min-h-[155px] min-[450px]:h-[155px] min-[450px]:min-w-[155px] min-[450px]:w-[155px] 
                     min-h-[120px] h-[120px] min-w-[120px] w-[120px] 
                     ${styles.CountCardBgYellowRight} flex flex-col justify-center items-center gap-2 
                     min-[1260px]:-ml-[75px] min-[795px]:-ml-[55px] min-[570px]:-ml-[28px] min-[450px]:-ml-[22px] -ml-[17px]`} 
                     style={{ filter: 'drop-shadow(0 0 16px rgb(0, 0, 0, .19))' }}
                  >
                     <span className='min-[795px]:text-8xl min-[450px]:text-5xl text-4xl font-extrabold'>
                        {
                           counterOn && (
                              <CountUp start={0} end={count?.weeks} duration={5} />
                           )
                        }
                     </span>
                     <span className='capitalize min-[795px]:text-5xl min-[450px]:text-3xl text-xl'>{translation?.weeks}</span>
                  </div>
               </motion.div>
               
            </div>
         </ScrollTrigger>
      </div>

   )
}
const MemorizedCounterSection = memo(CounterSection);
export default MemorizedCounterSection;