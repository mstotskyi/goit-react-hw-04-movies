import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from 'components/MoviesGallery/MoviesGallery.module.css';
import defaultImg from '../../images/default.jpg';
import { Button } from 'components/Button/Button';

export function MoviesGallery({
  searchResults,
  url,
  location,
  handleOnClick,
  page,
  pages,
}) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
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
                    <img src={`${defaultImg}`} alt={`${searchResult.title}`} />
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
  );
}

MoviesGallery.propTypes = {
  searchResults: PropTypes.array.isRequired,
  url: PropTypes.string,
  location: PropTypes.object,
  handleOnClick: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number,
};
