import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Rute khusus untuk halaman login */}
        <Route path="/" exact component={Login} />

        {/* Rute default untuk semua halaman lain */}
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <Routes />
              <Footer />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
