import {
  GET_UPCOMING_MOVIES_SUCCESS,
  GET_LATEST_MOVIES_SUCCESS,
  GET_EVENTS_SUCCESS,
  GET_LATEST_MOVIES_FAILURE,
  GET_LATEST_MOVIES,
  GET_UPCOMING_MOVIES_FAILURE,
  GET_EVENTS_FAILURE,
  GET_EVENTS,
  GET_UPCOMING_MOVIES,
} from "../constants/action-types";

const initialState = {
  movies: [],
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_MOVIES: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case GET_LATEST_MOVIES_SUCCESS: {
      const newState = { ...state };
      newState.movies = action.payload;
      newState.isLoading = false;
      return newState;
    }

    case GET_LATEST_MOVIES_FAILURE: {
      const newState = { ...state };
      newState.error = action.errMsg;
      newState.isLoading = false;
      return newState;
    }

    case GET_UPCOMING_MOVIES: {
      const newState = { ...state };
      newState.movies = action.payload;
      newState.isLoading = true;
      return newState;
    }

    case GET_UPCOMING_MOVIES_SUCCESS: {
      const newState = { ...state };
      newState.movies = action.payload;
      newState.isLoading = false;
      return newState;
    }

    case GET_UPCOMING_MOVIES_FAILURE: {
      const newState = { ...state };
      newState.error = action.errMsg;
      newState.isLoading = false;
      return newState;
    }

    case GET_EVENTS: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case GET_EVENTS_SUCCESS: {
      const newState = { ...state };
      newState.movies = action.payload;
      newState.isLoading = false;
      return newState;
    }

    case GET_EVENTS_FAILURE: {
      const newState = { ...state };
      newState.error = action.errMsg;
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
