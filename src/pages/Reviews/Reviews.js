import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spiner from 'components/Loader/Loader';

import PicsApiService from 'services/apiService';

const newPicsApiService = new PicsApiService();

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [showSpiner, setShowSpiner] = useState(false);

  useEffect(() => {
    setShowSpiner(true);

    newPicsApiService.movieId = movieId;
    newPicsApiService
      .fetchReviewsById()
      .then(result => {
        setReviews(result.results);
        setShowSpiner(false);
      })
      .catch(error => {});
  }, [movieId]);

  return (
    <div>
      {showSpiner && <Spiner />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.author}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </div>
  );
}
