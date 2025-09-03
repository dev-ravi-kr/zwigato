import type { FC } from 'react';
import { useContext } from 'react';

import CartContext from '../../../store/cartContext';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: FC<MealItemProps> = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `Rs${price.toFixed(2)}`;
 
  const addToCartHandler = (amount: number): void => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
