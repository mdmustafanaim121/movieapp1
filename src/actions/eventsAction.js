import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_LATEST_MOVIES_FAILURE,
} from "../constants/action-types";

function makeAPIRequest(url) {
  return axios.get(url).then((response) => response.data);
}

export function getEventsNow() {
  return { type: GET_EVENTS };
}

export function* getNearbyEvents() {
  try {
    const events = yield call(makeAPIRequest, "http://3.17.216.66:4000/events");
    yield put({ type: GET_EVENTS_SUCCESS, payload: events });
  } catch (error) {
    yield put({ type: GET_LATEST_MOVIES_FAILURE, errMsg: error });
  }
}
