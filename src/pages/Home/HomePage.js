// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PicsApiService from 'services/apiService';
import { useLocation } from 'react-router';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

import Spiner from 'components/Loader/Loader';

const newPicsApiService = new PicsApiService();

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const { url } = useRouteMatch();

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
        <MoviesGallery
          searchResults={searchResults}
          url={url}
          location={location}
          handleOnClick={handleOnClick}
          page={page}
          pages={pages}
        />
      )}
    </>
  );
}
