import React from "react";
import { connect } from 'react-redux';
import { updateSettingByKey } from "../actions";
import { getPopularMovies, getTopRateds } from "../services";
import { savePopularMovies, saveTopRateds } from "../actions";

const handleChange = (event, props) => {
  console.log('props', props);
  console.log('event', event);
  const selected = event.target.value;
  let apiFunc, cb;
  let movies = [];
  if(selected == 'topRated') {
    movies = props.topRateds;
    apiFunc = getTopRateds;
    cb = props.saveTopRateds;
  } else {
    movies = props.popularMovies;
    apiFunc = getPopularMovies;
    cb = props.savePopularMovies;
  }

  console.log('updating display');
  props.updateDisplay({
    key: 'display',
    value: selected
  });

  if(movies && movies.length > 0) {
    return;
  }
  console.log('apiFunc', apiFunc);
  console.log('cb', cb);
  apiFunc()
    .then(r => {
      cb(r);
    });

};

const Nav = (props) => {
  console.log('nav props!!!', props);
  return (
    <nav
      class="navbar navbar-default navbar-fixed-top"
      style={{fontWeight: 'bold', fontSize: '14px', borderBottomWidth: '0px'}}
    >
      <div class="navbar-header">
        Media DB
        <select onChange={(event) => handleChange(event, props)}>
          <option value="popular">Popular Movies</option>
          <option value="topRated">Top Rated</option>
        </select>
      </div>
    </nav>
  );
};

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
      dispatch(updateSettingByKey(payload));
    }
  };
})(Nav);
