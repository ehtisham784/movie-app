import React from 'react'
import Image from "next/image"
import Link from "next/link";
const TvCard = ({tv}) => {
  return (

    <Link href={`/movie/${tv.id}`} >
      <div className="bg-[#ffb0b0] drop-shadow-[1px_5px_5px_rgba(0,0,0,0.5)]  rounded-md cursor-pointer  " >
        <Image
          src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
          width={700}
          height={800}
          className="round"
        >

        </Image>
        <div className="px-6 pt-1" >
          <div className="font-bold text-xl mb-1" >
            {tv.title}
            <span/> /
            <span className="pl-2 text-base " >
              {tv.vote_average}

            </span>

          </div>
          <p className="text-gray-700 pb-1 text-base font-semibold" >
            {tv.release_date}
          </p>  
          <p className="text-gray-900 font-Work Sans" >
            {tv.tagline}
          </p>  

        </div>
      </div>

    </Link>
  )
}

export default TvCard