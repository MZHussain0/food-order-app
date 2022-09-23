import React, { useContext } from "react";

// Components imports
import CartIcon from "../Cart/CartIcon";

// Styles imports
import styles from "./HeaderCartButton.module.css";

// Context imports
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const NumberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{NumberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
