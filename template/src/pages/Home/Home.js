import React from "react";
import logo from "./logo.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Shahzod Ziyodullayev</h3>
        <p>
          Bu template'da material-ui, react-router-dom, redux o'rnatilgan va{" "}
          <br />
          setting qilingan. Fayl strukturasi ish uchun tayyor
        </p>
      </header>
    </div>
  );
};

export default Home;
