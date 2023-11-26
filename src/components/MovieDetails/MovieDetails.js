import { GenresList } from 'components/MovieGenresList/MovieGenresList';

export const Movie = ({ movie }) => {
  const defaultImage =
    'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  return (
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
      <h2>{movie.title}</h2>
      <p>User Score: {(Math.round(movie.vote_average) / 10) * 100}%</p>
      <div>
        <b>Overview</b>
        <p> {movie.overview}</p>
      </div>
      <div>
        <b>Genres</b>
        <GenresList genres={movie.genres} />
      </div>
    </div>
  );
};
