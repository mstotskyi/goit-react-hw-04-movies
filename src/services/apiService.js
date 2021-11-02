export default class PicsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.movieId = null;
  }

  fetchSearchMovies() {
    const API_KEY = '51424edfe4a0fc9e4606a6acf74e98bb';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  fetchTrendingFilms() {
    const API_KEY = '51424edfe4a0fc9e4606a6acf74e98bb';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const URL = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  fetchMoviesById() {
    const API_KEY = '51424edfe4a0fc9e4606a6acf74e98bb';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const URL = `${BASE_URL}movie/${this.movieId}?api_key=${API_KEY}`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  fetchCastById() {
    const API_KEY = '51424edfe4a0fc9e4606a6acf74e98bb';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const URL = `${BASE_URL}movie/${this.movieId}/credits?api_key=${API_KEY}`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  fetchReviewsById() {
    const API_KEY = '51424edfe4a0fc9e4606a6acf74e98bb';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const URL = `${BASE_URL}movie/${this.movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  getHits(total_results) {
    this.total_results = total_results;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get movieId() {
    return this.id;
  }

  set movieId(newId) {
    this.id = newId;
  }
}
