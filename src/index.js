import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./routing/routing";

render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
