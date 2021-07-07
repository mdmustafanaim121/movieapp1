import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  GET_LATEST_MOVIES,
  GET_LATEST_MOVIES_FAILURE,
  GET_LATEST_MOVIES_SUCCESS,
} from "../constants/action-types";

function makeAPIRequest(url) {
  return axios.get(url).then((response) => response.data);
}

export function getMoviesNow() {
  return { type: GET_LATEST_MOVIES };
}

export function* getLatestMovies() {
  try {
    const latestMovies = yield call(
      makeAPIRequest,
      "http://3.17.216.66:4000/latest"
    );
    yield put({ type: GET_LATEST_MOVIES_SUCCESS, payload: latestMovies });
  } catch (error) {
    yield put({ type: GET_LATEST_MOVIES_FAILURE, errMsg: error });
  }
}
