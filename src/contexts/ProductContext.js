import React, { useState, createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [preview, setPreview] = useState({});

  const savePreview = (product) => {
    setPreview({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      imgPath: product.imgPath,
      imgPreview: product.imgPreview,
      productPreview: product.productPreview,
      id: product.id,
    });
  };

  return (
    <ProductContext.Provider value={{ preview, savePreview }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
