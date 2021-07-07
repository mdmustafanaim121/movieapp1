import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import AppReducer from "../reducers";
import saga from "../sagas/index";
import upcomingSaga from "../sagas/upcomingMovieSaga";
import getEventsSaga from "../sagas/nearbyEventsSaga";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(getEventsSaga);
sagaMiddleware.run(upcomingSaga);
sagaMiddleware.run(saga);
export default store;
