import { getTrendingMovies } from 'components/ApiService/ApiService';
import { MoviesList } from 'pages/TopMoviesList';
import { useEffect, useState } from 'react';

export const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        await getTrendingMovies().then(response => {
          setTrendingMovies(response);
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    componentDidUpdate();
  }, []);

  return (
    <div>
      <MoviesList topMoviesList={trendingMovies} />
    </div>
  );
};
