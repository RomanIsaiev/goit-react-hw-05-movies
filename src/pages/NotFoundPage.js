import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, page not found. Please use this <Link to="/">link</Link> to
        navigate to our home page.
      </p>
    </div>
  );
}
