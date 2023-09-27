import React, { useState, memo, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// icons
import user from '../../public/images/Assets/Icones/Icobes Section Reviews/icon 3 white.svg';

import { m } from 'framer-motion'


// Pictures
import projectPicture1 from '../../public/images/Assets/IMG SVG/Section Projects/project1.png';
import projectPicture2 from '../../public/images/Assets/IMG SVG/Section Projects/project2.png';
import projectPicture3 from '../../public/images/Assets/IMG SVG/Section Projects/project3.png';

const MoreBigBtn = dynamic(() => import('../MoreBigBtn'))

const Projects = ({ translation, tButtons, isRTL }) => {
   const [countProducts, setCountProducts] = useState(2);
   const [ projects, setProjects ] = useState();


   useEffect(() => {
      setProjects([
         {
            'img': projectPicture1,
            'description': 'نظام للجامعات لإدارة وحجز الغرف للفنادق الطلابية، بحيث يسهل على الطلاب حجز الغرفة المناسبة عبر نظام فلترة ذكي و على المدراء عرض جميع الغرف المتوفرة ومتابعة الحجوزات وعمليات الدفع',
            'team': ['محمد', 'ياسير', 'براهيم']
         },
         {
            'img': projectPicture2,
            'description': 'نظام مخصص للجامعات يهدف إلى إدارة وحجز الغرف في الفنادق الطلابية، حيث يُسهِّل على الطلاب تحديد الغرف المناسبة باستخدام نظام فلترة ذكي. ومن ناحية أخرى، يمكن للمدراء عرض الغرف المتاحة بسهولة، وتتبع عمليات الحجز والمتابعة، فضلًا عن إجراءات الدفع.         ',
            'team': ['يوسف', 'محمد']
         },
         {
            'img': projectPicture3,
            'description': 'نظام للجامعات لإدارة وحجز الغرف للفنادق الطلابية، بحيث يسهل على الطلاب حجز الغرفة المناسبة عبر نظام فلترة ذكي و على المدراء عرض جميع الغرف المتوفرة ومتابعة الحجوزات وعمليات الدفع',
            'team': ['محمد', 'براهيم', 'ياسير']
         },
      ]);
   }, []);

   const handleExpandData = () => {
      if (typeof window !== 'undefined' && countProducts === 2) {
         setCountProducts(projects.length);
      } else {
         setCountProducts(2);
      }
   }

   return (
      <div className='w-full h-auto flex flex-col items-center gap-10 py-16'>
         <div className='max-w-[1200px] flex flex-col gap-5 text-[#5358A6] text-center px-5'>
            {/* Title */}
            <>
               <span className='lg:text-4xl min-[570px]:text-3xl min-[450px]:text-2xl text-xl font-bold'>{translation?.title1}</span>
            </>

            {/* Description */}
            <>
               <p className='lg:text-xl min-[570px]:text-lg min-[450px]:text-base text-sm'>{translation?.title2}</p>
            </>
         </div>

         {/* Projects */}
         <div style={isRTL? { direction: 'rtl'} : {direction: 'ltr'}} className='lg:w-[80%] min-[450px]:w-[90%] w-[95%] max-w-[1200px] h-auto grid md:grid-cols-2 grid-cols-1 items-center md:gap-y-16 gap-y-5 gap-x-5'>
            {
               projects?.slice(0, countProducts).map((item, key) => (
                  <m.div
                  key={key}
                  whileInView={{ y: 0, opacity: 1 }}
                  initial={{ y: 100, opacity: 0 }}
                  transition={{
                     duration: .5,
                  }} style={{ direction: 'ltr'}} className='flex justify-center items-center'>
                     <div className='
                     xl:w-[450px] min-[1350px]:h-[600px] 
                     min-[1190px]:w-[450px] min-[1190px]:h-[600px] 
                     w-[400px] h-[600px] 
                     rounded-[45px] shadow-[0_0_16px_rgba(0,0,0,0.19)]'>
                        {/* Picture */}
                        <div className='h-[45%] w-full rounded-t-[45px] relative after:content-[""] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-gradient-to-r after:from-[var(--second-purple)] after:to-[var(--main-purple)] after:opacity-[.8] after:rounded-t-[45px] after:z-10'>
                           <Image className='w-full h-full object-cover rounded-t-[45px]' src={item.img} alt="" loading='lazy' />
                           {/* Creating the transparent circle */}
                           {
                              key % 2 === 0 ? (
                                 <div className='w-full h-[30px] bg-transparent absolute bottom-0 z-20 flex justify-between'>
                                    <div className='w-[10%] h-full bg-white rounded-tr-md'></div>
                                    <div className='w-[10%] h-full bg-transparent rounded-b-full shadow-[0px_10px_0_4px_white]'></div>
                                    <div className='w-[80%] h-full bg-white rounded-tl-md'></div>
                                 </div>
                              ) : (
                                 <div className='w-full h-[30px] bg-transparent absolute bottom-0 z-20 flex justify-between'>
                                    <div className='w-[80%] h-full bg-white rounded-tr-md'></div>
                                    <div className='w-[10%] h-full bg-transparent rounded-b-full shadow-[0px_10px_0_4px_white]'></div>
                                    <div className='w-[10%] h-full bg-white rounded-tl-md'></div>
                                 </div>
                              )
                           }
                        </div>

                        {/* Description */}
                        <div className='h-[21%] w-full py-0 w-[450px]:px-10 px-5 text-center flex justify-center items-center relative z-50'>
                           <p className='md:text-base text-sm text-[#5358A6]'>{item.description}</p>
                        </div>

                        {/* Team */}
                        <div className='h-[34%] w-full flex flex-col justify-end items-center gap-5 pt-5 pb-4 yellow-gradient-to-dark rounded-b-[45px] text-white relative'>
                           {/* Creating the transparent circle */}
                           {
                              key % 2 == 0 ? (
                                 <div className='w-full h-[30px] bg-transparent absolute top-0 z-20 flex justify-between'>
                                    <div className='w-[80%] h-full bg-white rounded-br-md'></div>
                                    <div className='w-[10%] h-full bg-transparent rounded-t-full shadow-[0px_-10px_0_4px_white]'></div>
                                    <div className='w-[10%] h-full bg-white rounded-bl-md'></div>
                                 </div>
                              ) : (
                                 <div className='w-full h-[30px] bg-transparent absolute top-0 z-20 flex justify-between'>
                                    <div className='w-[10%] h-full bg-white rounded-br-md'></div>
                                    <div className='w-[10%] h-full bg-transparent rounded-t-full shadow-[0px_-10px_0_4px_white]'></div>
                                    <div className='w-[80%] h-full bg-white rounded-bl-md'></div>
                                 </div>
                              )
                           }
                           <div>
                              <span className='text-xl capitalize'>{translation?.team}</span>
                           </div>
                           <div className='flex min-[1190px]:gap-5 gap-3'>
                              {
                                 item.team.slice(0, 5).map((item, key) => (
                                    <div className='flex flex-col items-center gap-2' key={key}>
                                       <div className='min-[1190px]:w-[60px] min-[1190px]:h-[60px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#d88c31] to-[#e58a1f] relative'>
                                          <div className='min-[1190px]:w-[45px] w-[35px] absolute -bottom-1 left-[50%] -translate-x-[50%]'>
                                             <Image className='w-full' src={user} alt="" loading='lazy' />
                                          </div>
                                       </div>
                                       <span className='text-sm'>{item}</span>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                     </div>
                  </m.div>
               ))
            }

         </div>

         {/* Button */}
         <div className='w-full max-w-[1200px]'>
            <MoreBigBtn isExpanded={countProducts === 2 ? false : true} content={{more: tButtons.more, less: tButtons.less}} onClick={handleExpandData} />
         </div>
      </div>
   )
}
const MemorizedProjects = memo(Projects);
export default MemorizedProjects;