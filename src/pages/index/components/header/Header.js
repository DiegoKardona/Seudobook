import React from "react";

import "./Header.scss";

/*Importing firebase*/
import firebase from "firebase";

function Header(props) {
  var currentUser = firebase.auth().currentUser;

  return (
    <div id="header">
      <div id="left-content">
        <div id="brand" />
        <div id="search-box">
          <form id="search-form">
            <div id="search-input-container">
              <input id="search-input" type="text" placeholder="Buscar" />
            </div>
            <div id="search-button-container">
              <button id="search-button" type="submit">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="right-content">
        <div id="profile">
          <div id="avatar">
            <img
              id="user-avatar"
              src={currentUser.photoURL}
              alt={currentUser.displayName}
            />
          </div>
          <div id="name">
            <small id="user-name">{currentUser.displayName}</small>
          </div>
        </div>
        <div id="navigation">
          <button id="logout-button" onClick={props.handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
