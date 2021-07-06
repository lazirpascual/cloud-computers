import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
  };

  return (
    <CartContext.Provider value={{ productList, addProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
