import React, { useState, createContext, useEffect } from "react";
import ProductData from "../data/products.json";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
