import { createContext } from "react";

export interface CartModalToggleContextType {
  visible: boolean;
  show: () => void;
  hide: () => void;
}

const CartModalToggleContext = createContext<CartModalToggleContextType>({
  visible: false,
  hide: () => {},
  show: () => {},
});

export default CartModalToggleContext;
