import { GenresList } from 'components/MovieGenresList/MovieGenresList';

import { NavLink } from 'react-router-dom';
import { MovieContainer, CastReviewList } from './MovieDetails.styled';

export const Movie = ({ movie }) => {
  const defaultImage =
    'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  return (
    <div>
      <MovieContainer>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
            width={300}
            height={400}
          />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {(Math.round(movie.vote_average) / 10) * 100}%</p>
          <div>
            <h3>Overview</h3>
            <p> {movie.overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <GenresList genres={movie.genres} />
          </div>
        </div>
      </MovieContainer>
      <CastReviewList>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </CastReviewList>
    </div>
  );
};
