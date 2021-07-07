import React, { useEffect } from "react";
import LatestMovies from "../component/latestMovies";
import { getMoviesNow } from "../actions/actions";
import { connect } from "react-redux";

function LatestMovieContainer({
  movies,
  getMovies,
  history,
  isLoading,
  error,
}) {
  useEffect(() => {
    localStorage.clear();
    getMovies();
  }, []);

  return (
    <LatestMovies
      movies={movies}
      loading={isLoading}
      history={history}
      error={error}
    />
  );
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
    getMovies: function () {
      dispatch(getMoviesNow());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestMovieContainer);
