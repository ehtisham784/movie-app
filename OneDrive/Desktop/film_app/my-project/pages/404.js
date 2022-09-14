import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearTimeout(timer);
  },[])
  return (
    <div className="flex flex-col items-center justify-center mt-60" >
      <h1 className="font-bold text-blue-400 text-9xl" >404</h1>
      <h6 className="text-5xl font-bold text-gray-600" >
        <span className="text-red-500" > Oops! </span>
        Page not Found
      </h6>
      <p className="text-gray-500 mt-3" > {"Page doesn't exist"} </p>
      <Link href="/" >
        <a className="bg-blue-100 text-blue-800 mt-5 font-semibold px-6 py-2 text-sm">Go Back</a>

      </Link>

    </div>
  )
}

export default NotFound