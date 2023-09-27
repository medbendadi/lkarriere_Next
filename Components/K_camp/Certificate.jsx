import React, { memo } from 'react';
import Image from 'next/image';
import badge from '../../public/images/Assets/IMG SVG/Section Certificate/badge.svg';

const Certificate = ({ translation }) => {
   return (
      <div className='w-full h-auto purple-gradient-to-light flex flex-col items-center gap-16 py-16 relative'>
         {/* Title */}
         <div className='max-w-[1200px] text-center px-10'>
            <span className='text-white lg:text-4xl min-[570px]:text-3xl min-[450px]:text-2xl text-xl font-bold'>{translation?.title}</span>
         </div>

         {/* certificate */}
         <div className='min-[1260px]:w-[60%] min-[570px]:w-[80%] w-[90%] max-w-[1200px] h-[500px] rounded-[45px] bg-white flex justify-center items-center relative'>
            <Image className='h-[110%]' src={badge} alt="" loading='lazy' />
         </div>
      </div>
   )
}
const MemorizedCertificate = memo(Certificate);
export default MemorizedCertificate;