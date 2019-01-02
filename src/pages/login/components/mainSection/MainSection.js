import React from "react";

import "./MainSection.scss";

/*Importing components*/
import RegisterForm from "../registerForm/RegisterForm";

function MainSection() {
  return (
    <div id="section">
      <div id="section-container">
        <div id="left-content">
          <h3>
            Seudobook te ayuda a comunicarte y compartir con las personas que
            forman parte de tu vida.
          </h3>
          <img
            id="principal-img"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png"
            alt="Seudobook help you to comunicate"
          />
        </div>
        <div id="right-content">
          <h1>Registrarse</h1>
          <h3>Es gratis y lo será siempre.</h3>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
