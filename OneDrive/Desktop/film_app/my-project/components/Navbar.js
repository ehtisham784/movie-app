import React from 'react';
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-[#801010]" >
      <div className="font-bold font-nabla  text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest" >
        <Link href="/">
          <a className="text-base md:text-2xl" >
            NET
            <span className="text-red-500  " >FLIX</span>
          </a>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar