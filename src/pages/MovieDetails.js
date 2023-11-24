import { getMovieById } from 'components/ApiService/ApiService';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        await getMovieById(params.movieId).then(response => {
          console.log(params);
          console.log(response);
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
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={400}
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
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