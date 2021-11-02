import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PicsApiService from 'services/apiService';

const newPicsApiService = new PicsApiService();

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  console.log(movieId);
  useEffect(() => {
    newPicsApiService.movieId = movieId;
    newPicsApiService
      .fetchReviewsById()
      .then(result => {
        console.log(result);
        setReviews(result.results);
      })
      .catch(error => {});
  }, [movieId]);

  return (
    <div>
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
