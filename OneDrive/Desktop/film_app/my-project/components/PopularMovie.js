import React from 'react'
import MovieCard from './MovieCard';

const PopularMovie = ({ movies }) => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-400  " >
      <div className=" container pt-10 w-max  pb-10 px-10 mx-auto" >
        <h1 className="text-white text-2xl pb-5 font-bold " >What's Popular Movies</h1>
        <div className="  grid gap-7 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5" >
          {movies.map(movie =>
            <MovieCard movie={movie} key={movie.id} />
          )}
        </div>
      </div>
    </div>

  )
}

export default PopularMovie