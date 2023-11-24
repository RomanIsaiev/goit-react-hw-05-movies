export const CastList = ({ casts }) => {
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            alt={cast.name}
          />
          <h3>Name: {cast.name}</h3>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
