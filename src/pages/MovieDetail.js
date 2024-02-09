import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);
  const params = useParams();
  const fetchMovies = useCallback(async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovie(result.data);
    console.log(result.data);
  }, [params]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : {};

  const submit = (e) => {
    e.preventDefault();

    setComments((prev) => {
      const newComments = [...prev];
      newComments.push(inputText);
      setInputText("");

      return newComments;
    });
  };
  return (
    <>
      <main>
        <section className="flex  flex-wrap py-5 justify-center gap-10 ">
          <div>
            <img className="max-w-xs rounded" src={image} alt={movie.title} />
          </div>
          <div className="max-w-2xl text-gray-700 text-lg	 dark:text-white">
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
              {" "}
              {movie.title}
            </h1>
            <p className="text-xl py-4"> {movie.overview}</p>
            <div className="flex items-center ">
              <svg
                className="w-5 h-5 text-yellow-300 mr-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
                {movie.vote_average}
              </p>
            </div>
            <p className="my-4 ">
              <span className="mr-2 font-bold">RunTime: </span>
              <span>{movie.runtime} min</span>
            </p>
            <p className="my-4 ">
              <span className="mr-2 font-bold">Budget: </span>
              <span>{movie.budget === 0 ? "unKnown" : movie.budget} </span>
            </p>
            <p className="my-4 ">
              <span className="mr-2 font-bold">Release Date: </span>
              <span>{movie.release_date} </span>
            </p>
            <p className="my-4 ">
              <span className="mr-2 font-bold">Tagline: </span>
              <span>{movie.tagline} </span>
            </p>
          </div>
        </section>
        {/* Comments Section */}
        <section>
          {comments.map((comment, i) => (
            <div key={i}>
              <p className="my-4 text-white">{comment}</p>
            </div>
          ))}
        </section>

        <div className="relative max-w-2xl bg-white rounded-lg border pt-4 mx-auto mt-20">
          <div className="absolute px-2 top-0 ">
            <h2 className="text-md font-semibold text-gray-800">Discussion</h2>
          </div>
          <form>
            <div className="w-full px-3 mb-2 mt-6">
              <textarea
                className="bg-gray-100 rounded border border-gray-500 leading-normal w-full h-28 p-3 font-medium placeholder-gray-500  focus:bg-white"
                name="body"
                placeholder="Your comment"
                required=""
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
            </div>
            <div className="w-full flex justify-end px-3 my-3">
              <button
                type="submit"
                onClick={submit}
                className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
