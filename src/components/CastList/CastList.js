const { CastListStyled, CastItemStyled } = require('./CastList.styled');

export const CastList = ({ casts }) => {
  const defaultImage =
    'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
  return (
    <CastListStyled>
      {casts.map(cast => (
        <CastItemStyled key={cast.cast_id}>
          <img
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : defaultImage
            }
            alt={cast.name}
            width={250}
            height={375}
          />
          <h3>Name: {cast.name}</h3>
          <p>Character: {cast.character}</p>
        </CastItemStyled>
      ))}
    </CastListStyled>
  );
};
