import { getMovieById } from 'components/ApiService/ApiService';
import { GenresList } from 'components/MovieGenresList/MovieGenresList';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetails() {
  const defaultImage =
    'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  const [movie, setMovie] = useState(null);
  const params = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location);

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

  return (
    <div>
      <h2>MovieDetails</h2>

      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        Back to movies
      </Link>

      {movie && (
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
      )}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
