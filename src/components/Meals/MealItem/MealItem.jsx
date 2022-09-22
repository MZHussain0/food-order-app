import React from "react";

// Styles imports
import styles from "./MealItem.module.css";

// Components import
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const prices = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{prices}</div>
      </div>

      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
