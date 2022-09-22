import React from "react";

// Styles imports
import styles from "./MealItem.module.css";

const MealItem = ({ name, description, price }) => {
  const prices = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{prices}</div>
      </div>

      <div></div>
    </li>
  );
};

export default MealItem;
