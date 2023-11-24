import { getMovie } from 'components/ApiService/ApiService';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = searchQuery => {
    setQuery(`${Date.now()}/${searchQuery}`);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function componentDidUpdate() {
      try {
        await getMovie(query.slice(14, query.length)).then(response => {
          console.log(response);
          if (response.total === 0) {
            return;
          }
          setMovies(response.results);
        });
      } catch (error) {
      } finally {
      }
    }

    componentDidUpdate();
  }, [query]);

  console.log(query.slice(14, query.length));

  console.log(movies);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length > 0 && <SearchMoviesList moviesList={movies} />}
    </div>
  );
}
