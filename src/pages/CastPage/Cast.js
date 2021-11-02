import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PicsApiService from 'services/apiService';
import defaultImg from '../../images/default.jpg';
import styles from 'pages/CastPage/Cast.module.css';
import Spiner from 'components/Loader/Loader';

const newPicsApiService = new PicsApiService();

export default function Cast() {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [showSpiner, setShowSpiner] = useState(false);

  useEffect(() => {
    setShowSpiner(true);
    newPicsApiService.movieId = movieId;
    newPicsApiService
      .fetchCastById()
      .then(result => {
        setCredits(result.cast);
        setShowSpiner(false);
      })
      .catch(error => {});
  }, [movieId]);
  return (
    <>
      {showSpiner && <Spiner />}

      <div>
        {credits.length > 0 ? (
          <ul className={styles.castGallery}>
            {credits.map(cast => (
              <li key={cast.cast_id}>
                <div className={styles.ImgThumb}>
                  {cast.profile_path ? (
                    <img
                      src={`${BASE_IMG_URL}${cast.profile_path}`}
                      alt={cast.name}
                      className={styles.CastImage}
                    />
                  ) : (
                    <img src={defaultImg} alt={cast.name} width="200" />
                  )}
                </div>

                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          `We don't have cast info for this movie.`
        )}
      </div>
    </>
  );
}
