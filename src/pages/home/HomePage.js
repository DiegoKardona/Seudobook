import React, { Component } from "react";

/*Importing firebase*/
import firebase from "../../firebase";

/*Importing alternatives pages*/
import IndexPage from "../index/IndexPage";
import LoginPage from "../login/LoginPage";

class HomePage extends Component {
  state = {
    email: ""
  };

  componentWillMount() {
    this.handleRenderPage();
  }

  handleRenderPage = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.setState({ email: user.email });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.email ? <IndexPage state={this.state} /> : <LoginPage />}
      </div>
    );
  }
}

export default HomePage;
