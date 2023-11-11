// import 'swiper/swiper.min.css';
// import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HalamanLogin from "./pages/login/Login";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {

  const [currentForm, setCurrentForm] = useState('Register');


  return (
    currentForm === "Login"? <Login/> : <Register/> 

    // <BrowserRouter>
    //   <Route
    //     render={(props) => (
    //       <>
    //         <Header {...props} />
    //         <Routes />
    //         <Footer />
    //       </>
    //     )}
    //   />
    // </BrowserRouter>
    
   
  );
}

export default App;
