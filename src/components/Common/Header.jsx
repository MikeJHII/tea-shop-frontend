import React, { useEffect, useState } from "react";
import ImageCartLogo from "../../assets/img/cart.png";
import { signOut } from "../../redux/users/operations";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);
  const navigate = useNavigate()
  const signOutButton = () => {

    dispatch(signOut(navigate));
    setCheckUser(false);
    
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <header>
      <section class="header-box">
        <Link to="/">
          <div class="header">
            <span class="views">TR Tea Shop</span>
          </div>
        </Link>
        <div class="header-links">
          <p class="sign-in-link">
            {checkUser ? (
              <button class="logout" onClick={signOutButton}>
                Logout
              </button>
            ) : (
              <Link to="/signin" class="sign-in">
                Sign In
              </Link>
            )}
          </p>
          {checkUser && (
            <p class="img">
              <Link to="/cart">
                <img src={ImageCartLogo} alt="" />
              </Link>
            </p>
          )}
        </div>
      </section>
    </header>
  );
}
