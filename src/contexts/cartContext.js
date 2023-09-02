import { noop } from "lodash";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({ isCartOpen: false });
  const value = { cartData, setCartData };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
