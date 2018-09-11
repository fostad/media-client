import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSettingByKey } from "../actions";

const MovieList = ({movies}) => {
  console.log('movies', movies);
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {
        movies && movies.length > 0 ? movies.map(movie => {
          const imageSrc = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
          return (
            <div style={{display: "flex", flexDirection: "row", marginTop: '20px'}}>
              <div style={{marginLeft: '30px', marginRight: '15px'}}>
                <img src={imageSrc} size width="50" height="70"/>
              </div>
              <div style={{display: "flex", flexDirection: "column"}}>
                <Link to='/movie' style={{fontSize: '20px'}}>
                  {movie.title}
                </Link>
                <div style={{fontSize: '10px'}}>
                  {movie.overview}
                </div>
              </div>

            </div>
          );
        }) : null
      }
    </div>
  );
};

export default connect(null, dispatch => {
  return {
    updateSelectedMovie: payload => {
      dispatch(updateSettingByKey(payload));
    }
  };
})(MovieList);
