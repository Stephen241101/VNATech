/** @format */
"use client"; 
import { useState } from 'react';

import Sidebar from './component/sidebar';
import Dashboard from './dashboard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-800">
      <Sidebar />
      <main className="flex-grow p-2 select-none">
        <div className="py-4 text-white font-bold text-3xl text-center">
          ỨNG DỤNG GIÁM SÁT THÔNG TIN MÁY
        </div>
        <div className="flex flex-1 ">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}