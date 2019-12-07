﻿import React from "react";

// Skin
import Header from "../../skins/header.js";
import Footer from "../../skins/footer.js";

// Css global
import "./../../App.css";
// Css 
import "./style.css";

// Images
import Mascote from "../../assets/img/mascote.png"

function Login() {
  return (
    <div className="app">
      <Header/>
      <div className="content">
        <div className="box">
          <div class="Login">
              <p>Insira seus dados de acesso.</p>
              <form method="POST">
                <input type="email" name="login" class="block"/>
                <input type="password" name="pass" class="block"/>
                <button class="block">Acessar</button>
              </form>
              <div className="new_account">
                <a href="#">Não tenho uma conta</a> 
              </div>
              <img className="image" src={Mascote} alt=""/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;