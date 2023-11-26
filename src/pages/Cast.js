import { getMovieCastById } from 'components/ApiService/ApiService';
import { CastList } from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        await getMovieCastById(params.movieId).then(response => {
          setCasts(response);
        });
      } catch (error) {
      } finally {
      }
    }

    componentDidUpdate();
  }, [params]);

  return <div>{<CastList casts={casts} />}</div>;
}
