import React, { memo } from 'react'
import Image from 'next/image';

// icons
import happyFaceIcon from '../../public/images/Assets/Icones/Icones Section WhyChooseUs/happyFace.svg';
import sadFaceIcon from '../../public/images/Assets/Icones/Icones Section WhyChooseUs/sadFace.svg';

function WhyChooseUs({ translation, isRTL}) {
  return (
    <div className='w-full h-auto flex justify-center items-center py-16'>
        <div className='xl:w-[80%] lg:w-[90%] w-[98%] max-w-[1200px] h-auto flex flex-col justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center gap-3 text-[#5358A6] text-center px-5'>
                {/* Title */}
                <div>
                    <span className='lg:text-4xl min-[570px]:text-3xl min-[450px]:text-2xl text-xl font-bold'>{translation?.title1}</span>
                </div>
                {/* Description */}
                <div className='min-[795px]:w-[80%] w-full'>
                    <p className='lg:text-xl min-[570px]:text-lg min-[450px]:text-base text-sm'>{translation?.title2}</p>
                </div>
            </div>

            {/* Table */}
            <div className={`h-auto w-full flex flex-col ${isRTL ? ( 'items-start' ) : ( 'items-end' )}`}>

                {/* Header */}
                <div className={`xl:w-[750px] lg:w-[600px] min-[850px]:w-[540px] md:w-[450px] w-full flex gap-1 ${isRTL ? ( 'flex-row' ) : ( 'flex-row-reverse' )}`}>
                    <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                        <div className={`w-full h-auto ${isRTL ? ( 'lg:rounded-tl-[50px] rounded-tl-3xl purple-gradient-to-dark' ) : ( 'lg:rounded-tr-[50px] rounded-tr-3xl purple-gradient-to-light' )} text-white flex justify-center items-center relative`}>
                            <div className='w-full h-[85px] flex justify-center items-start pt-4'>
                                <span className='z-20 xl:text-xl lg:text-lg text-base'>{translation?.column1}</span>
                            </div>
                            {/* Creating the transparent circle */}
                            <div className='w-full h-[30px] bg-transparent absolute bottom-0 z-0 flex justify-between'>
                                <div className='w-[40%] h-full bg-[#f4f4f4] rounded-tr-md'></div>
                                <div className='w-[20%] min-w-[50px] h-full bg-transparent rounded-b-full shadow-[0px_10px_0_4px_#f4f4f4]'></div>
                                <div className='w-[40%] h-full bg-[#f4f4f4] rounded-tl-md'></div>
                            </div>
                        </div>
                        <div className='h-1 w-full bg-[#f4f4f4]' />
                    </div>
                    <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                        <div className='w-full h-auto bg-[#5357A6] text-white flex justify-center items-center relative'>
                            <div className='w-full h-[85px] flex justify-center items-start pt-4'>
                                <span className='z-20 xl:text-xl lg:text-lg text-base'>{translation?.column2}</span>
                            </div>
                            {/* Creating the transparent circle */}
                            <div className='w-full h-[30px] bg-transparent absolute bottom-0 z-0 flex justify-between'>
                                <div className='w-[40%] h-full bg-[#f4f4f4] rounded-tr-md'></div>
                                <div className='w-[20%] min-w-[50px] h-full bg-transparent rounded-b-full shadow-[0px_10px_0_4px_#f4f4f4]'></div>
                                <div className='w-[40%] h-full bg-[#f4f4f4] rounded-tl-md'></div>
                            </div>
                        </div>
                        <div className='h-1 w-full bg-[#f4f4f4]' />
                    </div>
                    <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                        <div className={`w-full h-auto ${isRTL ? ( 'lg:rounded-tr-[50px] rounded-tr-3xl purple-gradient-to-light' ) : ( 'lg:rounded-tl-[50px] rounded-tl-3xl purple-gradient-to-dark' )} text-white flex justify-center items-center relative`}>
                            <div className='w-full h-[85px] flex justify-center items-start pt-4'>
                                <span className='z-20 xl:text-xl lg:text-lg text-base'>{translation?.column3}</span>
                            </div>
                            {/* Creating the transparent circle */}
                            <div className='w-full h-[30px] bg-transparent absolute bottom-0 z-0 flex justify-between'>
                                <div className='w-[40%] h-full bg-[#f4f4f4] rounded-tr-md'></div>
                                <div className='w-[20%] min-w-[50px] h-full bg-transparent rounded-b-full shadow-[0px_10px_0_4px_#f4f4f4]'></div>
                                <div className='w-[40%] h-full bg-[#f4f4f4] rounded-tl-md'></div>
                            </div>
                        </div>
                        <div className='h-1 w-full bg-[#f4f4f4]' />
                    </div>
                </div>
                {/* Content */}
                <div className='w-full h-auto relative'>
                    {
                        translation?.tableData?.map((item, key) => (
                            key === 0 ? (
                                <div key={key} className={`w-full flex md:flex-row flex-col-reverse ${isRTL ? ( 'md:flex-row' ) : ( 'md:flex-row-reverse' )}`}>
                                    <div className={`xl:w-[750px] lg:w-[600px] min-[850px]:w-[540px] md:w-[450px] w-full flex gap-1 h-auto ${isRTL ? ( 'flex-row' ) : ( 'flex-row-reverse' )}`}>
                                        <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                            <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                <Image className='w-[20px]' src={item.column1? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                            </span>
                                        </div>
                                        <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                            <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                <Image className='w-[20px]' src={item.column2? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                            </span>
                                        </div>
                                        <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                            <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                <Image className='w-[20px]' src={item.column3? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-full h-auto'>
                                        <div className='w-full min-w-[300px]'>
                                            <span className={`w-full h-[40px] ${(key % 2 === 0) ? `bg-gradient-to-r 
                                            ${isRTL ? 'from-[#f1a546] to-[#ef9827]' : 'from-[#ef9827] to-[#f1a546]'}` : `bg-gradient-to-r ${isRTL ? 'from-[#fcbb64] to-[#f9a22b]' : 'from-[#f9a22b] to-[#fcbb64]'}`}  text-white flex justify-center items-center ${isRTL ? ( 'md:rounded-tr-[35px]' ) : ( 'md:rounded-tl-[35px]' )} 
                                            rounded-none lg:text-base text-sm`}>{item.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : ( key === 11 ? (
                                    <div key={key} className={`w-full flex md:flex-row flex-col-reverse ${isRTL ? ( 'md:flex-row' ) : ( 'md:flex-row-reverse' )}`}>
                                        <div className={`xl:w-[750px] lg:w-[600px] min-[850px]:w-[540px] md:w-[450px] w-full flex gap-1 h-auto ${isRTL ? ( 'flex-row' ) : ( 'flex-row-reverse' )}`}>
                                            <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center ${isRTL ? ( 'lg:rounded-bl-[35px] rounded-bl-3xl' ) : ( 'lg:rounded-br-[35px] rounded-br-3xl' )}`}>
                                                    <Image className='w-[20px]' src={item.column1? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                                </span>
                                            </div>
                                            <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                    <Image className='w-[20px]' src={item.column2? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                                </span>
                                            </div>
                                            <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center ${isRTL ? ( ' rounded-br-3xl' ) : ( ' rounded-bl-3xl' )} md:rounded-none`}>
                                                    <Image className='w-[20px]' src={item.column3? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='w-full h-auto'>
                                            <div className='w-full min-w-[300px]'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? `bg-gradient-to-r 
                                                ${isRTL ? 'from-[#f1a546] to-[#ef9827]' : 'from-[#ef9827] to-[#f1a546]'}` : `bg-gradient-to-r ${isRTL ? 'from-[#fcbb64] to-[#f9a22b]' : 'from-[#f9a22b] to-[#fcbb64]'}`}  
                                                text-white flex justify-center items-center ${isRTL ? ( 'md:rounded-br-[35px]' ) : ( 'md:rounded-bl-[35px]' )} rounded-none lg:text-base text-sm`}>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={key} className={`w-full flex md:flex-row flex-col-reverse ${isRTL ? ( 'md:flex-row' ) : ( 'md:flex-row-reverse' )}`}>
                                        <div className={`xl:w-[750px] lg:w-[600px] min-[850px]:w-[540px] md:w-[450px] w-full flex gap-1 h-auto ${isRTL ? ( 'flex-row' ) : ( 'flex-row-reverse' )}`}>
                                            <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                    <Image className='w-[20px]' src={item.column1? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                                </span>
                                            </div>
                                            <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                    <Image className='w-[20px]' src={item.column2? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                                </span>
                                            </div>
                                            <div className='xl:w-[250px] lg:w-[200px] min-[850]:w-[180px] md:w-[150px] w-full'>
                                                <span className={`w-full h-[40px] ${(key % 2 === 0) ? 'bg-[#f4f4f4]' : 'bg-[#ececec]'}  flex justify-center items-center`}>
                                                    <Image className='w-[20px]' src={item.column3? happyFaceIcon : sadFaceIcon} alt="" loading='lazy' />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='w-full h-auto'>
                                            <div className='w-full min-w-[300px]'>
                                                <span className={`w-full h-[40px] 
                                                ${(key % 2 === 0) ? `bg-gradient-to-r ${isRTL ? 'from-[#f1a546] to-[#ef9827]' : 'from-[#ef9827] to-[#f1a546]'}` : `bg-gradient-to-r ${isRTL ? 'from-[#fcbb64] to-[#f9a22b]' : 'from-[#f9a22b] to-[#fcbb64]'}`}  
                                                text-white flex justify-center items-center lg:text-base text-sm`}>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                )  
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
}
const MemorizedWhyChooseUs = memo(WhyChooseUs);
export default MemorizedWhyChooseUs;