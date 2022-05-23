import React from "react";
import Login from "../Login/Login";
import "./Home.css";
import logo from "./Sharing-Economy.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        <img src={logo} alt="Logo" width={200} ></img>
        <span>
          Bienvenue dans Quid Pro Quo,
          <br></br>votre espace collaboratif.
        </span>
      </div>
      <div>
        <Login></Login>
      </div>
    </div>
  );
};

export default Home;
