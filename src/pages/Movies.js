import { getMovie } from 'components/ApiService/ApiService';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function componentDidUpdate() {
      try {
        await getMovie(query).then(response => {
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

  return (
    <div>
      <Searchbar />
      {movies.length > 0 && query !== '' && (
        <SearchMoviesList moviesList={movies} />
      )}
    </div>
  );
}
