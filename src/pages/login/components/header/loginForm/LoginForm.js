import React, { PureComponent } from "react";

import "./LoginForm.scss";

/*Importing firebase*/
import firebase from "firebase";

class LoginForm extends PureComponent {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        // Handling errors
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorCode);
        }
      });
  };

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <div id="email-input">
          <label>Correo electrónico o teléfono</label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div id="password-input">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <p id="forgot-password">¿Olvidaste tu cuenta?</p>
        </div>
        <button id="submit-button" type="submit">
          Iniciar sesión
        </button>
      </form>
    );
  }
}

export default LoginForm;
