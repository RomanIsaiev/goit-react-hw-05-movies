const { GenresListStyled } = require('./MovieGenresList.styled');

export const GenresList = ({ genres }) => {
  return (
    <GenresListStyled>
      {genres.map(genre => (
        <li key={genre.id}>
          <p>{genre.name}</p>
        </li>
      ))}
    </GenresListStyled>
  );
};
