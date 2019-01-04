import React, { Component } from "react";

/*Importing firebase*/
import firebase from "../../firebase";

/*Importing alternatives pages*/
import IndexPage from "../index/IndexPage";
import LoginPage from "../login/LoginPage";

class HomePage extends Component {
  state = {
    logged: false
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      user ? this.setState({ logged: true }) : this.setState({ logged: false });
    });
  }

  render() {
    return <div>{this.state.logged ? <IndexPage /> : <LoginPage />}</div>;
  }
}

export default HomePage;
