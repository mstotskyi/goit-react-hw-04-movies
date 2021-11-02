import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import PicsApiService from 'services/apiService';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import styles from 'pages/Movies/MoviesPage.module.css';
import defaultImg from '../../images/default.jpg';

const newPicsApiService = new PicsApiService();

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [searchResults, setSearchResults] = useState([]);
  // const [status, setStatus] = useState('init');
  const [pages, setPages] = useState(null);
  const [page, setPage] = useState(null);
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const getSearchQuery = searchQuery => {
    console.log(searchQuery);
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  const handleOnClick = e => {
    newPicsApiService.incrementPage();
    // setShowSpiner(true);
    newPicsApiService
      .fetchSearchMovies()
      .then(result => {
        setSearchResults(prevState => [...prevState, ...result.results]);
        // setShowSpiner(false);
        setPages(result.total_pages);
        setPage(result.page);
        // setStatus('success');
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        // setStatus('error');
      });
  };

  const searchValue = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    console.log(searchValue);
    if (!searchValue || searchValue === '') {
      return;
    }
    newPicsApiService.query = searchValue;
    newPicsApiService.resetPage();
    newPicsApiService
      .fetchSearchMovies()
      .then(result => {
        console.log(result);
        setSearchResults(result.results);
        setPages(result.total_pages);
        // setStatus('success');
      })
      .catch(error => {
        // setStatus('error');
      });
  }, [searchValue]);

  return (
    <>
      <Searchbar getSearchQuery={getSearchQuery} searchValue={searchValue} />
      {searchResults.length > 0 && (
        <>
          <ul className={styles.MoviesGallery}>
            {searchResults.map((searchResult, index) => (
              <li key={index}>
                <Link
                  to={{
                    pathname: `${url}/${searchResult.id}`,
                    state: {
                      from: { location, label: `back to movies` },
                    },
                  }}
                  className={styles.link}
                >
                  {searchResult.title}
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
