"use client";

import "@/app/ocr/global.css";
import React from "react";
import { inter } from "./fonts";
import Template from "./template";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add any head tags like meta, link, title here */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
