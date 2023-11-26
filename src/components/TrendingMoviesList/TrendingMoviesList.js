import { getTrendingMovies } from 'components/ApiService/ApiService';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Link, useLocation } from 'react-router-dom';
import {
  MoviesList,
  MovieItem,
  MovieName,
  MoviePoster,
} from './TrendingMoviesList.styled';

export const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const defaultImage =
    'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getTrendingMovies().then(response => {
          setTrendingMovies(response);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    componentDidUpdate();
  }, []);

  return (
    <div>
      <MoviesList>
        {trendingMovies.map(item => (
          <MovieItem key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              <MoviePoster
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : defaultImage
                }
                alt={item.title}
                width={300}
              />
              <MovieName> {item.title || item.name}</MovieName>
            </Link>
          </MovieItem>
        ))}
      </MoviesList>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </div>
  );
};
