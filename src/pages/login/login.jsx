import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e){
    e.preventDefault();
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);
  }

  return (
    
      <div className="containerInduk">
        <div className="containerHeader">
          <img src={logo} alt="" className="logo" />
          <h2>MyFilmFx</h2>
        </div>

        <form onSubmit={handleSubmit} className="form_login">
          <div className="container_login">
            <div className="judul">
              <h1>Log In</h1>
            </div>

            <hr />
            <label for="email">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>

            <hr />
            <button type="submit" className="registerbtn">
              Login
            </button>
          </div>

          <div className="container signin">
            <p>
              Belum Memiliki Akun? <a href="/register">Register</a>.
            </p>
          </div>
        </form>
      </div>
    
  );
};

export default Login;
