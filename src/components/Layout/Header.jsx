// react imports
import React, { Fragment } from "react";

// Styles imports
import styles from "./Header.module.css";

// Asset imports
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>InstaMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
