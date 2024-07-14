// Navbar.tsx
import React, { useState, useEffect } from 'react';
import styles from '@/app/home.module.css';
import { useRouter ,usePathname} from 'next/navigation';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('/');
  const pathname2 = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check if router is available (client-side) and has pathname set
    if (router && pathname2) {
      setPathname(pathname2);
    }
  }, [pathname2]); // Add router as dependency to rerun effect when router changes

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="m-10 rounded-3xl flex items-center justify-between p-5 bg-slate-50 shadow-lg border-gray-800 text-black sticky top-5 z-50">
      <div className="text-lg font-bold">My Website</div>
      <button
        className="md:hidden block text-black"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div className={`flex flex-col md:flex-row items-center md:space-x-5 ${menuOpen ? 'max-h-screen my-2' : 'max-h-0'} md:max-h-full ${styles.navItems}`}>
        <div className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}><a href="/">Home</a></div>
        <div className={`${styles.navItem} ${pathname === '/ocr' ? styles.active : ''}`}><a href="/ocr">OCR DOCS</a></div>
        <div className={`${styles.navItem} ${pathname === '/text-rendering' ? styles.active : ''}`}><a href="/text-rendering">Text Rendering</a></div>
        <div className={`${styles.navItem} ${pathname === '/clutter-removal' ? styles.active : ''}`}><a href="/clutter-removal">Clutter Removal</a></div>
      </div>
    </nav>
  );
};

export default Navbar;
