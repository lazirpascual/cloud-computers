import React, { useState, useEffect, createContext, useContext } from "react";
import cartService from "../services/cartitems";
import userItemsService from "../services/useritems";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getDemoCart = async (event) => {
      const initialCartList = await cartService.getAll();
      setProductList(initialCartList);
    };

    const getUserCart = async (event) => {
      const initialCartList = await userItemsService.getAll();
      const userCartList = initialCartList.filter(
        (product) => user.name === product.user.name
      );
      setProductList(userCartList);
    };

    user ? getUserCart() : getDemoCart();
  }, [user]);

  const updateCartState = () => {
    // function that updates the productList state
    const filteredList = productList.filter((product) => product);
    setProductList(filteredList);
  };

  const addProduct = (newProduct) => {
    const service = user ? userItemsService : cartService;

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
      service.create(newProduct).then((returnedProduct) => {
        setProductList([...productList, returnedProduct]);
      });
    }
  };

  const deleteProduct = (key) => {
    const service = user ? userItemsService : cartService;

    if (window.confirm("Remove This Product?")) {
      service.remove(key).then(() => {
        setProductList(productList.filter((product) => product.id !== key));
      });
    }
  };

  const updateQuantity = (newQuantity, product) => {
    const service = user ? userItemsService : cartService;
    const updatedProduct = { ...product, quantity: newQuantity };

    service
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
