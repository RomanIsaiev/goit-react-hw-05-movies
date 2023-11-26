import {
  MoviesList,
  MovieItem,
  MovieName,
  MoviePoster,
} from 'components/TrendingMoviesList/TrendingMoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const SearchMoviesList = ({ moviesList }) => {
  const location = useLocation();

  const defaultImage =
    'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  return (
    <MoviesList>
      {moviesList.map(item => (
        <MovieItem key={item.id}>
          <Link to={`${item.id}`} state={{ from: location }}>
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
  );
};
