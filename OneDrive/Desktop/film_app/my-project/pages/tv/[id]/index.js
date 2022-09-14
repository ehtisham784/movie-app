import React from 'react'
import axios from 'axios'
import Image from "next/image"
import Meta from "../../../components/Meta"
import { TvServer } from "../../../config/index";
const Tv = ({ tvs }) => {
  return (
    <div className="container max-w-xl mx-auto pt-6 " >
      <Meta title={tvs.title} />
      <div className=" px-3  "   >
        <Image
          className="rounded-md  "
          src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} 
          width={700}
          height={400}
          />
      </div>
        
      <h1 className="font-bold text-xl my-2" >{tvs.title}</h1>
      <p className="font-[400] italic" >{tvs.tagline}</p>  
      <p className="text-gray-600 text-sm mt-4" >{tvs.release_date}</p>
      <p className="mt-5 text-gray-600 text-sm" >
        Genre: <span className="font-bold" >
          {tvs.genres.map(genre => genre.name).join(',')}</span></p>
      <p className="text-gray-600 text-sm font-bold " >Release Date: <span>{tvs.release_date}</span></p>
      <p className="font-[400] py-5 px-7  text-gray-900" >{tvs.overview}</p> 
      
      
    </div>
  );
};


export async function getStaticProps(context) {
  const { id } = context.params;
  const resp= await axios(`${TvServer}/${id}?api_key=${process.env.API_KEY}&language=en-US`)
  const tvs = resp.data;

  return {
    props:{tvs}
  }
}
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US

export async function getStaticPaths() {
  const resp= await axios(`${TvServer}/latest?api_key=${process.env.API_KEY}&language=en-US`)
  const tvs = resp.data.results;
  const ids = tvs.map(tv => movie.id);
  const paths = ids.map(id => ({
    params: { id: id.toString() }
  }));


  return {
    paths,
    fallback: false
  }
}

export default Tv