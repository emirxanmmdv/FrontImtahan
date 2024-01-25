import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import WishlistProvider, { WishlistContext } from "./Context/WishlistContext.jsx";
import BasketProvider from "./Context/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <BasketProvider>
         <App />
      </BasketProvider>
    </WishlistProvider>
  </React.StrictMode>
);
