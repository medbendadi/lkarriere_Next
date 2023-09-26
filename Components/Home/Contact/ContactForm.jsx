import React, { useId, memo } from 'react';
import Image from 'next/image';
import contactHandler from '../../../handlers/contact'
import styles from '../../../styles/ContactStyle.module.css';


// Icons
import submitIcon from '../../../public/images/Assets/Icones/Icones Section Contact/icon 3.svg';

// Translation
import { useState } from 'react';

function ContactForm({ isRTL, translation }) {
    const id = useId();

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [sent, setSent] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    const [isChecked, setIsChecked] = useState(false)

    
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            if (email && first_name && last_name && phone && message) {
                await contactHandler({ first_name, last_name, email, message, phone })
                setSent(true)
                setEmail('')
                setFirst_name('')
                setLast_name('')
                setPhone('')
                setMessage('')
                setIsChecked(false)
            } else {
                throw new Error('All Field Are Required')
            }
            
        } catch (err) {
            setErrorMessage(err)
            setIsError(true)
        }
    }
    return (
        <div className={`${styles.FormBg} md:w-[60%] w-full md:min-h-full h-auto flex flex-col items-center justify-center gap-5 py-10 sm:px-10 px-5`} style={{color: '#5357A6'}}>
        
        {/* Header */}
        <div className='w-full flex flex-col justify-center items-center text-center gap-2'>
            <div>
                <span className='text-3xl'>{translation?.formTitle}</span>
            </div>
            <div className='xl:w-[50%] lg:w-[70%] sm:w-[80%] w-[90%]'>
                <span className='text-lg font-extralight'>{translation?.formDescription}</span>
            </div>
        </div>

        {/* Form */}
        <form className='w-full md:max-w-[1000px] xl:px-10 sm:px-5 px-0 flex flex-col justify-center items-center xl:gap-5 gap-2' action="" onSubmit={onSubmit}>

            <div className='xl:w-[80%] md:w-[95%] w-full flex justify-between items-center gap-5'>
                {/* Last Name */}
                <div className={`w-[50%] flex flex-col ${isRTL ? 'text-end' : 'text-start'} gap-1`}>
                    <label htmlFor={`${id}--last-name`} className={`capitalize ${isRTL ? 'xl:text-lg text-base' : 'xl:text-xl text-lg'} ps-7`}>{translation?.name}</label>
                    <input className={`${isRTL ? 'text-end' : 'text-start'} w-full sm:text-base text-sm px-5 py-2 rounded-full shadow-2xl shadow-black/30 outline-none placeholder:text-gray-300 placeholder:font-light`} type="text" id={`${id}--last-name`} name='' placeholder={translation?.namePlaceholder}  value={last_name} onChange={(e) => setLast_name(e.target.value)} />
                </div>

                {/* First Name */}
                <div className={`w-[50%] flex flex-col ${isRTL ? 'text-end' : 'text-start'} gap-1`}>
                    <label htmlFor={`${id}--first-name`} className={`capitalize ${isRTL ? 'xl:text-lg text-base' : 'xl:text-xl text-lg'} ps-7`}>{translation?.firstName}</label>
                    <input className={`${isRTL ? 'text-end' : 'text-start'} w-full sm:text-base text-sm px-5 py-2 rounded-full shadow-2xl shadow-black/30 outline-none placeholder:text-gray-300 placeholder:font-light`} type="text" id={`${id}--first-name`} name='' placeholder={translation?.firstNamePlaceholder}  value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
                </div>
            </div>

            <div className='xl:w-[80%] md:w-[95%] w-full flex justify-between items-center gap-5'>

                {/* Email */}
                <div className={`w-[50%] flex flex-col ${isRTL ? 'text-end' : 'text-start'} gap-1`}>
                    <label htmlFor={`${id}--email`} className={`capitalize ${isRTL ? 'xl:text-lg text-base' : 'xl:text-xl text-lg'} ps-7`}>{translation?.email}</label>
                    <input className={`${isRTL ? 'text-end' : 'text-start'} w-full sm:text-base text-sm px-5 py-2 rounded-full shadow-2xl shadow-black/30 outline-none placeholder:text-gray-300 placeholder:font-light`} type="email" id={`${id}--email`} name='' placeholder={translation?.emailPlaceholder}  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {/* Phone number */}
                <div className={`w-[50%] flex flex-col ${isRTL ? 'text-end' : 'text-start'} gap-1`}>
                    <label htmlFor={`${id}--phone`} className={`capitalize ${isRTL ? 'xl:text-lg text-base' : 'xl:text-xl text-lg'} ps-7`}>{translation?.phone}</label>
                    <input className={`${isRTL ? 'text-end' : 'text-start'} w-full sm:text-base text-sm px-5 py-2 rounded-full shadow-2xl shadow-black/30 outline-none placeholder:text-gray-300 placeholder:font-light`} inputMode='numeric' type="tel" id={`${id}--phone`} name='' placeholder={translation?.phonePlaceholder}  value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>

            {/* Message */}
            <div className={`xl:w-[80%] md:w-[95%] w-full flex flex-col ${isRTL ? 'text-end' : 'text-start'} gap-1`}>
                <label htmlFor={`${id}--message`} className={`capitalize ${isRTL ? 'xl:text-lg text-base' : 'xl:text-xl text-lg'} ps-7`}>{translation?.message}</label>
                <textarea className={`${isRTL ? 'text-end' : 'text-start'} sm:text-base text-sm px-5 py-2 rounded-[25px] shadow-2xl shadow-black/30 outline-none placeholder:text-gray-300 placeholder:font-light resize-none`} name="" id={`${id}--message`}  cols="30" rows="6" placeholder={translation?.messagePlaceholder}  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            {/* Condition */}
            <div className={`xl:w-[80%] md:w-[95%] w-full flex ${isRTL ? 'flex-row-reverse text-end' : 'flex-row text-start'} items-start gap-5 py-2 sm:px-5 px-2`}>
                <input checked={isChecked} onChange={() => setIsChecked(prev => !prev)} className={`${styles.checkbox_input} cursor-pointer`} type="checkbox" name="" id={`${id}--condition`} />
                <label className={`xl:text-lg text-base cursor-pointer -mt-[7px]`} htmlFor={`${id}--condition`}>{translation?.condition}</label>
            </div>

            {/* Submit */}
            <div className='xl:w-[80%] md:w-[95%] w-full'>
                  <button className={`w-full xl:py-5 sm:py-3 py-2 yellow-gradient-to-dark rounded-full text-white flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-2 hover:opacity-[.9] duration-300`} type='submit'>
                      <div className='lg:w-[20px] w-[16px] lg:h-[20px] h-[16px] relative'>
                    <Image fill src={submitIcon} alt="" />  
                      </div>
                    <span className='sm:text-xl text-lg'>{translation?.button}</span>
                </button>
            </div>
          </form>
    </div>
  )
}
const MemorizedContactForm = memo(ContactForm);
export default MemorizedContactForm;