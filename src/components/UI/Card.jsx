import React from "react";

// Styles imports
import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
