import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [params, setParams] = useSearchParams();

  const updateQuery = value => {
    params.set('query', value);
    setParams(params);
  };

  return (
    <div>
      <form onSubmit={updateQuery}>
        <input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Enter movie title"
        />

        <button type="submit">seacrh</button>
      </form>
    </div>
  );
};
