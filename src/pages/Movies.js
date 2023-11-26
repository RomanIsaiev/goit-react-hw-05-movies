import { getMovie } from 'components/ApiService/ApiService';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getMovie(query).then(response => {
          if (response.total === 0) {
            return;
          }
          setMovies(response.results);
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
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
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </div>
  );
}
