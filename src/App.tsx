import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

export default function App() {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCartHandler = (): void => {
    // console.log("Show cart");
    
    setCartIsShown(true);
  };

  const hideCartHandler = (): void => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
