import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [productList, setProductList] = useState([]);

  const updateCartState = () => {
    // function that updates the productList state
    const filteredList = productList.filter((product) => product);
    setProductList(filteredList);
  };

  const addProduct = (newProduct) => {
    const newList = productList;
    // check if item already exists
    const existingIndex = newList.findIndex(
      (item) => item.id === newProduct.id
    );
    // if item exists, +1 quantity, else, add item to list
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
    const subtotal = product.quantity * product.price;
    const roundedTotal = Math.round(subtotal * 100) / 100;
    return roundedTotal;
  };

  const calculateOrderTotal = () => {
    const sum = productList.reduce((accumulator, currentValue) => {
      return accumulator + calculateSubtotal(currentValue);
    }, 0);
    const roundedSum = Math.round(sum * 100) / 100;
    return roundedSum;
  };

  const calculateTotalQuantity = () => {
    const count = productList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);

    return count;
  };

  const updateQuantity = (quantity, key) => {
    const newList = productList;

    newList.forEach((product) => {
      if (product.id === key) {
        product.quantity = quantity;
      }
    });
    setProductList(newList);
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
        updateQuantity,
        updateCartState,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
