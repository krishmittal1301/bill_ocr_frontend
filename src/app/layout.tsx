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
          <link rel="shortcut icon" href="Frame_2.svg" type="image/x-icon" />
          <title>OCR</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
