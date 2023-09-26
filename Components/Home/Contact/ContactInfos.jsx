import React, { memo } from 'react';
import styles from '../../../styles/ContactStyle.module.css';

// Icons
import phoneIcon from '../../../public/images/Assets/Icones/Icones Section Contact/icon 1.svg';
import emailIcon from '../../../public/images/Assets/Icones/Icones Section Contact/icon 2.svg';
import Image from 'next/image';


function ContactInfos({ isRTL, translation }) {

    const phoneNumber = '0689558573';
    const email = 'ste.ajicod@gmail.com';

  return (
      <div className={`${styles.InfosBg} md:w-[40%] w-full min-h-full flex flex-col justify-center items-center md:items-start gap-5 py-10 sm:px-10 px-0`}>
        {/* Header */}
        <div className={`w-full flex flex-col gap-2 text-white lg:px-14 sm:px-5 px-0 text-center ${isRTL ? 'md:text-end md:items-end' : 'md:text-start md:items-start'}`}>
            <div className='w-full'>
                <span className='text-3xl'>{translation?.infosTitle}</span>
            </div>
            <div className='xl:w-[55%] lg:w-full'>
                <span className='text-lg font-extralight sm:text-start text-center'>{translation?.infosDescription}</span>
            </div>
        </div>

        {/* Contact Infos */}
        <div className='w-full md:max-w-[700px] flex flex-col gap-2 text-white xl:px-10 sm:px-0 px-5'>
            <div className={`w-full flex flex-col ${isRTL ? 'items-end sm:text-end' : 'items-start sm:text-start'} text-center gap-1`}>
                <div className='w-full px-6'>
                    <span className={`${isRTL ? 'text-lg' : 'text-xl'}`}>{translation?.callUs}</span>
                </div>
                  <a href={`tel:${phoneNumber}`} className={`xl:w-[90%] w-full py-3 purple-gradient-to-light rounded-full flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} sm:justify-start justify-center items-center gap-4 px-5 hover:opacity-[.9] duration-300`}>
                      <div className={`w-[20px] h-[20px] relative ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                    <Image fill src={phoneIcon} alt="" />
                      </div>
                    <span className='lg:text-base text-sm'>{phoneNumber.replace(/(.{2})/g, '$1 ')}</span>
                </a>
            </div>
            <div className={`w-full flex flex-col ${isRTL ? 'items-end sm:text-end' : 'items-start sm:text-start'} text-center gap-1`}>
                <div className='w-full px-6'>
                    <span className={`${isRTL ? 'text-lg' : 'text-xl'}`}>{translation?.emailUs}</span>
                </div>
                  <a href={`mailto:${email}`} className={`xl:w-[90%] w-full py-3 purple-gradient-to-light rounded-full flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} sm:justify-start justify-center items-center gap-4 px-5 hover:opacity-[.9] duration-300`}>
                      <div className={`w-[20px] h-[20px] relative ${isRTL ? 'scale-x-[-1]' : 'scale-x-1'}`}>
                    <Image fill src={emailIcon} alt="" />
                      </div>
                    <span className='uppercase lg:text-base text-sm'>{email}</span>
                </a>
            </div>
        </div>

        {/* Map */}
        <div className='md:w-full w-full md:max-w-[700px] h-[300px] flex justify-center items-center'>
            <iframe title="Ajicod Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2060.1296103973664!2d-9.526357931898653!3d30.364948501104067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b9ca3569c553%3A0x47c053b70cc17564!2sInstitut%20AJICOD!5e0!3m2!1sen!2sma!4v1691585446874!5m2!1sen!2sma" width="90%" height="85%" style={{border: '4px solid white', borderRadius: '40px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
const MemorizedContactInfos = memo(ContactInfos);
export default MemorizedContactInfos;