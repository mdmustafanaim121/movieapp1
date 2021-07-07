import { takeLatest } from "@redux-saga/core/effects";
import { getUpcomingMovies } from "../actions/upcomingMovieAction";
import { GET_EVENTS } from "../constants/action-types";

function* getEventsSaga() {
  yield takeLatest(GET_EVENTS, getUpcomingMovies);
}

export default getEventsSaga;
