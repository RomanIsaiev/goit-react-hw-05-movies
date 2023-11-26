import { getMovieById } from 'components/ApiService/ApiService';
import { Movie } from 'components/MovieDetails/MovieDetails';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

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
        console.log(error);
      } finally {
      }
    }

    componentDidUpdate();
  }, [params]);

  return (
    <div>
      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        Back to movies
      </Link>

      <h2>MovieDetails</h2>
      {movie && <Movie movie={movie} />}

      <Outlet />
    </div>
  );
}
