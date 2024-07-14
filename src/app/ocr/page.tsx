"use client";
// Ensure useEffect or state changes do not cause server/client mismatch
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import styles from './home.module.css';
import RootLayout from '../layout';
import { lusitana, libre_bsk } from '../fonts';
import Image from 'next/image';
import Navbar from '../Navbar';

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
          className={`rounded-lg m-${margin}`}
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

  return (
    <RootLayout>
      {loaded && ( <Navbar />)}
      <div className={`${lusitana.className} ${styles.heading1}`}>
        From Vision to Verbiage: Experience Hindi OCR Magic!
      </div>
      {loaded && (
        <div className={`${libre_bsk.className}`}>
          <div className='flex flex-col md:flex-row items-center justify-around'>
            <ParallaxImage
              src="/ocr3.jpg"
              width={300}
              height={300}
              alt="Screenshots of the dashboard project showing desktop version"
              margin = {10}
            />
            <div className='text-3xl text-blue-800 ml-5'>
              Harnesses the power of 20 million images to deliver unparalleled OCR precision.
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-around'>
            <div className='text-3xl text-blue-800 ml-5'>
              Capable of deciphering handwritten notes and restoring eroded documents with ease.
            </div>
            <ParallaxImage
              src="/ocr2.jpg"
              width={350}
              height={350}
              alt="Screenshots of the dashboard project showing desktop version"
              margin = {1}
            />
          </div>
          <div className='flex flex-col md:flex-row items-center justify-around'>
            <ParallaxImage
              src="/ocr4.jpg"
              width={300}
              height={300}
              alt="Screenshots of the dashboard project showing desktop version"
              margin = {10}
            />
            <div className='text-3xl text-blue-800 ml-5'>
              Ensures consistent and reliable results, empowering efficient document analysis and digitization.
            </div>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea ducimus at nobis dolorem nemo illo ex non, ipsa quaerat distinctio voluptates, doloremque repudiandae voluptatum voluptatibus? Facilis incidunt nesciunt voluptas.
          </div>
          <footer className="text-center text-black mt-6 border-gray-600">
            Designed and developed by Krish Mittal
          </footer>
          <motion.div className="progress to-black fixed bottom-2 left-0 right-0 h-1 bg-blue-500" style={{ scaleX }} />
        </div>
      )}
    </RootLayout>
  );
}
