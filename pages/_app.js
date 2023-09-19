import '../styles/tailwind.css'
import '../styles/globals.css'

import { useEffect, useState } from "react";
// import "../styles/globals.css";
import { useRouter } from "next/router";

// import { disableReactDevTools } from '@fvilers/disable-react-devtools'

// const Meta = dynamic(() => import('../components/Meta'))

// if (process.env.REACT_APP_NODE_ENV === 'production') {
//   disableReactDevTools();
// }


function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
      useEffect(() => {


         const elementsWithMargin = document.querySelectorAll(".mr");
     
         if (elementsWithMargin && (locale === 'ar-MA' || locale === 'ar-AR')) {
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
    <div className={`selection:bg-[var(--second-purple)] selection:text-white ${locale === 'ar-AR' || locale === 'ar-MA' ? 'font-ar' : 'font-en '}`}>
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;