import { Link } from "react-router-dom"
export const Card = ({movie}) => {
  const{id, original_title, poster_path} = movie;
  const image = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:{};
  return (
    <div className="my-element max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-4">
      <Link to={`/movie/${id}`}>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h4>
        </Link>
      </div>
    </div>)
}
