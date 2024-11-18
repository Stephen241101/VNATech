/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from './component/sidebar';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EXAMPLE APP - VNATECH", 
  description: "www.vnatech.com.vn", cv
  icons: {
    icon: "ancho.ico",
  },
  appleWebApp: {
    capable: true,
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         {/* <Sidebar /> */}
        {children}</body>
    </html>
  );
}


