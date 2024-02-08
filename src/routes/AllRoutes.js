import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MovieList apiPath="movie/now_playing" title = "Home / Moviato" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList apiPath="/movie/popular" title="Popular / Moviato" />} />
        <Route path="movies/top" element={<MovieList apiPath = "/movie/top_rated" title="TopRated / Moviato"/>} />
        <Route path="movies/upcoming" element={<MovieList apiPath = '/movie/upcoming' title="Upcoming / Moviato" />} />
        
      </Routes>
    </>
  )
}
