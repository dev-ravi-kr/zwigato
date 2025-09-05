import { StrictMode } from "react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import CartModalToggleProvider from "./store/CartModalToggleProvider";

let rootElement = document.getElementById("root");

if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.setAttribute("id", "root");
  document.querySelector("body")?.appendChild(rootElement);
}

const AppRoot: Root = createRoot(rootElement);

AppRoot.render(
  <StrictMode>
    <CartModalToggleProvider>
      <App />
    </CartModalToggleProvider>
  </StrictMode>
);
