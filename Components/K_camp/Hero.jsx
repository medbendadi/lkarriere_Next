import React, { memo } from 'react'
import { Link as ScrollLink} from 'react-scroll';
import Image from 'next/image';

// Feather icons
import { AlertTriangle, ChevronDown } from 'react-feather';

// Pictures
import hero from '../../public/images/Assets/IMG SVG/Section Bar/business Men.webp';

// Framer Motion
import { motion } from 'framer-motion';


const Hero = ({ translation, isRTL }) => {

   return (
      <div className='h-[85vh] max-h-[700px] min-h-[600px] w-full flex justify-center items-center purple-gradient-to-light text-white gap-10 overflow-hidden'>
         <div className='w-[90%] h-full max-w-[1200px] flex flex-col justify-center items-center relative py-10 gap-16'>
            {/* Picture */}
            <div className={`absolute bottom-0 z-0  md:block hidden ${isRTL ? ( 'left-0 scale-x-[1]' ) : ( 'right-0 scale-x-[-1]')}`}>
               <Image className='X-hero lg:max-w-[600px] md:max-w-[550px]' src={hero} alt="" style={{ filter: 'drop-shadow(0 0 1.5rem rgb(255, 255, 255, 0.5))' }} />
            </div>

            {/* Content */}
            <div className={`w-full max-w-[1200px] flex flex-col items-center gap-7 z-10 text-center ${isRTL ? ( 'md:items-end md:text-end' ) : ( 'md:items-start md:text-start' )}`}>
               {/* Title */}
               <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                     duration: ".5",
                     delay: ".5"
                  }}
               >
                  <span className='xl:text-6xl lg:text-5xl text-4xl font-bold capitalize'>{translation?.title1} <br />{translation?.title1A}</span>
               </motion.div>
               {/* Description */}
               <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                     duration: ".5",
                     delay: "1"
                  }}
               >
                  <p className='xl:text-lg lg:text-base text-sm font-light'>{translation?.title2}<br />{translation?.title2A}</p>
               </motion.div>
               

               <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                     duration: ".5",
                     delay: "1.5"
                  }}
               >
                  <div className='bg-white/20 py-5 md:px-10 px-5 rounded-[25px] flex items-center md:gap-7 gap-3' style={isRTL ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}> 
                     {/* Warning */}
                     <div className='text-end' style={isRTL ? { textAlign: 'end' } : { textAlign: 'start' }}>
                        <p className='xl:text-lg lg:text-base text-sm font-extralight max-w-[350px]'>{translation?.warning}</p>
                     </div>

                     {/* icon */}
                     <AlertTriangle className='text-[#FAA32C]' size={26} />
                  </div>
               </motion.div>
               
            </div>
            {/* Button */}
            <div className='w-full max-w-[1200px] z-10'>
            <ScrollLink
               to="CounterSection"
               spy={true}
               smooth={true}
               offset={-0}
               duration={500}
               className="w-full py-4 px-5 yellow-gradient-to-dark flex items-center justify-center gap-2 rounded-full hover:opacity-[.9] duration-300 cursor-pointer"
               style={
                  isRTL
                     ? { flexDirection: 'row' }
                     : { flexDirection: 'row-reverse' }
               }
               >
                  <ChevronDown size={20} />
                  <span className="lg:text-lg md:text-base text-sm">{translation?.button}</span>
               </ScrollLink>
            </div>
         </div>
         
      </div>
   )
}
const MemorizedHero = memo(Hero);
export default MemorizedHero;