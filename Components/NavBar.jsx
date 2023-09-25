import React, { useState, useEffect, memo } from 'react'
import dynamic from "next/dynamic";
const NavBarMobile = dynamic(() => import('./NavBarMobile'))
const NavBarDesktop = dynamic(() => import('./NavBarDesktop'))



import flag_ma from '../public/images/Assets/IMG SVG/Flags/ma.svg'
import flag_fr from '../public/images/Assets/IMG SVG/Flags/fr.svg'
import flag_ar from '../public/images/Assets/IMG SVG/Flags/ar.svg'
import flag_us from '../public/images/Assets/IMG SVG/Flags/us.svg'
import flag_z from '../public/images/Assets/IMG SVG/Flags/br.svg'



const NavBar = ({ circleBg, openModal, translation }) => {
   // Handle languages
   const [isMobileState, setIsMobileState] = useState(null);
   const [chevronUp, setChevronUp] = useState(false);

   useEffect(() => {
      setIsMobileState(window.innerWidth <= 768);
   }, []);

   useEffect(() => {
      function handleResize() {
         setIsMobileState(window.innerWidth <= 768);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   // const isMobile = isMobileState;

   // List of languages
   const langs = [
      {'flag': flag_z, 'title': 'ⵜⴰⵎⴰⵣⵉⵖⵜ', 'code': 'z'},
      {'flag': flag_ar, 'title': 'العربية', 'code': 'ar'},
      {'flag': flag_ma, 'title': 'الدارجة', 'code': 'ma'},
      {'flag': flag_fr, 'title': 'Fraçais', 'code': 'fr'},
      {'flag': flag_us, 'title': 'English', 'code': 'en'},
   ]   

   return isMobileState ? (
         <NavBarMobile openModal={openModal} langs={langs} translation={translation} chevronUp={chevronUp} setChevronUp={setChevronUp} />
   ) : (
         <NavBarDesktop circleBg={circleBg} openModal={openModal} langs={langs} translation={translation} chevronUp={chevronUp} setChevronUp={setChevronUp} />
   )

}
const MemorizedNavBar = memo(NavBar);
export default MemorizedNavBar;