import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
  };

  const deleteProduct = (key) => {
    const filteredList = productList.filter((product) => product.id !== key);
    setProductList(filteredList);
  };

  return (
    <CartContext.Provider value={{ productList, addProduct, deleteProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
