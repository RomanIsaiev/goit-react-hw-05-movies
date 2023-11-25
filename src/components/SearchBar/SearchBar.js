import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// export const Searchbar = ({ onSubmit }) => {

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchQuerySubmit = event => {
//     event.preventDefault();

//     if (searchQuery.trim() === '') {
//       return;
//     }

//     onSubmit(searchQuery);
//   };

//   const handleSearchQueryChange = event => {
//     setSearchQuery(event.currentTarget.value.toLowerCase());
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearchQuerySubmit}>
//         <input
//           type="text"
//           autoComplete="off"
//           name="query"
//           autoFocus
//           placeholder="Search images and photos"
//           onChange={handleSearchQueryChange}
//         />

//         <button type="submit">seacrh</button>
//       </form>
//     </div>
//   );
// };

export const Searchbar = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearchQuerySubmit = event => {
  //   event.preventDefault();

  //   if (searchQuery.trim() === '') {
  //     return;
  //   }

  //   onSubmit(searchQuery);
  // };

  // const handleSearchQueryChange = event => {
  //   setSearchQuery(event.currentTarget.value.toLowerCase());
  // };

  console.log(query);

  console.log(params.get('query'));

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
          placeholder="Search images and photos"
        />

        <button type="submit">seacrh</button>
      </form>
    </div>
  );
};
