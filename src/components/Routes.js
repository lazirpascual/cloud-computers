import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeSection from "./home/HomeSection";
import ShopSection from "./shop/ShopSection";
import CartSection from "./cart/CartSection";
import ProductPreview from "./shop/ProductPreview";
import SignUp from "./SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route exact path="/shop" component={ShopSection} />
        <Route exact path="/cart" component={CartSection} />
        <Route exact path="/preview" component={ProductPreview} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
