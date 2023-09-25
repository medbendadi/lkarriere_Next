import React, { Fragment, useRef } from 'react'

import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';


import Logo from '../public/images/Assets/IMG SVG/Section Bar/Logo.svg';
import Logo_ar from '../public/images/Assets/IMG SVG/Section Bar/Logo Arabe.svg';
import SmallLogo from '../public/images/Assets/IMG SVG/Section Bar/LogoDark.svg';

// Social Media icons
import facebookLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 6.svg';
import instaLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 7.svg';
import whatsLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 5.svg';
import linkdenLogo from '../public/images/Assets/Icones/Icones Section Footer/icon 4.svg';

// Icons
import homeIcon from '../public/images/Assets/Icones/Icones Bar/icon bar 1.svg';
import karIcon from '../public/images/Assets/Icones/Icones Bar/icon bar 2.svg';
import bootcIcon from '../public/images/Assets/Icones/Icones Bar/icon bar 3.svg';
import eventIcon from '../public/images/Assets/Icones/Icones Bar/icon bar 4.svg';
import contactIcon from '../public/images/Assets/Icones/Icones Bar/icon bar 5.svg';

import { ChevronDown, ChevronUp, Globe, Menu, X } from 'react-feather';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


function NavBarMobile({ openModal, langs, chevronUp, setChevronUp, translation, setDomLoaded  }) {
    const menuRef = useRef();
    const router = useRouter()
    const  lang  = router.query.lang || 'en';
    const { pathname } = router
   const location = pathname.replace('/[lang]', '');
    

  const isRTL = lang === 'ar' || lang === 'ma';

    // Checking the location for navbar
    const isHomePage = location === '/';


    const menuMobile = [
        { 'icon': homeIcon, 'title': translation?.accueil, 'navigate': 'Home-Hero' },
        { 'icon': karIcon, 'title': translation?.karriere, 'navigate': 'Home-Features' },
        { 'icon': bootcIcon, 'title': translation?.bootCamp, 'navigate': 'Home-Bootcamps' },
        { 'icon': eventIcon, 'title': translation?.events, 'navigate': 'Home-Events' },
        { 'icon': contactIcon, 'title': translation?.contact, 'navigate': 'Home-Contact' },
    ];

    // Showing Menu
    const openMenu = () => {
        const menu = document.getElementById('menu-mobile');
        menuRef.current.classList.add('active')
    }

    const closeMenu = () => {
        const menu = document.getElementById('menu-mobile');
        menuRef.current.classList.remove('active')
    }


    const toggleLanguages = () => {
        setChevronUp(prev => !prev);
        const lang = document.getElementById('langMobile');
        lang.classList.toggle('active');
    } 


       // Scrolling Effects
   useEffect(() => {
    const header = document.getElementById('headBarMobile');


    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbarVisibility(scrollTop) {
       if (scrollTop > lastScrollTop) {
          header.classList.add('navbar-hidden');
       } else if (scrollTop === 0) {
          header.style.backgroundColor = 'transparent';
          header.style.boxShadow = 'none';
       } else {
          header.classList.remove('navbar-hidden');
          header.style.backgroundColor = '#fff';     
          header.style.boxShadow = '0 5px 16px rgb(0, 0, 0, 0.5)';
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
       const header = document.getElementById('headBarMobile');
      if (window.scrollY > 0) {
          header.classList.remove('navbar-hidden');
          header.style.backgroundColor = '#fff';
          header.style.boxShadow = '0 5px 16px rgba(0, 0, 0, 0.5)';
      }
    };
    handleScroll();
  }, []); 
    


    return (
        <>
                    <nav className={`w-full fixed top-0 right-0 left-0 z-[999] ${isRTL ? "ar" : ''}`}>
                        <div id='headBarMobile' className={`w-full absolute flex justify-center items-center top-0 left-[50%] -translate-x-[50%] pt-2 row`}>
                            <div className='w-[90%] flex justify-between items-center border-b-[1px] border-[#FAA32C] border-solid'>
                                {/* Logo */}
                                <Link href='/' aria-label='home'>
                                    <div>
                                        <div className='relative w-[120px] h-[40px]'>
                                            <Image fill className="min-[315px]:block hidden" src={isRTL ? Logo_ar : Logo } alt="Logo" />
                                        </div>
                                        </div>
                                </Link>
            
                                {/* Buttons */}
                                <div className='flex items-center min-[340px]:gap-2 gap-1'>
                                    {/* Languages */}
                                    <div className="py-3 self-start relative">
                                        <button aria-label='change language' onClick={toggleLanguages} className="purple-gradient-to-light flex items-center rounded-full h-[36px] min-[340px]:px-3 px-2 text-white">
                                            <span>
                                                <Globe size="18" />
                                            </span>
                                            <span>
                                                {
                                                    chevronUp ? <ChevronUp size={15} /> : <ChevronDown size={15} />
                                                }
                                            </span>
                                        </button>
                                        {/* Languages */}
                                        <div id='langMobile' className={`languagesContainer w-[150px] h-[150px] bg-white absolute top-[50px] right-0 rounded-b-3xl rounded-tl-3xl shadow-[0_0_16px_rgba(0,0,0,0.19)] p-5`}>
                                            <div className={`languagesContent w-full h-full flex flex-col justify-between items-center `}>
                                                {
                                                    langs.map((item, key) => (
                                                    <Fragment key={key}>
                                                            <Link aria-label={`${item.code}`} href={`/${item.code}${location}`} className='w-[70%] flex justify-between items-center gap-2 hover:text-[#5358A6] py-2'>
                                                            <div className='relative w-[20px] h-[20px]'>
            
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
            
                                    {/* Play */}
                            <button
                                aria-label='Start'
                                        onClick={openModal}
                                        className="yellow-gradient-to-light flex items-center text-center rounded-full h-[36px] min-[340px]:px-3 px-2 text-white min-[340px]:gap-1 gap-0">
                                        <span>
                                            <ChevronDown size="15" />
                                        </span>
                                        <p>{translation?.play}</p>
                                    </button>
            
                                    {/* Open Menu Button */}
                            <button
                                aria-label='Open Menu'
                                        onClick={openMenu}
                                        className="yellow-gradient-to-dark flex items-center text-center rounded-xl h-[36px] px-2 text-white gap-1">
                                        <span>
                                            <Menu size="20" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Menu */}
                        <div id='menu-mobile' ref={menuRef} className={`nav_menu nav_menu_shadow absolute h-[100vh] min-[600px]:w-[40%] min-[500px]:w-[50%] w-[60%] purple-gradient-to-light flex flex-col justify-between`}>
                            <div className='w-full'>
                                {/* Close Menu Button */}
                                <div className='w-full flex justify-end py-5 min-[500px]:px-8 px-5'>
                            <button
                                aria-label='Close Menu'
                                    onClick={closeMenu}
                                    className="yellow-gradient-to-dark flex items-center text-center rounded-xl h-[36px] px-2 text-white gap-1">
                                    <span>
                                        <X size="20" />
                                    </span>
                                    </button>
                                </div>
            
                                {/* Navigation */}
                                <div className='w-full flex flex-col items-center gap-1 py-5'>
                                    <ul className='w-full text-white min-[300px]:text-xl text-lg font-extralight text-center'>
                                    {
                                        isHomePage ? (
                                            menuMobile.map((item, key) => (
                                                <li className='w-full flex flex-col items-center' key={key}>
                                                <ScrollLink
                                                    onClick={closeMenu}
                                                    to={`${item.navigate}`}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-0}
                                                    duration={500}
                                                    className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 py-3`}
                                                    >
                                                    <div className='relative w-[20px] h-[20px]'>
                                                            <Image fill src={item.icon} alt="" />
                                                </div>
                                                            {item.title}
                                                    </ScrollLink>
                                                {key !== menuMobile.length - 1 ? (
                                                    <div className='w-full border-b-2 border-solid border-white/40' />
                                                ) : (
                                                    <></>
                                                )}
                                                </li>
            
                                            ))
                                        ) : (
                                            menuMobile.map((item, key) => (
                                                <li className='w-full flex flex-col items-center' key={key}>
                                                    <Link className={`flex 
                                                    ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 py-3`} aria-label='home' href="/">
                                                        <div className='w-[20px] h-[20px] relative'>
                                                        <Image fill src={item.icon} alt="" /> {item.title}
                                                        </div>
                                                    </Link>
                                                    {key !== menuMobile.length - 1 ? (
                                                        <div className='w-full border-b-2 border-solid border-white/40' />
                                                    ) : (
                                                        <></>
                                                    )}
                                                </li>
                                            ))
                                        )
                                    }
                                    </ul>
                                    <button aria-label='start' onClick={openModal} className="w-[80%] yellow-gradient-to-light flex items-center justify-center text-center rounded-full h-[36px] px-3 text-white uppercase">{translation?.play}</button>
                                </div>
                            </div>
            
            
                            {/* Social Media */}
                            <ul className='w-[70%] mx-auto flex justify-around items-center space-x-2 py-16'>
                                <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150' >
                                    <a href='/' name='Linkedin' target='_blank' className='object-contain relative w-[30px] h-[30px] block'>
                                        <Image fill src={linkdenLogo} alt="Linkedin" loading='lazy' />
                                    </a>
                                </li>
                                <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150'>
                                    <a href='/' target='_blank' name='Whatsapp' className='object-contain relative w-[30px] h-[30px] block'>
                                        <Image fill src={whatsLogo} alt="Whatsapp" loading='lazy' />
                                    </a>
                                </li>
                                <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150'>
                                    <a href='/' target='_blank' name='Facebook' className='object-contain relative w-[30px] h-[30px] block'>
                                        <Image fill src={facebookLogo} alt="Facebook" loading='lazy' />
                                    </a>
                                </li>
                                <li className='w-[25px] rounded-lg hover:bg-[#FAA32C] transition duration-150'>
                                    <a href='/' target='_blank' className='object-contain relative w-[30px] h-[30px] block'>
                                        <Image fill src={instaLogo} alt="Instagram" loading='lazy' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
      </>
  )
}
const MemoizedMyComponent = React.memo(NavBarMobile);
export default MemoizedMyComponent;