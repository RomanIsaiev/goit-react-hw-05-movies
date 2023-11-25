import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ topMoviesList }) => {
  const location = useLocation();

  return (
    <ul>
      {topMoviesList.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
