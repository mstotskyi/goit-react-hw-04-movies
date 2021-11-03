import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import PicsApiService from 'services/apiService';
import { Searchbar } from 'components/Searchbar/Searchbar';
import Spiner from 'components/Loader/Loader';
import defaultImg from '../../images/default.jpg';
import { Button } from 'components/Button/Button';
import styles from 'pages/Movies/MoviesPage.module.css';

const newPicsApiService = new PicsApiService();

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('init');
  const [pages, setPages] = useState(null);
  const [page, setPage] = useState(null);
  const [showSpiner, setShowSpiner] = useState(false);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const getSearchQuery = searchQuery => {
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  const searchValue = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchValue || searchValue === '') {
      return;
    }
    setStatus('pending');
    newPicsApiService.query = searchValue;
    newPicsApiService.resetPage();
    newPicsApiService
      .fetchSearchMovies()
      .then(result => {
        setSearchResults(result.results);
        setPages(result.total_pages);
        setStatus('success');
      })
      .catch(error => {
        setStatus('error');
      });
  }, [searchValue]);

  const handleOnClick = e => {
    setShowSpiner(true);
    newPicsApiService.incrementPage();
    newPicsApiService
      .fetchSearchMovies()
      .then(result => {
        setSearchResults(prevState => [...prevState, ...result.results]);
        console.log(result);
        setShowSpiner(false);
        setPages(result.total_pages);
        setPage(result.page);
        setStatus('success');
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setStatus('error');
      });
  };

  if (status === 'init') {
    return <Searchbar getSearchQuery={getSearchQuery} />;
  }
  if (status === 'pending') {
    return (
      <>
        <Searchbar getSearchQuery={getSearchQuery} />
        <Spiner />
      </>
    );
  }
  if (status === 'success') {
    return (
      <>
        <Searchbar getSearchQuery={getSearchQuery} />
        {showSpiner && <Spiner />}
        {searchResults.length > 0 ? (
          <>
            <ul className={styles.MoviesGallery}>
              {searchResults.map((searchResult, index) => (
                <li key={index}>
                  <Link
                    to={{
                      pathname: `${url}/${searchResult.id}`,
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
        ) : (
          <p>Sorry, nothing was found for your query!</p>
        )}
      </>
    );
  }
  if (status === 'error') {
    alert('ERROR!!');
  }
}
