import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (newProduct) => {
    const newList = productList;
    const existingIndex = newList.findIndex(
      (item) => item.id === newProduct.id
    );

    if (existingIndex >= 0) {
      newList[existingIndex].quantity++;
      setProductList(newList);
    } else {
      setProductList([...productList, newProduct]);
    }
  };

  const deleteProduct = (key) => {
    const filteredList = productList.filter((product) => product.id !== key);
    setProductList(filteredList);
  };

  const calculateSubtotal = (product) => {
    // round answer to 2 decimal places
    return Math.round(product.quantity * product.price * 100) / 100;
  };

  const calculateOrderTotal = () => {
    const sum = productList.reduce((accumulator, currentValue) => {
      return accumulator + calculateSubtotal(currentValue);
    }, 0);

    return sum;
  };

  const calculateTotalQuantity = () => {
    const count = productList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);

    return count;
  };

  return (
    <CartContext.Provider
      value={{
        productList,
        addProduct,
        deleteProduct,
        calculateSubtotal,
        calculateOrderTotal,
        calculateTotalQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
