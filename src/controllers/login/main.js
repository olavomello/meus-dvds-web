import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Skin
import Header from "../../skins/header.js";
import Footer from "../../skins/footer.js";

// CSSs
import "./../../App.css"; // Global
import "./style.css";

// Others
import Mascote from "../../assets/img/mascote.png"

function Login() {
  return (
    <Router>
      <div className="app Login">
      <Header/>
      <div className="content col-xs-12">
        <div className="box box-container">
          <div className="row center-xs m-0 p-0">
            <div class="col-xs-6">

              <Switch>
              <Route path="/new">
                    <div className="box login-new">
                      <p>Cadastre-se.</p>
                      <form method="POST">
                        <input type="email" name="cad-nome" class="block col-12 mb-1" placeholder="Digite seu nome"/>  
                        <input type="email" name="cad-e-mail" class="block col-12 mb-1" placeholder="Digite seu e-mail"/>
                        <input type="email" name="cad-senha" class="block col-12 mb-1" placeholder="Digite sua senha"/>

                        <button class="block mr-3">Cadastrar</button>
                        <a href="/">Voltar</a> 
                      </form>
                      <img className="image" src={Mascote} alt=""/>
                    </div>
                </Route>
                <Route path="/lost-pass">
                    <div className="box login-lost-pass">
                      <p>Esqueci minha senha.</p>
                      <form method="POST">
                        <input type="email" name="login" class="block mr-1" placeholder="Digite seu e-mail"/>
                        <button class="block">Receber link de renovação</button>
                        <a href="/" className="block">Voltar</a> 
                      </form>
                      <img className="image" src={Mascote} alt=""/>
                    </div>
                </Route>                
                <Route path="/">
                  <div className="box login-form">
                    <p>Insira seus dados de acesso.</p>
                    <form method="POST">
                      <input type="email" name="login" class="block mr-1" placeholder="Digite seu e-mail"/>
                      <input type="password" name="pass" class="block mr-1" placeholder="Digite sua senha"/>
                      <button class="block">Acessar</button>
                    </form>
                    <div className="new_account">
                      <a href="/new" className="mr-3">Não tenho uma conta</a> 
                      <a href="/lost-pass">Esqueci minha senha</a> 
                    </div>
                    <img className="image" src={Mascote} alt=""/>
                  </div>
                </Route>
              </Switch>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default Login;
