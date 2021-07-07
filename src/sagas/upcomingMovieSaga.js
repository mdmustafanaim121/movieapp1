import { takeLatest } from "@redux-saga/core/effects";
import { getUpcomingMovies } from "../actions/upcomingMovieAction";
import { GET_UPCOMING_MOVIES } from "../constants/action-types";

function* getUpcomingMovieSaga() {
  yield takeLatest(GET_UPCOMING_MOVIES, getUpcomingMovies);
}

export default getUpcomingMovieSaga;
