// Navbar.tsx
'use client'

import React, { useState, useEffect } from 'react';
import styles from '@/app/home.module.css';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { px } from 'framer-motion';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [pathname, setPathname] = useState('/');
  const pathname2 = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="m-10 rounded-3xl flex items-center justify-between px-5  bg-slate-50 shadow-lg border-gray-800 text-black sticky top-5 z-50">
      <div><img src="lgo3.png" alt="" className='img_logo m-0 p-0 w-16 h-16'/></div>
      
      <button
        className="md:hidden block text-black"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div className={`flex flex-col md:flex-row items-center md:space-x-5 ${menuOpen ? 'max-h-screen my-2' : 'max-h-0'} md:max-h-full ${styles.navItems}`}>
        <div className={`${styles.navItem} ${pathname2 === '/' ? styles.active : ''}`}><a href="/">Home</a></div>
        <div className={`${styles.navItem} ${pathname2 === '/ocr' ? styles.active : ''}`}><a href="/ocr">OCR DOCS</a></div>
        <div className={`${styles.navItem} ${pathname2 === '/text-rendering' ? styles.active : ''}`}><Link href="/text-rendering">Text Rendering</Link></div>
        <div className={`${styles.navItem} ${pathname2 === '/clutter-removal' ? styles.active : ''}`}><Link href="/clutter-removal">Clutter Removal</Link></div>
      </div>
    </nav>

    
  );
};

export default Navbar;
