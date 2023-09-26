import React, { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import {Phone} from '@mui/icons-material';
import { getDictionary } from '@/getTranslation';
import { fetchData } from '../../../FetchData';

const Meta = dynamic(() => import('../../../Components/Meta')),
NavBar = dynamic(() => import('../../../Components/NavBar/NavBar'), {
  loading: () => <div></div>,
}),
Hero = dynamic(() => import('../../../Components/K_camp/Hero'), {
  loading: () => <div></div>,
}),
CounterSection = dynamic(() => import('../../../Components/K_camp/CounterSection'), {
  loading: () => <div></div>,
}),
Features = dynamic(() => import('../../../Components/K_camp/Features'), {
  loading: () => <div></div>,
}),
Infos = dynamic(() => import('../../../Components/K_camp/Infos'), {
  loading: () => <div></div>,
}),
Projects = dynamic(() => import('../../../Components/K_camp/Projects'), {
  loading: () => <div></div>,
}),
Certificate = dynamic(() => import('../../../Components/K_camp/Certificate'), {
  loading: () => <div></div>,
}),
WhyChooseUs = dynamic(() => import('../../../Components/K_camp/WhyChooseUs'), {
  loading: () => <div></div>,
}),
Price = dynamic(() => import('../../../Components/K_camp/Price'), {
  loading: () => <div></div>,
}),
Extras = dynamic(() => import('../../../Components/K_camp/Extras'), {
  loading: () => <div></div>,
}),
QAndA = dynamic(() => import('../../../Components/K_camp/Q&A'), {
  loading: () => <div></div>,
}),
Footer = dynamic(() => import('../../../Components/Footer'), {
  loading: () => <div></div>,
});
const Reviews = dynamic(() => import('../../../Components/Home/Reviews/Reviews'), {
  loading: () => <div></div>,
})

function k_camp({ Bootcamp, translation, reviews }) {
  const {
    isFallback,
} = useRouter();

if (isFallback) {
    return <h1>Fallback</h1>;
}
    const router = useRouter();
    const lang = router.query.lang || 'en-EN';
    const locale = lang?.split('_')[0];
    const isRTL = locale === 'ar' || locale === 'dr';

    const Kcamp = router.query.Kcamp;

    return (
      <>
        <Meta title={Kcamp} />
            <div className="navbar_container md:h-[110px] h-[69px] bg-[#f5f5f5] relative">
                <NavBar circleBg={'#f5f5f5'} translation={translation?.navbar} openModal={() => setHandleModal(true)}/>
            </div>

            <Hero translation={translation?.k_camps?.Hero_section} isRTL={isRTL} />

            <CounterSection count={Bootcamp?.countSection} translation={translation?.k_camps?.Counter_section} />

            <Features features={Bootcamp?.weekList} isRTL={isRTL} lang={locale} />

            <Infos silverBoxes={Bootcamp?.silverBoxSection} goldenBox={Bootcamp?.goldenBox} isRTL={isRTL} lang={locale} />

            <Projects projectSection={Bootcamp?.projectSection} translation={translation?.k_camps?.Projects} tButtons={translation?.buttons} isRTL={isRTL} />

            {/* Reviews */}
          <Reviews bootcamp={Bootcamp?.title} reviews={reviews} translation={translation} />

            <Certificate translation={translation?.k_camps?.Certificate} />

            <WhyChooseUs translation={translation?.k_camps?.WhyChooseUs} isRTL={isRTL} />

            <Price />

            <Extras extraSection={Bootcamp?.extraSection} guarantee={Bootcamp?.guarantee} subscriptionSection={Bootcamp?.subscriptionSection} paymentOptionSection={Bootcamp?.paymentOptionSection} translationExtras={translation?.k_camps?.Extras} translationSubscription={translation?.k_camps?.Subscription_section} translationGuarantee={translation?.k_camps?.Guarantee} translationPaymentOption={translation?.k_camps?.PaymentOption} translationButton={translation?.buttons} isRTL={isRTL} lang={locale} />

            <QAndA questionAndAnswers={Bootcamp?.questionAndAnswers} translation={translation?.k_camps?.QAndA} isRTL={isRTL} lang={locale} />

            <Footer translation={translation?.footer} isRTL={isRTL} />

            {/* Whatssap Icon */}
            <Link aria-label='Whatsapp' href="https://wa.me/212677438317" target='_blanc'>
                  <div className={`fixed flex items-center justify-center w-[40px] z-[99] h-[40px] bottom-[30px] bg-[#40c351] rounded-full p-6 hover:bg-[#36a444] transition duration-300 cursor-pointer ${lang === 'ar' || lang === 'ma' ? 'left-[40px]' : 'right-[40px]'}`}>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                  </div>
                  <div className={`fixed bottom-[23.8px] w-[60px] h-[60px] bg-white z-[55] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.4)] ${lang === 'ar' || lang === 'ma' ? 'left-[33.9px]' : 'right-[33.9px]'}`}></div>
               </Link>
      </>
    )
}
const MemorizedX = memo(k_camp);
export default MemorizedX;


export const getServerSideProps = async ({ params }) => {
  try{
    const translation = await getDictionary(params.lang);
    const Kcamp = params.Kcamp;
    const Bootcamp = await fetchData(`*[_type == "K-camps" && bootcamp->label == "${Kcamp}"][0]`);
    const reviews = await fetchData( `*[_type == "reviews" && bootcamp->label == "${Kcamp}"]{
      name,
      bootcamp->{
         title
      },
      comment,
      video,
      image
   }`)
    
      return {
          props: {
            Bootcamp: Bootcamp || [],
            reviews: reviews || [],
            translation: translation || [],
          },
      }
  } catch(error) {
    console.log(error);
  }
};