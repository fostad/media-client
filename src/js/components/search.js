import React from "react";
import { connect } from 'react-redux';
import { getPopularMovies, getTopRateds } from "../services";
import { savePopularMovies, saveTopRateds, updateDisplay } from "../actions";
import MovieList from "../components/movie-list";

class Search extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      savePopularMovies, saveTopRateds, updateDisplay, popularMovies, topRateds
    } = this.props;
    const selected = event.target.value;
    updateDisplay({display: selected});

    let apiFunc = getPopularMovies;
    let cb = savePopularMovies;
    let movies = popularMovies;
    switch (selected) {
    case "popular":
      apiFunc = getPopularMovies;
      cb = savePopularMovies;
      movies = popularMovies;
      break;
    case "topRated":
      apiFunc = getTopRateds;
      cb = saveTopRateds;
      movies = topRateds;
      break;
    default:
      apiFunc = getPopularMovies;
      cb = savePopularMovies;
      movies = popularMovies;
    }

    if(!movies || movies.length <= 0) {
      apiFunc()
        .then(movies => {
          cb(movies);
        });
    }
  }

  render() {
    const { popularMovies, topRateds, display } = this.props;
    console.log('this.props', this.props);
    let movies = popularMovies;
    switch (display) {
    case "popular":
      movies = popularMovies;
      break;
    case "topRated":
      movies = topRateds;
      break;
    default:
      movies = popularMovies;
    }
    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="popular">Popular Movies</option>
          <option value="topRated">Top Rated</option>
        </select>
        <MovieList movies={movies}/>
      </div>
    );
  }

}

export default connect(state => {
  return {
    popularMovies : state.popularMovies,
    topRateds : state.topRateds,
    display : state.settings.display
  };
}, dispatch => {
  return {
    savePopularMovies: payload => {
      dispatch(savePopularMovies(payload));
    },
    saveTopRateds: payload => {
      dispatch(saveTopRateds(payload));
    },
    updateDisplay: payload => {
      dispatch(updateDisplay(payload));
    }
  };
})(Search);
