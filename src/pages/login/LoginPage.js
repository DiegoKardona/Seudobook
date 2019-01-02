import React, { PureComponent } from "react";

/*Importing components*/
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footer/Footer";

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
