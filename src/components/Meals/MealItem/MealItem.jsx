import React, { useContext } from "react";

// Styles imports
import styles from "./MealItem.module.css";

// Components import
import MealItemForm from "./MealItemForm";

// Context Imports
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const prices = `$${price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{prices}</div>
      </div>

      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
