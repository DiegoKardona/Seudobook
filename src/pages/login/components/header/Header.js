import React from "react";

import "./Header.scss";

/*Importing components*/
import InlineLoginForm from "./loginForm/LoginForm";

function Header() {
  return (
    <div id="login-header">
      <div id="brand">
        <h1>Seudobook</h1>
      </div>
      <div id="navigation">
        <InlineLoginForm />
      </div>
    </div>
  );
}

export default Header;
