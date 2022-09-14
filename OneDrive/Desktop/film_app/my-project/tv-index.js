import Hero from './components/Hero';
import axios from "axios";
import LatestTvs from './components/LatestTvs';
import { TvServer } from "./config";
export default function Home({ tvs }) {

  return (
    <div>
      <Hero />
      <LatestTvs tvs={tvs.results} />
    </div>
  )
}

//get TV data from server using nextjs

export async function getStaticProps() {
  const res= await axios(`${TvServer}/latest?api_key=${process.env.API_KEY}&language=en-US`)
  const tvs = res.data;

  return {
    props:{tvs}
  }
}



//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US