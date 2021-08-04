import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddToCart from "../components/preview/AddToCart";
import CartContextProvider from "../contexts/CartContext";
import UserContextProvider from "../contexts/UserContext";

test("clicking the AddToCart button calls event handler once", () => {
  const addToCart = jest.fn();

  const product = {
    name: "AMD Ryzen 5 5600X",
    price: 299.99,
    quantity: 3,
    category: "Processors",
    imgPath: "https://i.imgur.com/XVadBTJ.png",
    imgPreview: "https://i.imgur.com/53XOJCb.jpg",
    productPreview: "https://i.imgur.com/G48nIgG.png",
  };

  const component = render(
    <UserContextProvider>
      <CartContextProvider>
        <AddToCart preview={product} setCompleteOrder={addToCart} />
      </CartContextProvider>
    </UserContextProvider>
  );

  const button = component.container.querySelector("#cart");
  fireEvent.click(button);

  expect(addToCart.mock.calls).toHaveLength(1);
});
