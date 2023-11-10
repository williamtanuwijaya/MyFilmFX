import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <body>
      <div class="containerInduk">
        <div class="containerHeader">
          <img src={logo} alt="" class="logo" />
          <h2>MyFilmFx</h2>
        </div>

        <form action="action_page.php" class="form_login">
          <div class="container_login">
            <div className="judul">
              <h1>Register</h1>
            </div>

            <hr />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            ></input>

            <label for="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
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
              required
            ></input>
            <label for="psw">
              <b>Konfirmasi Password</b>
            </label>
            <input
              type="password"
              placeholder="Konfirmasi Password"
              name="psw"
              id="psw"
              required
            />
            <hr />
            <button type="submit" class="registerbtn">
              Register
            </button>
          </div>

          
        </form>
      </div>
    </body>
  );
};

export default Register;
