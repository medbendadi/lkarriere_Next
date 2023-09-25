import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { memo } from 'react';

const ContactForm = dynamic(() => import('./Contact/ContactForm'))
const ContactInfos = dynamic(() => import('./Contact/ContactInfos'))

function Contact({ translation }) {
  const router = useRouter()
  const  lang  = router.query.lang || 'en';
const isRTL = lang === 'ar' || lang === 'ma';

  return (
    <div id='Home-Contact' className={`w-full h-auto flex ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col-reverse`}>     
        {/* Infos */}
        <ContactInfos isRTL={isRTL} translation={translation} />

        {/* Form */}
      <ContactForm isRTL={isRTL} translation={translation} />
    </div>
  )
}
const MemorizedContact = memo(Contact);
export default MemorizedContact;