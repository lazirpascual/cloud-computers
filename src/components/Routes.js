import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeSection from "./home/HomeSection";
import ShopSection from "./shop/ShopSection";
import CartSection from "./cart/CartSection";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route exact path="/shop" component={ShopSection} />
        <Route exact path="/cart" component={CartSection} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
