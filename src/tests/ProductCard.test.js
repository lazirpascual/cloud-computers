import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ProductCard from "../components/shop/ProductCard";
import ProductContextProvider from "../contexts/ProductContext";

// this is testing if the list of products in the shop is being generated properly
test("<ProductCard /> renders the correct content", () => {
  const product = {
    name: "AMD Ryzen 5 5600X",
    price: 299.99,
    imgPath: "https://i.imgur.com/XVadBTJ.png",
    imgPreview: "https://i.imgur.com/53XOJCb.jpg",
  };

  const component = render(
    <ProductContextProvider>
      <ProductCard product={product} />
    </ProductContextProvider>
  );

  // check if the rendered ProductCard contains the correct content
  expect(component.container).toHaveTextContent("AMD Ryzen 5 5600X");
  expect(component.container).toHaveTextContent(299.99);
});
