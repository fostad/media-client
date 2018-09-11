import React from "react";
import { connect } from 'react-redux';
import MovieList from './movie-list';

const getMovies = ({ display, popularMovies, topRateds }) => {
  console.log('display', display);
  switch (display) {
  case 'popular':
    return popularMovies;
  case 'topRated':
    return topRateds;
  default:
    return popularMovies;
  }
};

const Movies = props => {
  const { display, popularMovies, topRateds } = props;
  console.log('movies topRated', topRateds);
  const moviesToDisplay = getMovies({ display, popularMovies, topRateds });
  return (
    <div>
      <MovieList movies={moviesToDisplay}/>
    </div>
  );
};

export default connect(state => {
  return {
    display: state.settings.display,
    popularMovies: state.popularMovies,
    topRateds: state.topRateds
  };
}, null)(Movies);
