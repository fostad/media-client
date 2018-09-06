const popularMovies = (state = [], action) => {
  switch(action.type) {
  case 'SAVE_POPULAR_MOVIES':
    return action.payload;
  default:
    return state;
  }
};

export default popularMovies;
