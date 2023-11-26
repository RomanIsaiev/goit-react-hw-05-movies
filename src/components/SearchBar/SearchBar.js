import { useSearchParams } from 'react-router-dom';
import { Form, FormInput, SubmitButton } from './SearchBar.styled';

export const Searchbar = () => {
  const [params, setParams] = useSearchParams();

  const updateQuery = value => {
    params.set('query', value);
    setParams(params);
  };

  return (
    <div>
      <Form onSubmit={updateQuery}>
        <FormInput
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Enter movie title"
        />

        <SubmitButton type="submit">seacrh</SubmitButton>
      </Form>
    </div>
  );
};
