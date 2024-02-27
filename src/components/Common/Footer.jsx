import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer({ price }) {
  const location = useLocation()
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const [showFooter, setShowFooter] = useState(true)
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (location.pathname.includes("cart")) {
      setShowCheckoutButton(false);
      setShowFooter(true)
    }else if (location.pathname.includes("shipping") || location.pathname.includes("order-confirmation")){
      setShowFooter(false)
    }else{
      setShowCheckoutButton(true);
      setShowFooter(true)
    }
  }, [location.pathname]);

  return (
    <footer>
      {key !== null && showFooter && (
        <div class="subtotal">
          <span>Subtotal: ${price}</span>
          {showCheckoutButton ? (
            <Link to="/cart">
              <button>Check your Cart</button>
            </Link>
          ) : (
            <>
            {price !== 0 && 
            <Link to="/shipping">
              <button>Checkout</button>
            </Link>
            }{price === 0 && 
              <Link to="/">
                <button>No items in your Cart</button>
              </Link>
              }
            </>
            
          )}
        </div>
      )}
    </footer>
  );
}
