import { useState, type ReactNode } from "react";
import CartModalToggleContext, {
  type CartModalToggleContextType,
} from "./cartModalToggleContext";

interface ContextProps {
  children: ReactNode;
}

export default function CartModalToggleProvider({ children }: ContextProps) {
  const [showModal, setshowModal] = useState<boolean>(false);
  const showCart = () => {
    setshowModal(true);
  };
  const hideCart = () => {
    setshowModal(false);
  };

  const modalContext: CartModalToggleContextType = {
    visible: showModal,
    hide: hideCart,
    show: showCart,
  };

  return (
    <CartModalToggleContext value={modalContext}>
      <>{children}</>
    </CartModalToggleContext>
  );
}
