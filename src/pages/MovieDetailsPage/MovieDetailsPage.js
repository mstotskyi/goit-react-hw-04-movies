import { useState, useEffect } from 'react';
import { useParams, NavLink, Switch, useRouteMatch } from 'react-router-dom';
import { Route, useHistory, useLocation } from 'react-router';
import defaultImg from '../../images/default.jpg';
import Cast from 'pages/CastPage/Cast';
import Reviews from 'pages/Reviews/Reviews';
import PicsApiService from 'services/apiService';
import styles from 'pages/MovieDetailsPage/MovieDetails.module.css';

const newPicsApiService = new PicsApiService();

export default function MovieDetails() {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState([]);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    newPicsApiService.movieId = movieId;
    newPicsApiService
      .fetchMoviesById()
      .then(result => {
        setMovie(result);
      })
      .catch(error => {});
  }, [movieId]);

  const handleOnClick = () => {
    history.push(location?.state?.from?.location ?? '/movies');
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={handleOnClick}
        className={styles.GoBackBtn}
      >
        {location?.state?.from?.label ?? 'Back to results'}
      </button>
      <div className={styles.MovieDetails}>
        {movie.poster_path ? (
          <img
            src={`${BASE_IMG_URL}${movie.poster_path}`}
            alt={movie.original_title}
            className={styles.MovieDetails__image}
          />
        ) : (
          <img src={defaultImg} alt="" width="320" height="480" />
        )}
        <div className={styles.MovieDescr}>
          {movie.title ? (
            <h1>{movie.title}</h1>
          ) : (
            <h1>{movie.original_title}</h1>
          )}
          <p>Vote average: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.MovieDetails__link}>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: {
              from: {
                location: location.state.from.location,
                label: `Back to results`,
              },
            },
          }}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: {
              from: {
                location: location.state.from.location,
                label: `Back to results`,
              },
            },
          }}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Reviews
        </NavLink>
      </div>
      <hr />
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}
