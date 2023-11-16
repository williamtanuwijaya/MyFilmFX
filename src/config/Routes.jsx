import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/search/:category/:keyword" component={Catalog} />
      <Route path="/detail/:category/:id" component={Detail} />
      <Route path="/category/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
