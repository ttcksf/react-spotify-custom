import React from "react";
import { loginEndpoint } from "../../spotify";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <img className="logo" src="https://source.unsplash.com/random" />
      <a href={loginEndpoint}>
        <div className="login-btn">LogIn</div>
      </a>
    </div>
  );
};

export default Login;
