import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./containers/Cart";
import Home from "./containers/Home";
import Shipping from "./containers/Shipping";
import Signin from "./containers/Signin";
import SignUp from "./containers/SignUp";
import OrderConfirmation from "./containers/order-confirmation";

const Router = () => {
  return (
   <>
      <Routes>
        <Route exact path={"/"} element={<Home/>} />
        <Route exact path={"/cart"} element={<Cart/>} />
        <Route exact path={"/signup"} element={<SignUp/>} />
        <Route exact path={"/signin"} element={<Signin/>} />
        <Route exact path={"/shipping"} element={<Shipping/>} />
        <Route exact path={"/order-confirmation"} element={<OrderConfirmation/>} />
      </Routes>
    </>
  );
};
export default Router;
