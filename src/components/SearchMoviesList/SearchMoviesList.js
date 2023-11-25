import { Link, useLocation } from 'react-router-dom';

export const SearchMoviesList = ({ moviesList }) => {
  console.log(moviesList);
  const location = useLocation();
  return (
    <ul>
      {moviesList.map(item => (
        <li key={item.id}>
          <Link to={`${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
