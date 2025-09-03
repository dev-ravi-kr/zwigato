import type { FC } from 'react';
import { Fragment } from 'react';

import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals: FC = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
