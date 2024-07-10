import "@/app/globals.css";
import React from "react";
import { inter } from "./fonts";

export default function RootLayout({
  children,}:{
    children:React.ReactNode;
  }
){
  return(
    <html>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}


