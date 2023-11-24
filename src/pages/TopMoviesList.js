import { Link } from 'react-router-dom';

export const MoviesList = ({ topMoviesList }) => {
  console.log(topMoviesList);
  return (
    <ul>
      {topMoviesList.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
