import type { FC } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

const DUMMY_MEALS: Meal[] = [
  {
    id: 'm1',
    name: 'Fish Curry',
    description: 'Fresh Fish',
    price: 300,
  },
  {
    id: 'm2',
    name: 'Chicken Chilli',
    description: 'Fresh Chicken',
    price: 350,
  },
  {
    id: 'm3',
    name: 'Pani Puri',
    description: 'Tasty',
    price: 50,
  },
  {
    id: 'm4',
    name: 'Chicken Biryani',
    description: 'number 1 in India',
    price: 330,
  },
  {
    id: 'm5',
    name: 'Chicken do Pyaza',
    description: 'Grayi',
    price: 320,
  },
  {
    id: 'm6',
    name: 'Chicken Chilli',
    description: 'Dry',
    price: 310,
  },
];

const AvailableMeals: FC = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
