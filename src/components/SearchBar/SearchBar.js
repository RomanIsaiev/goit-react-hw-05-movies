import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuerySubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    onSubmit(searchQuery);
  };

  const handleSearchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={handleSearchQuerySubmit}>
        <input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchQueryChange}
        />

        <button type="submit">seacrh</button>
      </form>
    </div>
  );
};
