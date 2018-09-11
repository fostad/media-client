const baseUri = 'https://api.themoviedb.org/3/';

const _fetch = (uri, {
  method, body
}) => {
  return fetch(baseUri + uri + '?api_key=2a7632e3e000c767e8b8634c428a0ee9', {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    });
};

const _get = (uri) => {
  return _fetch(uri, {
    method: 'GET'
  });
};

const getPopularMovies = () => {
  return _get('movie/popular')
    .then(r => r.results);
};

const getTopRateds = () => {
  return _get('movie/top_rated')
    .then(r => r.results);
};

module.exports = {
  getPopularMovies,
  getTopRateds
};
