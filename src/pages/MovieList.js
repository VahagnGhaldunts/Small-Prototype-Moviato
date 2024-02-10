import { Card } from "../components/Card"
import { useFetch } from "../hook/useFetch"
export const MovieList = ({ apiPath }) => {
  const { movies } = useFetch(apiPath)

  const renderedMovies = movies.map((movie) => {
    return <Card key={movie.id} movie={movie} />
  })
  return (
    <main>
        <div className="flex flex-wrap justify-start gap-5 other:justify-evenly">
          {movies.length=== 0?<p className="text-4xl font-bold dark:text-white"></p>:renderedMovies}
        </div>
    </main>
  )
}
