import React, { PureComponent } from "react";

/*Importing firebase*/
import firebase from "firebase";

import HomePage from "../../home/HomePage";
/*Importing components*/
import Header from "../components/header/Header";

class HandleHeader extends PureComponent {
  handleLogout = e => {
    firebase.auth().signOut();
  };

  l;
  render() {
    return (
      <div>
        <Header handleLogout={this.handleLogout} />
      </div>
    );
  }
}

export default HandleHeader;
