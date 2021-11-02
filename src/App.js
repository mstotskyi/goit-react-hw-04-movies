import './App.css';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/Home/HomePage.js' /*webpackChunkName: "HomePage"*/),
);
const MoviesPage = lazy(() =>
  import('./pages/Movies/MoviesPage.js' /*webpackChunkName: "MoviesPage"*/),
);
const MovieDetails = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage.js' /*webpackChunkName: "MovieDetails"*/
  ),
);

export default function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <section>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={MoviesPage}>
              <HomePage />
            </Route>
            <Route exact path="/movies" component={MoviesPage}>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetails />
            </Route>
          </Switch>
        </Suspense>
      </section>
    </div>
  );
}
