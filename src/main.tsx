import { StrictMode } from "react";
import type { Root } from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("start");


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const AppRoot: Root = createRoot(rootElement);

AppRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
