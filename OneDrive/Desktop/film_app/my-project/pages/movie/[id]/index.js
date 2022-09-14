import React from 'react'
import axios from 'axios'
import Image from "next/image"
import Meta from "../../../components/Meta"
import { server } from "../../../config/index";
const Movie = ({ movies }) => {
  return (
    <div className="container max-w-xl mx-auto pt-6 " >
      <Meta title={movies.title} />
      <div className=" px-3  "   >
        <Image
          className="rounded-md  "
          src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} 
          width={700}
          height={400}
          />
      </div>
        
      <h1 className="font-bold text-xl my-2" >{movies.title}</h1>
      <p className="font-[400] italic" >{movies.tagline}</p>  
      <p className="text-gray-600 text-sm mt-4" >{movies.release_date}</p>
      <p className="mt-5 text-gray-600 text-sm" >
        Genre: <span className="font-bold" >
          {movies.genres.map(genre => genre.name).join(',')}</span></p>
      <p className="text-gray-600 text-sm font-bold " >Release Date: <span>{movies.release_date}</span></p>
      <p className="font-[400] py-5 px-7  text-gray-900" >{movies.overview}</p> 
      
      
    </div>
  );
};


export async function getStaticProps(context) {
  const { id } = context.params;
  const res= await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data;

  return {
    props:{movies}
  }
}

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export async function getStaticPaths() {
  const res= await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data.results;
  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({
    params: { id: id.toString() }
  }));


  return {
    paths,
    fallback: false
  }
}

export default Movie