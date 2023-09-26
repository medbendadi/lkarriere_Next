import React, { Fragment, useRef, useState } from 'react'

import { Link as ScrollLink } from 'react-scroll';
import { m } from 'framer-motion'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';



import Logo from '../../public/images/Assets/IMG SVG/Section Bar/Logo.svg'
import Logo_ar from '../../public/images/Assets/IMG SVG/Section Bar/Logo Arabe.svg'
import SmallLogo from '../../public/images/Assets/IMG SVG/Section Bar/LogoDark.svg'

import { ChevronDown, ChevronUp, Globe } from 'react-feather'

// Icons
import homeIcon from '../../public/images/Assets/Icones/Icones Bar/icon bar 1.svg'
import karIcon from '../../public/images/Assets/Icones/Icones Bar/icon bar 2.svg'
import bootcIcon from '../../public/images/Assets/Icones/Icones Bar/icon bar 3.svg'
import eventIcon from '../../public/images/Assets/Icones/Icones Bar/icon bar 4.svg'
import contactIcon from '../../public/images/Assets/Icones/Icones Bar/icon bar 5.svg'
import { useEffect } from 'react';


function NavBarDesktop({ circleBg, openModal, langs, chevronUp, setChevronUp, translation }) {
    const router = useRouter()
    const lang = router.query.lang || 'en';
    const { pathname } = router
    const location = pathname.replace(`/[lang]`, '');
    const langRef = useRef();
    const isRTL = lang === 'ar' || lang === 'ma';

    const [onFirstHover, setOnFirstHover] = useState(false);
    const [onLastHover, setOnLastHover] = useState(false);
    // Checking the location for navbar
    const isHomePage = location === '/';


    const handleMouseEnter = (item) => {
        if (item === 'first') setOnFirstHover(true);
        if (item === 'last') setOnLastHover(true);
    };

    const handleMouseLeave = (item) => {
        if (item === 'first') setOnFirstHover(false);
        if (item === 'last') setOnLastHover(false);
    };

    const toggleLanguages = () => {
        setChevronUp(prev => !prev);
        langRef.current.classList.toggle('active')
    }

    const menuDesktop = [
        { 'icon': homeIcon, 'title': translation?.accueil, 'navigate': 'Home-Hero' },
        { 'icon': karIcon, 'title': translation?.karriere, 'navigate': 'Home-Features' },
        { 'icon': bootcIcon, 'title': translation?.bootCamp, 'navigate': 'Home-Bootcamps' },
        { 'icon': eventIcon, 'title': translation?.events, 'navigate': 'Home-Events' },
        { 'icon': contactIcon, 'title': translation?.contact, 'navigate': 'Home-Contact' },
    ];

   // Scrolling Effects
   useEffect(() => {
    const header = document.getElementById('headBarDesktop');
    const navbarMenu = document.getElementById('navbar_ul');
    const headerNav = document.getElementById('headBarDesktopNav');


    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbarVisibility(scrollTop) {
       if (scrollTop > lastScrollTop) {
          header.classList.add('navbar-hidden');
       } else if (scrollTop === 0) {
          header.style.backgroundColor = 'transparent';
          header.style.boxShadow = 'none';
             navbarMenu.classList.remove('onScroll');
             headerNav.style.border = 'none';
       } else {
          header.classList.remove('navbar-hidden');
          header.style.backgroundColor = '#fff';     
          header.style.boxShadow = '0 5px 16px rgb(0, 0, 0, 0.5)';
             navbarMenu.classList.add('onScroll');
             headerNav.style.borderBottom = '#FAA32C solid 2px';
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
 }, []);

 // Checking where the navbar is & Fixing the bug of the transparent background of navbar
 useEffect(() => {
    const handleScroll = () => {
       const header = document.getElementById('headBarDesktop');
       const navbarMenu = document.getElementById('navbar_ul');
       const headerNav = document.getElementById('headBarDesktopNav');
      
      if (window.scrollY > 0) {
          header.classList.remove('navbar-hidden');
          header.style.backgroundColor = '#fff';
          header.style.boxShadow = '0 5px 16px rgba(0, 0, 0, 0.5)';
             navbarMenu.classList.add('onScroll');
             headerNav.style.borderBottom = '#FAA32C solid 2px';
      }
    };
    handleScroll();
  }, []); 

    return (
        <>
                    <m.div

                        className="md:flex hidden z-[999]">
                        <nav id='headBarDesktop' className={`navbar flex justify-center items-center w-5/6 m-auto fixed top-0 ${isRTL ? "ar" : ''}`}>
                            <div id='headBarDesktopNav' className={`max-w-[1400px] w-[90%] h-full flex justify-between items-center py-[15px] row`}>
                                <Link href='/'  aria-label='home' className={`navbar_logo flex`}>
                                    <div className={`navbar_logo_container relative`}>
                                        <Image fill className='lg:block hidden' src={isRTL ? Logo_ar : Logo} alt="Logo" />
                                        <Image fill className='lg:hidden block' src={SmallLogo} alt="" />
                                    </div>
                                </Link>
                                <div className={`navbar_list flex items-center row`}>
                                    <div id='navbar_ul' className={`navbar_ul row flex items-center bg_bl font-extralight`} style={(isRTL) && (isHomePage) ? { '--circleBg-color': "#f9fdfe" } : { '--circleBg-color': circleBg }} >
                                        {
                                            isHomePage ? (
                                        menuDesktop.map((item, key) => (
                                            <ScrollLink
                                                key={key}
                                                        to={`${item.navigate}`}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-0}
                                                        duration={500}
                                                        name={`${item.title}`}
                                                        className={`navbar_contact cursor-pointer flex items-center row min-[1108px]:gap-2 gap-1 h-full w-full ${(key === menuDesktop.length - 1) && onLastHover ? ' after:bg-nav-hover ar' : ''}`}
                                                        onMouseEnter={key === 0 ? () => handleMouseEnter('first') : (key === menuDesktop.length - 1 ? () => handleMouseEnter('last') : undefined)}
                                                        onMouseLeave={key === 0 ? () => handleMouseLeave('first') : (key === menuDesktop.length - 1 ? () => handleMouseLeave('last') : undefined)}
                                                    >
                                                        <div className={`navbar_ul_icon relative`}>
                                                            <Image fill src={item.icon} alt="" />
                                                        </div>
                                                        {item.title}
                                                    </ScrollLink>
                                                ))

                                            ) : (
                                            menuDesktop.map((item, key) => (
                                                    <Link href='/'
                                                    aria-label={`${item.title}`}
                                                    key={key}
                                                        className={`navbar_contact cursor-pointer flex items-center row min-[1108px]:gap-2 gap-1 h-full w-full ${(key === menuDesktop.length - 1) && onLastHover ? ' after:bg-nav-hover' : ''}`}
                                                        onMouseEnter={key === 0 ? () => handleMouseEnter('first') : (key === menuDesktop.length - 1 ? () => handleMouseEnter('last') : undefined)}
                                                        onMouseLeave={key === 0 ? () => handleMouseLeave('first') : (key === menuDesktop.length - 1 ? () => handleMouseLeave('last') : undefined)}
                                                    >
                                                        <div className={`navbar_ul_icon relative`}>
                                                            <Image fill src={item.icon} alt="" />
                                                        </div>
                                                        {item.title}
                                                    </Link>
                                                ))
                                            )
                                        }
                                    </div>
                                    <div
                                        onClick={openModal}
                                        className={`navbar_play bg-or flex row items-center text-center`}
                                        style={isRTL ? { left: '-84px', right: 'initial' } : null}
                                    >
                                        <span>
                                            <ChevronDown size="20" />
                                        </span>
                                        <p className='uppercase'>
                                            {translation?.play}
                                        </p>
                                    </div>
                                </div>
                                <div className="py-3 self-start relative">
                                    <button aria-label='change language' onClick={toggleLanguages} className={`navbar_lang flex items-center gap-1 min-[975px]:space-x-1 space-x-0 py-3 px-4`}>
                                        <span>
                                            <Globe size="18" />
                                        </span>
                                        <p>{lang?.toUpperCase()}</p>

                                        <span>
                                            {
                                                chevronUp ? <ChevronUp size={15} /> : <ChevronDown size={15} />
                                            }
                                        </span>
                                    </button>

                                    {/* Languages */}
                                    <div id='lang' ref={langRef} style={isRTL ? { left: '0', right: 'initial', borderTopRightRadius: '30px', borderTopLeftRadius: '0' } : null}
                                        className={`languagesContainer w-[200px] h-auto bg-white absolute top-[50px] right-0 rounded-b-3xl rounded-tl-3xl shadow-[0_0_16px_rgba(0,0,0,0.19)] px-5 py-2 z-[9999]`}>
                                        <div className={`languagesContent w-full h-auto flex flex-col items-center `}>

                                            {
                                                langs.map((item, key) => (
                                                    <Fragment key={key}>
                                                        <Link aria-label={`${item.code}`} href={`/${item.code}${location}`} className='w-[70%] flex justify-between items-center gap-2 hover:text-[#5358A6] py-2  '>
                                                            <div className='w-[20px] h-[20px] relative'>
                                                                <Image fill src={item.flag} alt="" />
                                                            </div>
                                                            <span className='text-sm font-ar'>{item.title}</span>
                                                        </Link>
                                                        {key !== langs.length - 1 ? (
                                                            <div key={key + '-line'} className='w-full border-b-[1px] border-solid border-black/10' />
                                                        ) : (
                                                            null
                                                        )}
                                                    </Fragment>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </m.div >
        </>
    )
}
const MemoizedMyComponent = React.memo(NavBarDesktop);
export default MemoizedMyComponent;