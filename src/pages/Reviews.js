import { getMovieReviewsById } from 'components/ApiService/ApiService';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        await getMovieReviewsById(params.movieId).then(response => {
          setReviews(response.results);
        });
      } catch (error) {
      } finally {
      }
    }

    componentDidUpdate();
  }, [params]);

  return <div>{<ReviewsList reviews={reviews} />}</div>;
};
