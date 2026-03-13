import React from 'react'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Layout({ children }) {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <div className="pt-20 container box-border mx-auto px-10 py-10">

        {children}

      </div>
      <Footer />
    </div>

  )
}
