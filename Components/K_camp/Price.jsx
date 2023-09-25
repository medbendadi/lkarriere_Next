import React, { memo } from 'react'

function Price() {
  return (
    <div className='w-full h-auto purple-gradient-to-light flex justify-center items-center'>
        <div className='w-full h-auto max-w-[1200px] flex flex-col justify-center items-center gap-5 py-16 text-white'>
            {/* Title */}
            <div>
                <span className='lg:text-4xl min-[570px]:text-3xl min-[450px]:text-2xl text-xl'>كل المزايا الرائعة ستكلفك فقط</span>
            </div>
            <div className='w-[60%] min-w-[250px] lg:h-[250px] md:h-[200px] sm:h-[150px] min-[480px]:h-[100px] h-[70px] flex border-gradient border-gradient-purple'>
                <div className='w-[45%] h-full yellow-gradient-to-light flex justify-center items-center rounded-l-full'>
                    <div className='relative'>
                        <span className='lg:text-7xl md:text-6xl sm:text-4xl min-[480px]:text-3xl text-2xl'>300$</span>
                        <div className='absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[130%] h-1 bg-white rotate-[15deg]' />
                    </div>
                </div>
                <div className='w-[55%] h-full flex justify-center items-center sm:border-8 sm:border-l-0 border-4 rounded-r-full border-[#FBBC67] border-solid border-l-0'>
                    <span className='lg:text-9xl md:text-8xl sm:text-6xl min-[480px]:text-5xl text-3xl font-extrabold'>149<span className='text-[#FBBC67]'>$</span></span>
                </div>
            </div>
            <div className='text-center'>
                <span className='lg:text-xl min-[570px]:text-lg min-[450px]:text-base text-sm'>هذا فقط 4.3$ مقابل الفائدة الكبيرة التي ستنالها كل يوم</span>
            </div>
        </div>
    </div>
  )
}
const MemorizedPrice = memo(Price);
export default MemorizedPrice;