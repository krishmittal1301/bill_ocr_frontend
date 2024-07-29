"use client";
// Ensure useEffect or state changes do not cause server/client mismatch
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import styles from './home.module.css';
import RootLayout from '../layout';
import { lusitana, libre_bsk,danc_script,great_vbs,allura ,pacifico,lobster} from '../fonts';
import Image from 'next/image';
import Navbar from '../Navbar';
import Tick from './tick';
import App from './app';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxImage({ src, alt, width, height,margin }:{ src: string; alt: string; width: number; height: number ,margin:number}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    <div ref={ref}>
      <motion.div style={{ y }}>
        <Image
          src={src}
          width={width}
          height={height}
          className={`rounded-br-3xl	rounded-tl-3xl	 rad m-${margin}`}
          alt={alt}
        />
      </motion.div>
    </div>
  );
}

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01
  });
  const text1 = "Harnesses the power of 20 million images to deliver unparalleled OCR precision.".split(" ");
  const text2 = "Capable of deciphering handwritten notes and restoring eroded documents with ease.".split(" ");
  const text3 = " Ensures consistent and reliable results, empowering efficient document analysis and digitization.".split(" ");
  return (
    <RootLayout>
      {loaded && ( <Navbar />)}
      <div className={`${lusitana.className} ${styles.heading1}`}>
        From Vision to Verbiage: Experience Hindi OCR Magic!
      </div>
      {loaded && (
        <div>
          <div className='flex flex-row md:flex-row items-center justify-around'>
            <ParallaxImage
              src="/ocr3.jpg"
              width={400}
              height={400}
              alt="Screenshots of the dashboard project showing desktop version"
              margin = {10}
            />
            <div className={`flex flex-col mx-10  md:flex-col items-center justify-around z-10 ${pacifico.className}`}>
                <div className='flex items-center mb-5'>
                  <Tick />
                  <div className='text-3xl text-blue-800 ml-5'>
                  {text1.map((el, i) => (<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.25, delay: i / 10,}} key={i} > {el}{" "}</motion.span>))}
                  
                  </div>
                </div>
                
                <div className='flex items-center mb-5'>
                  <Tick />
                  <div className='text-3xl text-blue-800 ml-5'>
                  {text2.map((el, i) => (<motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.25, delay: i / 10 }} key={i} > {el}{" "}</motion.span>))}
                  </div>
                </div>


                <div className='flex items-center mb-5'>
                  <Tick />
                  <div className='text-3xl text-blue-800 ml-5'>
                  {text3.map((el, i) => (<motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.25, delay: i / 10 }} key={i} > {el}{" "}</motion.span>))}
                  </div>
                </div>

            </div>
          </div>
          <div className='bg-slate-900  my-10 text-center	text-3xl text-white flex flex-col md:flex-col items-center justify-around p-20'>
            <div className= {`mb-6  ${lusitana.className}`}  >
              Place your Bill and get the OCR version .
            </div>
            <motion.div whileHover={{ scale: 1.2 }} />
            {/* <button className={`${lusitana.className} bg-yellow-400 px-7 py-3  text-black`}>
              Upload
            </button> */}
            <App />
          </div>
        
          <footer className="text-center text-black mt-6 mb-10 border-gray-600">
            Designed and developed by Krish Mittal
          </footer>
          <motion.div className="progress to-black fixed bottom-2 left-0 right-0 h-1 bg-blue-500" style={{ scaleX }} />
        </div>
      )}
    </RootLayout>
  );
}
