import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCarts, getSubtotal } from "../../redux/carts/selectors";
import { decreaseCart, increaseCart } from "../../redux/carts/operations";
import { getItems } from "../../redux/items/selectors";

const CartItem = ({cart, quantity, cartId}) => {
  const selector = useSelector(state => state)
  const dispatch = useDispatch();
  // const item = getItems(selector);
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cartId));
  }
  const clickMinusCart = () => {
    dispatch(decreaseCart(cartId));
  }

  return(
    <>
     <div className="item-image">
      <img src={'https://res.cloudinary.com/dttoqmnot/' + cart.image} alt="" className="item-image" />
    </div>
    <div className="info">
      <div className="name">{cart.name}</div>
      <div className="info-bottom">
        <div className="pric">{cart.price}</div>
        <div className="number">
          <span className="minus" onClick={clickMinusCart}>
            -
          </span>
          <span className="count">
            {quantity}
          </span>
          <span className="plus" onClick={clickPlusCart}>
            +
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartItem;