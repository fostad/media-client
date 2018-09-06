import React from "react";
import { connect } from 'react-redux';
import { getPopularMovies } from "../services";
import { savePopularMovies } from "../actions";
import MovieList from "../components/movie-list";

class Search extends React.Component {
  constructor() {
    super();
    this.handlePopularClick = this.handlePopularClick.bind(this);
  }

  handlePopularClick() {
    const { savePopularMovies } = this.props;
    getPopularMovies()
      .then(movies => {
        savePopularMovies(movies);
      });
  }

  render() {
    const { popularMovies } = this.props;
    console.log('popularMovies', popularMovies);
    return (
      <div>
        <button onClick={this.handlePopularClick}>Popular</button>
        {
          popularMovies ?  <MovieList movies={popularMovies}/> : null
        }
      </div>
    );
  }

}

export default connect(state => {
  return {
    popularMovies : state.popularMovies
  };
}, dispatch => {
  return {
    savePopularMovies: payload => {
      dispatch(savePopularMovies(payload));
    }
  };
})(Search);
