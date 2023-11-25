import { getMovie } from 'components/ApiService/ApiService';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  console.log('movies query  -', query);

  // const handleFormSubmit = searchQuery => {
  //   setQuery(`${Date.now()}/${searchQuery}`);
  // };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function componentDidUpdate() {
      try {
        await getMovie(query).then(response => {
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

  console.log(movies);

  return (
    <div>
      <Searchbar />
      {movies.length > 0 && <SearchMoviesList moviesList={movies} />}
    </div>
  );
}