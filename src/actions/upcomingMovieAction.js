import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  GET_LATEST_MOVIES_FAILURE,
  GET_UPCOMING_MOVIES,
  GET_UPCOMING_MOVIES_SUCCESS,
} from "../constants/action-types";

function makeAPIRequest(url) {
  return axios.get(url).then((response) => response.data);
}

export function getUpcomingMoviesNow() {
  return { type: GET_UPCOMING_MOVIES };
}

export function* getUpcomingMovies() {
  try {
    const upcomingMovies = yield call(
      makeAPIRequest,
      "http://3.17.216.66:4000/upcomingMovies"
    );
    yield put({ type: GET_UPCOMING_MOVIES_SUCCESS, payload: upcomingMovies });
  } catch (error) {
    yield put({ type: GET_LATEST_MOVIES_FAILURE, errMsg: error });
  }
}
