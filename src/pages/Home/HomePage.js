import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PicsApiService from 'services/apiService';
import { useLocation } from 'react-router';
import defaultImg from '../../images/default.jpg';
import { Button } from 'components/Button/Button';
import Spiner from 'components/Loader/Loader';
import styles from 'pages/Home/HomePage.module.css';

const newPicsApiService = new PicsApiService();

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const { url } = useRouteMatch();
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

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
        <>
          <ul className={styles.MoviesGallery}>
            {searchResults.map((searchResult, index) => (
              <li key={index}>
                <Link
                  to={{
                    pathname: `/movies/${searchResult.id}`,
                    state: {
                      from: { location, label: `Back to results` },
                    },
                  }}
                  className={styles.link}
                >
                  <div>
                    {searchResult.poster_path ? (
                      <div className={styles.ImageThumb}>
                        <img
                          src={`${BASE_IMG_URL}${searchResult.poster_path}`}
                          alt={`${searchResult.title}`}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={`${defaultImg}`}
                          alt={`${searchResult.title}`}
                        />
                      </div>
                    )}
                    {searchResult.title ? (
                      <p>{searchResult.title}</p>
                    ) : (
                      searchResult.original_title
                    )}

                    <p>Rating {searchResult.vote_average}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {page !== pages && <Button handleOnClick={handleOnClick} />}
        </>
      )}
    </>
  );
}
