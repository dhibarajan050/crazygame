import React from 'react'
import Navbar from "@/app/components/Navbar";

export default function Layout({children}) {
  return (
     <div className="pt-20 container box-border bg-gray-200 mx-auto px-10 py-10">
      <Navbar/>
      {children}</div>
  )
}
