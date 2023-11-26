import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { Container, NavList, ListItem } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('pages/Reviews'));
const Cast = lazy(() => import('pages/Cast'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavList>
            <ListItem>
              <NavLink to="/">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/movies">Movies</NavLink>
            </ListItem>
          </NavList>
        </nav>
      </header>
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
