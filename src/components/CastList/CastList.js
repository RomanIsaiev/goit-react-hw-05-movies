export const CastList = ({ casts }) => {
  const defaultImage =
    'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.cast_id}>
          <img
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : defaultImage
            }
            alt={cast.name}
            width={250}
          />
          <h3>Name: {cast.name}</h3>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
