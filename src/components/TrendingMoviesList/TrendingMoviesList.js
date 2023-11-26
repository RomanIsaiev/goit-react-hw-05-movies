import {
  getMovieById,
  getTrendingMovies,
} from 'components/ApiService/ApiService';
import { MoviesList } from 'pages/TopMoviesList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        await getMovieById(params.movieId).then(response => {
          setMovie(response.data);
        });
      } catch (error) {
      } finally {
      }
    }

    componentDidUpdate();
  }, [params]);

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        await getTrendingMovies().then(response => {
          setTrendingMovies(response);
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    componentDidUpdate();
  }, []);

  return (
    <div>
      {movie ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={400}
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <MoviesList topMoviesList={trendingMovies} />
      )}
    </div>
  );
};
