export const GenresList = ({ genres }) => {
  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>
          <p>{genre.name}</p>
        </li>
      ))}
    </ul>
  );
};
