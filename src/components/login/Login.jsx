import { React, useEffect } from "react";
import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const getLoginStyles = () => {
    if (props.isEnterPressed) {
      if (document.documentElement.clientWidth <= 530) {
        return { right: "10%", top: "460%" };
      } else if (document.documentElement.clientWidth <= 770) {
        return { right: "50%", top: "58%" };
      }
      return { right: "15%" };
    }
  };

  return (
    <div className="flexColCenter login-container" style={getLoginStyles()}>
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
};
export default Login;
