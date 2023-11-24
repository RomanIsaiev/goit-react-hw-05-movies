import { Link } from 'react-router-dom';

export const SearchMoviesList = ({ moviesList }) => {
  console.log(moviesList);
  return (
    <ul>
      {moviesList.map(item => (
        <li key={item.id}>
          <Link to={`${item.id}`}>{item.title || item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
