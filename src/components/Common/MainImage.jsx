import React, { useState } from "react";
import MainImg from "../../assets/img/MainImg.png";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";
import { Link } from "react-router-dom";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section class="main-visual">
        <div class="main-catch"></div>
        <img src={MainImg} alt="" />
        {checkUser && (
          <p class="img">
            <Link to="/cart">
              <img src={ImageCartLogo} alt="" />
            </Link>
          </p>
        )}
      </section>
    </>
  );
};

export default MainImage;
