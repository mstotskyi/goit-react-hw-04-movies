// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PicsApiService from 'services/apiService';
import { Button } from 'components/Button/Button';
import { useLocation } from 'react-router';
import styles from 'pages/Home/HomePage.module.css';
import Spiner from 'components/Loader/Loader';

const newPicsApiService = new PicsApiService();

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [pages, setPages] = useState(null);
  const [page, setPage] = useState(null);
  const [showSpiner, setShowSpiner] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (searchResults.length !== 0) {
      return;
    }
    setShowSpiner(true);

    newPicsApiService
      .fetchTrendingFilms()
      .then(result => {
        setSearchResults(result.results);
        setPages(result.total_pages);
        setPage(result.page);
        setShowSpiner(false);
      })
      .catch(error => {});
  }, [searchResults.length]);

  const handleOnClick = e => {
    setShowSpiner(true);
    newPicsApiService.incrementPage();
    newPicsApiService
      .fetchTrendingFilms()
      .then(result => {
        setSearchResults(prevState => [...prevState, ...result.results]);
        setPages(result.total_pages);
        setPage(result.page);
        setShowSpiner(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {});
  };

  return (
    <>
      {showSpiner && <Spiner />}
      {searchResults.length > 0 && (
        <ul className={styles.MoviesGallery}>
          {searchResults.map((searchResult, index) => (
            <li key={index}>
              <Link
                to={{
                  pathname: `/movies/${searchResult.id}`,
                  state: {
                    from: { location, label: `back to home` },
                  },
                }}
                movie_id={searchResult.id}
                className={styles.link}
              >
                {searchResult.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {page !== pages && <Button handleOnClick={handleOnClick} />}
    </>
  );
}
