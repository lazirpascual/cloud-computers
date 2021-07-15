import React, { useState, useEffect, createContext } from "react";
import cartService from "../services/cartitems";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    cartService.getAll().then((initialCartList) => {
      setProductList(initialCartList);
    });
  }, []);

  const updateCartState = () => {
    // function that updates the productList state
    const filteredList = productList.filter((product) => product);
    setProductList(filteredList);
  };

  const addProduct = (newProduct) => {
    const newList = productList;
    // check if item already exists
    const existingIndex = newList.findIndex(
      (item) => item.name === newProduct.name
    );
    // if item exists, +1 quantity, else, add item to list
    if (existingIndex >= 0) {
      newList[existingIndex].quantity++;
      setProductList(newList);
    } else {
      cartService.create(newProduct).then((returnedProduct) => {
        setProductList([...productList, returnedProduct]);
      });
    }
  };

  const deleteProduct = (key) => {
    if (window.confirm("Remove This Product?")) {
      cartService.remove(key).then(() => {
        setProductList(productList.filter((product) => product.id !== key));
      });
    }
  };

  const updateQuantity = (newQuantity, product) => {
    const updatedProduct = { ...product, quantity: newQuantity };

    cartService
      .update(product.id, updatedProduct)
      .then((returnedProduct) => {
        setProductList(
          productList.map((newProduct) =>
            newProduct.id !== product.id ? newProduct : returnedProduct
          )
        );
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
