import React, { useState, useEffect, memo } from 'react'
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';


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
   const isMobile = isMobileState;


   // Scrolling Effects
   useEffect(() => {
      const header = isMobile ? document.getElementById('headBarMobile') : document.getElementById('headBarDesktop');
      const navbarMenu = isMobile ? null : document.getElementById('navbar_ul');
      const headerNav = isMobile ? null : document.getElementById('headBarDesktopNav');


      let lastScrollTop = 0;
      let ticking = false;

      function updateNavbarVisibility(scrollTop) {
         if (scrollTop > lastScrollTop) {
            header.classList.add('navbar-hidden');
         } else if (scrollTop === 0) {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            if(!isMobile) {
               navbarMenu.classList.remove('onScroll');
               headerNav.style.border = 'none';
            }
         } else {
            header.classList.remove('navbar-hidden');
            header.style.backgroundColor = '#fff';     
            header.style.boxShadow = '0 5px 16px rgb(0, 0, 0, 0.5)';
            if(!isMobile) {
               navbarMenu.classList.add('onScroll');
               headerNav.style.borderBottom = '#FAA32C solid 2px';
            }
         }
         lastScrollTop = scrollTop;
      }

      function onScroll() {
         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         if (!ticking) {
            requestAnimationFrame(() => {
               updateNavbarVisibility(scrollTop);
               ticking = false;
            });
            ticking = true;
         }
      }
      // Debounce scroll events
      window.addEventListener("scroll", onScroll);

      // Cleanup the scroll event listener when the component unmounts
      return () => {
         window.removeEventListener("scroll", onScroll);
      };
   }, [isMobile]);

   // Checking where the navbar is & Fixing the bug of the transparent background of navbar
   useEffect(() => {
      const handleScroll = () => {
         const header = isMobile ? document.getElementById('headBarMobile') : document.getElementById('headBarDesktop');
         const navbarMenu = isMobile ? null : document.getElementById('navbar_ul');
         const headerNav = isMobile ? null : document.getElementById('headBarDesktopNav');
        
        if (window.scrollY > 0) {
            header.classList.remove('navbar-hidden');
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 5px 16px rgba(0, 0, 0, 0.5)';
            if(isMobile) {
               navbarMenu.classList.add('onScroll');
               headerNav.style.borderBottom = '#FAA32C solid 2px';
            }
        }
      };
      handleScroll();
    }, [isMobile]);    

   // List of languages
   const langs = [
      {'flag': flag_z, 'title': 'ⵜⴰⵎⴰⵣⵉⵖⵜ', 'code': 'ⵣ'},
      {'flag': flag_ar, 'title': 'العربية', 'code': 'ar-AR'},
      {'flag': flag_ma, 'title': 'الدارجة', 'code': 'ar-MA'},
      {'flag': flag_fr, 'title': 'Fraçais', 'code': 'fr-FR'},
      {'flag': flag_us, 'title': 'English', 'code': 'en-EN'},
   ]   

   return isMobileState ? (
         <NavBarMobile openModal={openModal} langs={langs} translation={translation} chevronUp={chevronUp} setChevronUp={setChevronUp} />
   ) : (
            <NavBarDesktop circleBg={circleBg} openModal={openModal} langs={langs} translation={translation} chevronUp={chevronUp} setChevronUp={setChevronUp} />
   )

}
const MemorizedNavBar = memo(NavBar);
export default MemorizedNavBar;