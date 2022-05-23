import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/Actions/userActions";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="loginRight">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login({ email, password }, navigate));
        }}
        className="loginBox"
      >
        <input
          placeholder="Email"
          type="email"
          required
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          required
          minLength="6"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          S'identifier
        </button>
        <span className="loginForgot">Mot de passe oublié ?</span>
        <span>Pas encore de compte ?</span>
        <Link to="/register">
          <button
            className="loginButton"
            type="submit"
            style={{ background: "green" }}
          >
            S'enregister
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
