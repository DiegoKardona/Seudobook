import React from "react";
import { render } from "react-dom";

import "./styles.scss";

/*Importing firebase*/
import firebase from "./firebase";

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
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
