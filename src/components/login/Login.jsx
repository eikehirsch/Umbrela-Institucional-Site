import { React, useEffect } from "react";
import "./Login.css";

const Login = () => {

  return (
    <div className="flexColCenter login-container">
      <img src="./umbrella-switch.png" className="umbrella-switch" alt="" />
      <label className="flexColCenter">
        Login
        <input className="login-input" type="text" placeholder="E-mail" />
      </label>
      <label className="flexColCenter">
        Password
        <input className="login-input" type="password" placeholder="Senha" />
      </label>

      <button className="button login-button">Entrar</button>

      <span>
        <a className="forgot-password" href="">
          Esqueci minha senha
        </a>
      </span>
    </div>
  );
}
export default Login;
