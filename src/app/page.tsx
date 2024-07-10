"use client";
import React, { useState, useRef ,ChangeEvent} from 'react';
import ReactDOM from "react-dom/client";
import RootLayout from './layout';
import styles from '@/app/home.module.css';
import '@/app/globals.css';
import Navbar from './Navbar';
import { lusitana } from './fonts';
import Image from 'next/image';

function HomePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/hello', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResponseData(data);

        alert('File uploaded successfully: ' + data.message);
      } else {
        alert('File upload failed: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed: ' + error);
    }
  };

  const triggerFileInput = () => {
      fileInputRef.current?.click();
  };

  const renderData = () => {
    if (!responseData) {
      return null;
    }

      return (
      <div className={styles.dataContainer}>
        <h2 className={styles.heading}>Bill Analysis Results</h2>
        {Object.entries(responseData).map(([key, value], index) => (
          <div className={styles.section} key={index}>
            <h3>{key}</h3>
            {renderValues(value as any)}
          </div>
        ))}
      </div>
    );
  };

  const renderValues = (values: any[]) => {
    return (
      <ul className={styles.valueList}>
        {values.map((item, idx) => (
          <li key={idx}>{item + " , "}</li>
        ))}
      </ul>
    );
  };


  return (
    <RootLayout>
      <Navbar />
      <div className={`${lusitana.className} ${styles.heading1}`}>
        Streamline Your Audit Process: Automate Bill Analysis with <span style={{ color: 'blue' }}>OCR Technology</span>
      </div>
      <div className="flex items-center justify-around">
        <Image
          src="/Auditlogo.jpg"
          width={900}
          height={800}
          className={`${styles.shape} hidden md:block sm:inline-block rounded-full`}
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <div className="mt-20">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <button onClick={triggerFileInput} className={`${styles.btn} text-black w-64`}>
            Select and Upload the BILL
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        {renderData()}
      </div>
      <footer className="text-center text-black mt-6 border-gray-600">
        Designed and developed by Krish Mittal
      </footer>
    </RootLayout>
  );
}

export default HomePage;
