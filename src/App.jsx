import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./Router";
import "./assets/style.css";
import Header from "./components/Common/Header"
import Footer from "./components/Common/Footer";
import { getUser } from "./redux/users/selectors";
import { fetchUserFromLocalStorage } from "./redux/users/operations";
import { getSubtotal } from "./redux/carts/selectors";

let pageUrl = window.location.toString();

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const subtotal = getSubtotal(selector);

  useEffect(() => {
    if (
      pageUrl.includes("Shipping") ||
      pageUrl.includes("order-confirmation")
    ) {
      setShowFooter(false);
    }
    dispatch(fetchUserFromLocalStorage());
  }, []);
  return (
    <>
      <Header />
      <Router />
      {showFooter && <Footer price={subtotal} />}
    </>
  );
}

export default App;
