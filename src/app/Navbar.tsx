// Navbar.tsx
"use client";

import React, { useState } from 'react';
import styles from '@/app/home.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="m-10 rounded-3xl  flex items-center justify-between p-5 bg-slate-50 shadow-lg  border-gray-800 text-black sticky top-5">
      <div className="text-lg font-bold">My Website</div>
      <button
        className="md:hidden block text-black"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div className={`flex flex-col md:flex-row items-center md:space-x-5 ${menuOpen ? 'max-h-screen my-2' : 'max-h-0'} md:max-h-full ${styles.navItems}`}>
        <div><a href="/dashboard">Portfolio</a></div>
        <div>OCR DOCS(DOCTR)</div>
        <div>OCR DOCS(PaddleOCR)</div>
        <div>Text Rendering</div>
        <div>Clutter remover</div>
      </div>
    </nav>
  );
};

export default Navbar;
