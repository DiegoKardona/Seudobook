import React, { PureComponent } from "react";

/*Importing main section scss file*/
import "../mainSection/MainSection.scss";

/*Importing firebase*/
import firebase from "firebase";

class RegisterForm extends PureComponent {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleSubmit = e => {
    //e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        var data = this.state;
        var user = firebase.auth().currentUser;

        const userName = data.firstname + " " + data.lastname;

        user.updateProfile({ displayName: userName });
      })
      .catch(error => {
        //Handling errors
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
      });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form id="register-form" onSubmit={this.handleSubmit}>
        <div id="personal-info">
          <input
            id="firstname-input"
            name="firstname"
            type="text"
            onChange={this.handleChange}
            value={this.state.firstname}
            placeholder="Nombre"
          />
          <input
            id="lastname-input"
            name="lastname"
            type="text"
            onChange={this.handleChange}
            value={this.state.lastname}
            placeholder="Apellido"
          />
        </div>
        <div id="account-info">
          <input
            id="email-input"
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="Número de celular o correo electrónico"
          />
          <input
            id="password-input"
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Contraseña nueva"
          />
        </div>
        <small>
          Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la
          Política de datos y la Política de cookies. Es posible que te enviemos
          notificaciones por SMS, que puedes desactivar cuando quieras.
        </small>
        <button id="register-button" type="submit">
          Registrarse
        </button>
      </form>
    );
  }
}

export default RegisterForm;
