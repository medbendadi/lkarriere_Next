import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import {Phone} from '@mui/icons-material';
import getTranslations from '@/handlers/getTranslations';

const Meta = dynamic(() => import('../../../Components/Meta')),
NavBar = dynamic(() => import('../../../Components/NavBar')),
Hero = dynamic(() => import('../../../Components/K_camp/Hero')),
CounterSection = dynamic(() => import('../../../Components/K_camp/CounterSection')),
Features = dynamic(() => import('../../../Components/K_camp/Features')),
Infos = dynamic(() => import('../../../Components/K_camp/Infos')),
Projects = dynamic(() => import('../../../Components/K_camp/Projects')),
Certificate = dynamic(() => import('../../../Components/K_camp/Certificate')),
WhyChooseUs = dynamic(() => import('../../../Components/K_camp/WhyChooseUs')),
Price = dynamic(() => import('../../../Components/K_camp/Price')),
Extras = dynamic(() => import('../../../Components/K_camp/Extras')),
QAndA = dynamic(() => import('../../../Components/K_camp/Q&A')),
Footer = dynamic(() => import('../../../Components/Footer'));

function k_camp({ Bootcamp }) {
    const router = useRouter();
    const lang = router.query.lang || 'en-EN';
    const locale = lang?.split('-')[0];
    const isRTL = locale === 'ar' || locale === 'dr';

    const Kcamp = router.query.Kcamp;

    const [translation, setTranslation] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const data = await getTranslations(lang);
        setTranslation(data);
      }
      getData()
    }, [locale]);

    return (
      <>
        <Meta title={Kcamp} />
        <div>
            <div className="navbar_container md:h-[110px] h-[69px] bg-[#f5f5f5] relative">
                <NavBar circleBg={'#f5f5f5'} translation={translation?.navbar} openModal={() => setHandleModal(true)}/>
            </div>

            <Hero translation={translation?.k_camps?.Hero_section} isRTL={isRTL} />

            <CounterSection count={Bootcamp?.countSection} translation={translation?.k_camps?.Counter_section} />

            <Features features={Bootcamp?.weekList} isRTL={isRTL} lang={locale} />

            <Infos silverBoxes={Bootcamp?.silverBoxSection} goldenBox={Bootcamp?.goldenBox} isRTL={isRTL} lang={locale} />

            <Projects projectSection={Bootcamp?.projectSection} translation={translation?.k_camps?.Projects} />

            {/* Reviews */}
            {/* <Reviews bootcamp={bootcampTitile} /> */}

            <Certificate translation={translation?.k_camps?.Certificate} />

            <WhyChooseUs translation={translation?.k_camps?.WhyChooseUs} isRTL={isRTL} />

            <Price />

            <Extras extraSection={Bootcamp?.extraSection} guarantee={Bootcamp?.guarantee} subscriptionSection={Bootcamp?.subscriptionSection} paymentOptionSection={Bootcamp?.paymentOptionSection} translationExtras={translation?.k_camps?.Extras} translationSubscription={translation?.k_camps?.Subscription_section} translationGuarantee={translation?.k_camps?.Guarantee} translationPaymentOption={translation?.k_camps?.PaymentOption} translationButton={translation?.buttons} isRTL={isRTL} lang={locale} />

            <QAndA questionAndAnswers={Bootcamp?.questionAndAnswers} translation={translation?.k_camps?.QAndA} isRTL={isRTL} lang={locale} />

            <Footer translation={translation?.footer} isRTL={isRTL} />

            {/* Whatssap Icon */}
            <Link aria-label='Whatsapp Link' href="https://wLink.me/212677438317" target='_blanc' passHref>
                  <div className={`fixed flex items-center justify-center w-[40px] z-[99] h-[40px] bottom-[30px] bg-[#40c351] rounded-full p-6 hover:bg-[#36a444] transition duration-300 cursor-pointer ${isRTL ? 'left-[40px]' : 'right-[40px]'}`}>
                    <Phone htmlColor='#fff' fontSize='large'/>
                  </div>
                  <div className={`fixed bottom-[23.8px] w-[60px] h-[60px] bg-white z-[55] rounded-full shadow-[0_0_10px_rgba(0,0,0,0.4)] ${isRTL ? 'left-[33.9px]' : 'right-[33.9px]'}`} />
            </Link>
        </div>
      </>
    )
}
const MemorizedX = memo(k_camp);
export default MemorizedX;

export const getServerSideProps = async ({ params }) => {
  try{
    const Kcamp = params.Kcamp;
    const query = encodeURIComponent(`*[_type == "K-camps" && bootcamp->label == "Web_development"][0]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      variables: { Kcamp }, // Pass the variable here
    });

    const data = await res.json();
    const Bootcamp = data.result;
    if (!Bootcamp) {
      return {
          props: {
            Bootcamp: [],
          }
      };
    } else {
      return {
          props: {
            Bootcamp
          },
      }
    }
  } catch(error) {
    console.log(error);
  }
};