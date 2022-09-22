import React, { Fragment } from "react";

// Components imports
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
