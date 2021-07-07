import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingMoviesNow } from "../actions/upcomingMovieAction";
import UpcomingMovies from "../component/upcomingMovies";

function UpcomingMovieContainer({
  getUpcomingMovies,
  movies,
  isLoading,
  error,
}) {
  useEffect(() => {
    localStorage.clear();
    getUpcomingMovies();
  }, []);

  return <UpcomingMovies data={movies} loading={isLoading} error={error} />;
}

function mapStateToProps(value) {
  return {
    movies: value.movies,
    isLoading: value.isLoading,
    error: value.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUpcomingMovies: function () {
      dispatch(getUpcomingMoviesNow());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingMovieContainer);
