import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cartContext';
import type { CartItem as CartItemType } from '../../store/cartContext';

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`;
 
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string): void => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: CartItemType): void => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};


