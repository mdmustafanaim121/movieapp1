import { takeLatest } from "@redux-saga/core/effects";
import { getLatestMovies } from "../actions/actions";
import { GET_LATEST_MOVIES } from "../constants/action-types";

function* getDataSaga() {
  yield takeLatest(GET_LATEST_MOVIES, getLatestMovies);
}

export default getDataSaga;
