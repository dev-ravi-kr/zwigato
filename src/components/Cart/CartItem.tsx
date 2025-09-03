import type { FC } from 'react';
import classes from './CartItem.module.css';

interface CartItemProps {
  name: string;
  amount: number;
  price: number;
  onAdd: () => void;
  onRemove: () => void;
}

const CartItem: FC<CartItemProps> = ({ name, amount, price, onAdd, onRemove }) => {
  const formattedPrice = `Rs${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
