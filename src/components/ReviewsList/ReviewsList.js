const { ReviewListStyled } = require('./ReviewsList.styled');

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewListStyled>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewListStyled>
  );
};
