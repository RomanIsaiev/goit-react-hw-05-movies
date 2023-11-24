import { Link, NavLink, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <div>
      <h2>MovieDetails</h2>

      <Link to="movies">Back to movies</Link>

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
