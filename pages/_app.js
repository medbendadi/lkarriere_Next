import '../styles/tailwind.css'
import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/JoinFom.css'
import { Source_Sans_3_Font, Almarai_Font } from '@/utils/fonts'
import { useEffect } from "react";
// import "../styles/globals.css";
import { useRouter } from "next/router";
import { LazyMotion, domAnimation } from 'framer-motion';
import App from 'next/app';


// import { disableReactDevTools } from '@fvilers/disable-react-devtools'

// const Meta = dynamic(() => import('../Components/Meta'))

// if (process.env.REACT_APP_NODE_ENV === 'production') {
//   disableReactDevTools();
// }


function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const router = useRouter();
  const lang = router.query.lang || 'en';
  const isRTL = lang === 'ar' || lang === 'ma';

  useEffect(() => {
         const elementsWithMargin = document.querySelectorAll(".mr");
     
         if (elementsWithMargin && (locale === 'ma' || locale === 'ar')) {
           Array.from(elementsWithMargin)?.forEach(element => {
             const marginRightValue = window.getComputedStyle(element).getPropertyValue("margin-right");
             const marginLeftValue = window.getComputedStyle(element).getPropertyValue("margin-left");
             if ((marginRightValue !== "0px")) {
               element.style.marginLeft = marginRightValue;
             }
           });
         }
       }, [locale])
  return (
    <div className={`selection:bg-[var(--second-purple)] selection:text-white`}>
      {
        isRTL ? 
        <style jsx global>{
      
          `
            html{
              font-family: ${Almarai_Font.style.fontFamily};
            }
          `}</style> : 

          <style jsx global>{
      
            `
              html{
                font-family: ${Source_Sans_3_Font.style.fontFamily};
              }
            `}</style>
      }
      {/* <style jsx global>{
      
      `
        html{
          font-family: ${Source_Sans_3_Font.style.fontFamily}, ${Almarai_Font.style.fontFamily};
        }
      `}</style> */}
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} />
        </LazyMotion>
      
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;