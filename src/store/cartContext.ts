import React from 'react';

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface CartContextType {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {}
});

export default CartContext;