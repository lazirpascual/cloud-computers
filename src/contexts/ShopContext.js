import React, { useState, createContext, useEffect } from "react";
import ProductData from "../data/products.json";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const filterProduct = (category) => {
    const filteredProduct = products.items.filter(
      (item) => item.id === category
    );
    setProducts(filteredProduct);
  };

  return (
    <ShopContext.Provider value={{ products, filterProduct }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
