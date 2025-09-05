import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useContext } from "react";
import CartModalToggleContext from "./store/cartModalToggleContext";

export default function App() {
  const cartMdlCtx = useContext(CartModalToggleContext);
  return (
    <CartProvider>
      {cartMdlCtx.visible && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
