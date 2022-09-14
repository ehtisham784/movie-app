import React from 'react'
import Link from "next/link";
import Image from "next/image"

function Hero() {
  return (
    <div className="text-center bg-[#ca6d6d]  " >
      <div className="w-30 mx-[auto]" >
        <Image
          src={"/main-logo.svg" } 
          width={200}
          height={200}
          layout=""
          />
      </div>
        <h1 className="text-2xl text-gray-700 uppercase  font-bold" >Welcome to Netflix</h1>
        <p className="text-[#eae8e8] text-sm mb-2 font-roboto " >Produce FILM feature, TELEVISION and GAME </p>
        
      <Link href="/contact" >
        <button className="bg-[#989595] drop-shadow-md text-[white] py-3 px-5 rounded text-sm mb-2 hover:bg-gray-300  " >Click me</button>
      </Link>
    </div>
  )
}

export default Hero