import * as React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ProductDetail from "../../pages/ProductDetail";
import Cart from "../../pages/Cart";

export enum URI {
  Default    = '/',
  Login      = '/login',
  SignUp     = '/signup',
  Product    = '/product/:id',
  Cart       = '/cart',
}

const Router = () => (
  <Switch>
    {/* <Route path={URI.Login} >
      <Login />
    </Route> */}
    <Route path={URI.Product} >
      <ProductDetail />
    </Route>
    <Route path={URI.Cart} >
      <Cart />
    </Route>
    <Route path={URI.Default} >
      <Home />
    </Route>
  </Switch>
);

export default Router;
