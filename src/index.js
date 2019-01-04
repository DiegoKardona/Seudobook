import React from "react";
import { render } from "react-dom";

import "./styles.scss";

/*Importing Redux*/
import store from "./store.js";
import { Provider } from "react-redux";

/*Importing react router*/
import { Switch, Route, BrowserRouter } from "react-router-dom";

/*Importing pages*/
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
