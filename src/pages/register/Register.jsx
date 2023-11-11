import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [knfr_psw, setKnfr_psw] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Email : ${email}`);
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);
    console.log(`Konfirmasi Password : ${knfr_psw}`);
  }

  return (
    <body>
      <div class="containerInduk">
        <div class="containerHeader">
          <img src={logo} alt="" class="logo" />
          <h2>MyFilmFx</h2>
        </div>

        <form onSubmit={handleSubmit} class="form_login">
          <div class="container_login">
            <div className="judul">
              <h1>Register</h1>
            </div>

            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>

            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>

            <label htmlFor="psw">
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
            <label htmlFor="knfr_psw">
              <b>Konfirmasi Password</b>
            </label>
            <input
              type="password"
              placeholder="Konfirmasi Password"
              name="knfr_psw"
              id="knfr_psw"
              value={knfr_psw}
              onChange={(e) => setKnfr_psw(e.target.value)}
              required
            />
            <hr />
            <button type="submit" class="registerbtn">
              Register
            </button>
          </div>
          <div className="container signin">
            <p>
              Sudah Memiliki Akun? <a href="/register">Log In</a>.
            </p>
            </div>
        </form>
      </div>
    </body>
  );
};

export default Register;
