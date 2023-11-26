import { getMovieById } from 'components/ApiService/ApiService';
import { Movie } from 'components/MovieDetails/MovieDetails';
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

      {movie && <Movie movie={movie} />}

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
