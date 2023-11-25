export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>Review: {review.content}</p>
        </li>
      ))}
    </ul>
  );
};
