import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CartProducts from "../components/cart/CartProducts";
import CartContextProvider from "../contexts/CartContext";
import UserContextProvider from "../contexts/UserContext";

// this is testing if the list of products in the cart is being generated properly
test("<CartProducts /> renders the correct content", () => {
  const product = {
    name: "AMD Ryzen 5 5600X",
    price: 299.99,
    quantity: 3,
    imgPath: "https://i.imgur.com/XVadBTJ.png",
    imgPreview: "https://i.imgur.com/53XOJCb.jpg",
  };

  const component = render(
    <UserContextProvider>
      <CartContextProvider>
        <CartProducts product={product} />
      </CartContextProvider>
    </UserContextProvider>
  );

  // check if the rendered CardProducts contains the correct content
  expect(component.container).toHaveTextContent("AMD Ryzen 5 5600X");
  expect(component.container).toHaveTextContent(299.99); // price
  expect(component.container).toHaveTextContent(3); // quantity
  expect(component.container).toHaveTextContent(899.97); // subtotal
});
