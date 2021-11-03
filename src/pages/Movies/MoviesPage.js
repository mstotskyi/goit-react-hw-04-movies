import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import PicsApiService from 'services/apiService';
import { Searchbar } from 'components/Searchbar/Searchbar';
import Spiner from 'components/Loader/Loader';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

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
          <MoviesGallery
            searchResults={searchResults}
            url={url}
            location={location}
            handleOnClick={handleOnClick}
            page={page}
            pages={pages}
          />
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
