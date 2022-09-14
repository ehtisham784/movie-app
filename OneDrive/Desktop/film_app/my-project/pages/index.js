import Hero from '../components/Hero';
import axios from "axios";
import PopularMovie from '../components/PopularMovie';
import LatestTvs from '../components/LatestTvs';
import { server } from "../config";
import { TvServer } from "../config";
export default function Home({ movies,tvs }) {
  return (
    
    <div>
      <Hero />
      <PopularMovie movies={movies.results} />
      <LatestTvs tvs={tvs.results} />
    </div>
  )
}

//get movie/Tv data from server using nextjs

export async function getStaticProps() {

  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const resp = await axios(`${TvServer}/latest?api_key=${process.env.API_KEY}&language=en-US`);
  const movies = res.data;
  const tvs = resp.data;
  return {
    props: { 
      movies,
      tvs
     }
    
  }
}



// export async function getStaticProps() {
//   const res= await axios(`${server}/?api_key=${process.env.API_KEY}&language=en-US&page=1`)
//   const movies = res.data;

//   return {
//     props:{movies}
//   }
// }


//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US