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

  const calculateSubtotal = (product) => {
    return product.quantity * product.price;
  };

  const calculateOrderTotal = () => {
    const sum = productList.reduce((accumulator, currentValue) => {
      return accumulator + calculateSubtotal(currentValue);
    }, 0);

    return sum;
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        addProduct,
        deleteProduct,
        calculateSubtotal,
        calculateOrderTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
